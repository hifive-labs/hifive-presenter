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

	/**
	 * API Router
	 */
	var express = require('express');
	var router = express.Router();

	// controllers
	// var usersCtrl = require('./user/user.controller.js');
	
	/**
	 * Users
	 */
	// router.post('/users/authenticate', usersCtrl.authenticate); // authenticate user
	// router.post('/users', usersCtrl.createUser); // create new user
	// router.get('/users/', usersCtrl.verifyToken, /*usersCtrl.isAdmin,*/ usersCtrl.getUsers); // get all users (uncomment usersCtrl.isAdmin if the route should work only for admin roles)
	// router.put('/users/change-password', usersCtrl.verifyToken, usersCtrl.changePassword); // change password
	// router.get('/users/:userId', usersCtrl.verifyToken, usersCtrl.getUser); // get user
	// router.put('/users/:userId', usersCtrl.verifyToken, usersCtrl.updateUser); // update user

	/**
	 * Slides
	 */
	
	router.get('/slides', function(req, res, next){
		let result = 'none'; // @ToDo: check ERROR and Authorize
		req.io.emit('slides', req.body);
		res.send(result);
	});
	
	router.post('/slides/left', function(req, res, next){		
		let result = 'none'; // @ToDo: check ERROR and Authorize
		req.io.emit('left', req.body);
		res.send(result);
	});
	
	router.post('/slides/right', function(req, res, next){
		let result = 'none'; // @ToDo: check ERROR and Authorize
		req.io.emit('right', req.body);
		res.send(result);
	});
	
	router.post('/slides/up', function(req, res, next){
		let result = 'none'; // @ToDo: check ERROR and Authorize
		req.io.emit('up', req.body);
		res.send(result);
	});
	
	router.post('/slides/down', function(req, res, next){
		let result = 'none'; // @ToDo: check ERROR and Authorize
		req.io.emit('down', req.body);
		res.send(result);
	});
	
	router.post('/slides/prev', function(req, res, next){
		let result = 'none'; // @ToDo: check ERROR and Authorize
		req.io.emit('prev', req.body);
		res.send(result);
	});
	
	router.post('/slides/next', function(req, res, next){
		let result = 'none'; // @ToDo: check ERROR and Authorize
		req.io.emit('next', req.body);
		res.send(result);
	});
	
	router.post('/slides/prevFragment', function(req, res, next){
		let result = 'none'; // @ToDo: check ERROR and Authorize
		req.io.emit('prevFragment', req.body);
		res.send(result);
	});
	
	router.post('/slides/nextFragment', function(req, res, next){
		let result = 'none'; // @ToDo: check ERROR and Authorize
		req.io.emit('nextFragment', req.body);
		res.send(result);
	});
	
	router.post('/slides/getSlideNotes', function(req, res, next){
		let result = 'none'; // @ToDo: check ERROR and Authorize
		req.io.emit('getSlideNotes', req.body);
		res.send(result);
	});
	
	router.post('/slides/getCurrentSlide', function(req, res, next){
		let result = 'none'; // @ToDo: check ERROR and Authorize
		req.io.emit('getCurrentSlide', req.body);
		res.send(result);
	});
	
	router.post('/slides/getContentOfSlides', function(req, res, next){
		let result = 'none'; // @ToDo: check ERROR and Authorize
		req.io.emit('getContentOfSlides', req.body);
		res.send(result);
	});
	
	router.post('/slides/slidechanged', function(req, res, next){
		let result = 'none'; // @ToDo: check ERROR and Authorize
		req.io.emit('slidechanged', req.body);
		res.send(result);
	});
	
	router.post('/slides/fragmentshown', function(req, res, next){
		let result = 'none'; // @ToDo: check ERROR and Authorize
		req.io.emit('fragmentshown', req.body);
		res.send(result);
	});
	
	router.post('/slides/fragmenthidden', function(req, res, next){
		let result = 'none'; // @ToDo: check ERROR and Authorize
		req.io.emit('fragmenthidden', req.body);
		res.send(result);
	});
	
	module.exports = router;
})();