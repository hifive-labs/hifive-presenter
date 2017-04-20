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
	// Create Temp SLIDE
	var slideContent ='<div class="slides">';
	slideContent += '<section>';
	slideContent += 'Slide NUMBER 1';
	slideContent += '</section>';
	slideContent += '<section>';
	slideContent += 'Slide NUMBER 2';
	slideContent += '</section>';	
	slideContent += '<section>';
	slideContent += 'Slide NUMBER 4';
	slideContent += '</section>';	
	slideContent += '<section>';
	slideContent += 'Slide NUMBER 5';
	slideContent += '</section>';	
	slideContent += '</div>';
	var slideInfo = {
		slideId : 'slide_1',
		content: slideContent,
		state: {indexh: 1, indexv: 0, paused: false, overview: false},
	};
	
	function getSlide(slideId) {
		//Todo: Get Slide from database
		return slideInfo;
	}
	
	function updateSlide(id, data) {		
		slideInfo = data;		
		//Todo: Update Slide to database			
	}
	
	function deleteSlide(slideId) {		
		// slideInfo.content = slide.content;
		// slideInfo.state = slide.state;
		
		//Todo: Delete Slide to database	
		
	}
		
	// public
	module.exports = {
		getSlide,
		updateSlide,
	};
})();