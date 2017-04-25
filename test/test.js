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
	var expect = require('chai').expect
	const assert = require('assert');
	var io = require('../node_modules/socket.io-client');

	var socketURL = 'http://localhost:3000';

	var ioOptions = {
  transports: ['websocket'],
  'force new connection': true
};
	var sender, receiver;
	describe('SOCKET CONNECT', function(){
		var senderId = '';
		var receiverId = '';
		var messageData = null;
		beforeEach(function(done){			
			// connect two io clients
			sender = io(socketURL + '/slides', ioOptions)
			sender.on('initdata', function(data){
				senderId = data.socketId;
				messageData = data;
				done()
			})
		})
		beforeEach(function(done){			
			receiver = io(socketURL + '/slides', ioOptions)
			receiver.on('initdata', function(data){
				receiverId = data.socketId;
				done()
			})
		})
		afterEach(function(done){			
			// disconnect io clients after each test
			sender.disconnect()
			receiver.disconnect()
			done()
		})
		describe('Message Events', function(){
			it(' - state changed event is emited.', function(done){
				messageData = {
					slideData : {
						state: {indexh: 4, indexv: 0, paused: false, overview: false},					
					},
					secret: null,
					socketId: senderId
				};
				sender.emit('slidestatechanged', messageData)
				receiver.on('slidestatechanged', function(data){
					assert.deepEqual(data, messageData);
					done()
				})
			})
			
			it(' - content changed event is emited.', function(done){				
				var slideContent ='<section>TEST 1</section><section><section>TEST 2.A</section><section>TEST 2.B</section><section>TEST 2.C</section></section>';
				messageData = {
					slideData : {
						content: slideContent,
						state: {indexh: 4, indexv: 0, paused: false, overview: false},					
					},
					secret: null,
					socketId: senderId
				};
				sender.emit('slidecontentchanged', messageData)
				receiver.on('slidecontentchanged', function(data){
					assert.deepEqual(data, messageData);
					done()
				})
			})
			
			it(' - syncdata event is emited.', function(done){				
				sender.emit('syncdata', {
					socketId : senderId,
					secret : ''
				});
				// receiver.on('syncdata', function(data){
					// throw("error");
					// done()
				// })
				sender.on('syncdata', function(data){
					assert.deepEqual(data, messageData);
					done()
				})
			})		
		})
	});
	
	describe('Slide Controller', function(){
		it(' - slidecontentchanged check.', function(done){
			var slideCtrl = require('../src/server/slide/slide.controller.js');
			var slideContent ='<section>TEST 1</section><section><section>TEST 2.A</section><section>TEST 2.B</section><section>TEST 2.C</section></section>';
			var slideData = {
				content: slideContent,
				state: {indexh: 4, indexv: 0, paused: false, overview: false},					
			};
			slideCtrl.updateSlide('slide_1', slideData);
			var slide = slideCtrl.getSlide('slide_1');
			assert.deepEqual(slide, slideData);
			done()
		})
	})
})();