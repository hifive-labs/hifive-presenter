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
	
	/**
	 * Slide socket
	 */	
	module.exports = function(io){		
		var slides = io.of('/slides');
		slides.on('connection', function(socket) {
			console.log('io connected to slides');

			socket.on('disconnect', function(socket) {
				 console.log('io disconnected out slides');
			});
			
			// slideの操作		
			socket.on('slide', function(data) {
				socket.broadcast.emit('slide');
			});
			socket.on('left', function(data) {
				socket.broadcast.emit('left');
			});
			socket.on('right', function(data) {
				slides.broadcast.emit('right');
			});
			socket.on('up', function(data) {
				slides.broadcast.emit('up');
			});
			socket.on('down', function(data) {
				slides.broadcast.emit('down');
			});
			socket.on('prev', function(data) {
				slides.broadcast.emit('prev');
			});
			socket.on('next', function(data) {
				slides.broadcast.emit('next');
			});
			socket.on('prevFragment', function(data) {
				slides.broadcast.emit('prevFragment');
			});
			socket.on('nextFragment', function(data) {
				slides.broadcast.emit('nextFragment');
			});
			socket.on('getSlideNotes', function(data) {
				slides.broadcast.emit('getSlideNotes');
			});
			socket.on('getCurrentSlide', function(data) {
				slides.broadcast.emit('getCurrentSlide');
			});
			socket.on('getContentOfSlides', function(data) {
				slides.broadcast.emit('getContentOfSlides');
			});
		});
		
	};
})();