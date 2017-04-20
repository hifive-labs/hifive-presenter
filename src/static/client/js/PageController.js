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
 */
$(function() {
	// コントローラ化
	var PresentationController = com.hifive.PresentationController;
	let
	presentationController = h5.core.controller('.reveal', PresentationController);

	var HOST_PORT = "http://localhost:3000/slides";

	var socket = io(HOST_PORT);

	var pageController = {
		__name: 'com.hifive.PageController',

		__ready: function() {},

		__init: function() {
			socket.on('initdata', function(data) {
				presentationController.insertSlidesByHTMLString(data.slideData.content);
				presentationController.setState(data.slideData.state);
			});

			socket.on('slidestatechanged', function(data) {
				var isSync = $("#chkSync").is(":checked");
				if (isSync) {
					presentationController.setState(data.slideData.state);
				}
			});

			socket.on('slidecontentchanged', function(data) {
				var isSync = $("#chkSync").is(":checked");
				if (isSync) {
					presentationController.insertSlidesByHTMLString(data.slideData.content);
				}
			});

			presentationController.rootElement.addEventListener('slidechanged', this._postInfo);
			presentationController.rootElement.addEventListener('fragmentshown', this._postInfo);
			presentationController.rootElement.addEventListener('fragmenthidden', this._postInfo);
			presentationController.rootElement.addEventListener('overviewhidden', this._postInfo);
			presentationController.rootElement.addEventListener('overviewshown', this._postInfo);
			presentationController.rootElement.addEventListener('paused', this._postInfo);
			presentationController.rootElement.addEventListener('resumed', this._postInfo);
		},

		_postInfo: function() {
			var messageData = {
				slideData : {
					state: presentationController.getState(),					
				},
				secret: null,
				socketId: null
			};
			var isSync = $("#chkSync").is(":checked");
			if (isSync) {
				socket.emit('slidestatechanged', messageData);
			}
		},

		//テスト用 - Start
		"#btnGet click": function() {
			alert(presentationController.getContentOfSlides(0));
		},

		"#btnGetCur click": function() {
			alert(presentationController.getContentOfCurrentSlide());
		},

		"#btnAdd click": function() {
			var maskdown = "## xExternal1\n\nContent1\n\n## xExternal2\n\nxContent2\n\nxNote: This will only appear.\n\n## xExternalNote1.1\n\n---\n\n# xExternal2\n## xSubhead 2\n\n---\n\n## xExternal3\n[xContent 3](http://google.com)";
			var maskdown2 = "## Append1\n\n1\n\n## abcxyz\n\n---\n\n# Append2\n\n## Content 2\n\n---\n\n## Append3\n\n[Content 3](http://google.com)";
			var options = {
				attributes: "",
				notesSeparator: null,
				separator: "---"
			};
			presentationController.insertSlidesAfter(maskdown, options, 1)
			presentationController.appendSlides(maskdown2, options);

			var messageData = {
				"slideData": {
					"content": presentationController.getContentOfSlides(0),
					"state": 0
				}
			};
			socket.emit('slidecontentchanged', messageData);
		},

		"#btnRemove click": function() {
			presentationController.removeSlideByIndex(0);
			var messageData = {
				"slideData": {
					"content": presentationController.getContentOfSlides(0),
					"state": 0
				}
			};
			socket.emit('slidecontentchanged', messageData);
		},

		"#btnGoTo click": function() {
			var num = $("#txtPageNum").val();
			presentationController.goToSlide(num);
		},
	//テスト用 - End
	}

	h5.core.controller('body', pageController);
});