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
	'use strict'
	// Create Temp SLIDE
	var slideContent ='<section>Slide 1</section><section><section>Slide 2.A</section><section>Slide 2.B</section><section>Slide 2.C</section></section>' +
  			'<section>Slide 3</section><section><section>Slide 4.1</section><section>Slide 4.2</section></section>' +
  			'<section><section id="fragments"><h2>Fragments</h2><p>Hit the next arrow...</p><p class="fragment">... to step through ...</p>' +
  			'<p><span class="fragment">... a</span> <span class="fragment">fragmented</span> <span class="fragment">slide.</span></p>' +
  			'<aside class="notes">This slide has fragments which are also stepped through in the notes window.</aside></section>' +
  			'<section><h2>Fragment Styles</h2><p>Theres different types of fragments, like:</p><p class="fragment grow">grow</p>' +
  			'<p class="fragment shrink">shrink</p><p class="fragment fade-out">fade-out</p><p class="fragment current-visible">current-visible</p>' +
  			'<p>Highlight<span class="fragment highlight-red">red</span><span class="fragment highlight-blue">blue</span><span class="fragment highlight-green">green</span></p></section></section>';
	var slideData = {
		slideId : 'slide_1',
		content: slideContent,
		state: {indexh: 0, indexv: 0, paused: false, overview: false},
	};
	function getSlide(slideId) {
		//Todo: Get Slide from database
		return slideData;
	}
	
	function updateContent(id, content) {
		slideData.content = content;
		//Todo: Update Slide to database			
	}
	
	function getContent(id) {
		return slideData.content;
		//Todo: Update Slide to database			
	}
	
	function updateState(id, state) {
		slideData.state = state;
		//Todo: Update Slide to database			
	}
	
	function getState(id, state) {
		return slideData.state;
		//Todo: Update Slide to database			
	}
	
	function updateSlide(id, data) {
		slideData = data;
		//Todo: Update Slide to database			
	}
	
	function deleteSlide(slideId) {		
		// slideData.content = slide.content;
		// slideData.state = slide.state;
		
		//Todo: Delete Slide to database	
		
	}
		
	// public
	module.exports = {
		getSlide,
		updateSlide,
		updateState,
	};
})();