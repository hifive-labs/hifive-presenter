/*
 * Copyright (C) 2017 NS Solutions Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
;(function() {
	'use strict';
	var config = require('./server/config.js');

	var express = require('express');
	var app = express();
	var bodyParser = require('body-parser');
	var server = require('http').Server(app);
	var io = require('socket.io')(server);

	// for parsing application/json
	app.use(bodyParser.json());

	// for parsing application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: true }));

	/**
	 * Socket.Io init
	 */
	io.sockets.on('connection', function(socket) {
		console.log('io connected!');

		socket.on('disconnect', function(socket) {
			 console.log('io disconnected!');
		});
	});

	/**
	 * Load Client
	 */
	app.get('/', function (req, res) {
		res.sendFile(__dirname + '/static/client/index.html');
	});
	app.use(express.static('static/client'));
	app.use(express.static('static/res/lib'));

	/**
	 * Slide socket
	 */
	var slidesIO = io.of('/slides');
	// make io accessible for all routes in namespace /slides
  app.use(config.apiRoute.concat('slides/'), function(req,res,next){
    req.io = slidesIO;
    next();
  });

	var slideCtrl = require('./server/slide/slide.controller.js');
	slidesIO.on('connection', function(socket) {
		console.log('io connected to slides');		
		socket.on('disconnect', function(socket) {
			console.log('io disconnected out slides');
		});
		
		// Get Init Data
		var slide = slideCtrl.getSlide('slide_01');
		var initData = {
			slideData : slide,
			socketId : socket.id,
			secret : ''
		}
		socket.emit('initdata', initData);

		// slideの操作
		socket.on('slidestatechanged', function(data) {
			// if (typeof data.secret == 'undefined' || data.secret == null || data.secret === '') return;
			// if (createHash(data.secret) === data.socketId) {
				data.secret = null;
				slideCtrl.updateState('slide_01', data.slideData.state);
				socket.broadcast.emit('slidestatechanged', data);
			// };
		});
		
		socket.on('slidecontentchanged', function(data) {
			// if (typeof data.secret == 'undefined' || data.secret == null || data.secret === '') return;
			// if (createHash(data.secret) === data.socketId) {
				data.secret = null;
				slideCtrl.updateSlide('slide_01', data.slideData);
				// todo: Verify Update is correct				
				socket.broadcast.emit('slidecontentchanged', data);
			// };
		});
		
		socket.on('syncdata', function(data) {
			// if (typeof data.secret == 'undefined' || data.secret == null || data.secret === '') return;
			// if (createHash(data.secret) === data.socketId) {
				// todo: Verify Update is correct
				if(data.socketId == socket.id){
					data.slideData = slideCtrl.getSlide('slide_01');
				}
				socket.emit('syncdata', data);
			// };
		});
	});

	/**
	 * Router
	 */
	var routes = require('./server/routes.js');
	app.use(config.apiRoute, routes)

	// start the app by listening on <port>
	var env = process.env.NODE_ENV || 'development';
	var port = config.db[env].port || 3000;

	// don't start up server for tests
	if (!module.parent) {
		server.listen(port, function() {
			console.log(`Express server listening on port ${port} in ${app.settings.env} mode`);
		});
	}

	module.exports = app;
})();