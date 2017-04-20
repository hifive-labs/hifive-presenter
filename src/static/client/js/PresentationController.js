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
(function(Reveal) {
	var presentationController = {
		__name: 'com.hifive.PresentationController',

		curReveal: null,

		__construct: function(context) {
			this.curReveal = Reveal;

			var options = {
				history: true,
				dependencies: [{
					src: 'reveal/plugin/markdown/marked.js'
				}, {
					src: 'reveal/plugin/markdown/markdown.js'
				}, {
					src: 'reveal/plugin/notes/notes.js',
					async: true
				}, {
					src: 'reveal/plugin/highlight/highlight.js',
					async: true,
					callback: function() {
						hljs.initHighlightingOnLoad();
					}
				}]
			};
			this.initialize(options);
		},

		/*******************************************************************************************
		 * 初期化
		 */
		__init: function(context) {

		},

		/**
		 * initialize
		 */
		initialize: function(options) {
			this.curReveal.initialize(options);
		},

		// Change a config value at runtime
		configure: function(options) {
			this.curReveal.configure(options);
		},

		sync: function() {
			this.curReveal.sync();
		},

		/**
		 * NAVIGATION
		 */
		slide: function(indexh, indexv, indexf) {
			this.curReveal.slide(indexh, indexv, indexf)
		},

		left: function() {
			this.curReveal.left();
		},

		right: function() {
			this.curReveal.right();
		},

		up: function() {
			this.curReveal.up();
		},

		down: function() {
			this.curReveal.down();
		},

		prev: function() {
			this.curReveal.prev();
		},

		next: function() {
			this.curReveal.next();
		},

		prevFragment: function() {
			this.curReveal.prevFragment();
		},

		nextFragment: function() {
			this.curReveal.nextFragment();
		},

		navigateFragment: function(index, offset) {
			this.curReveal.navigateFragment(index, offset);
		},

		// Randomize the order of slides
		shuffle: function() {
			this.curReveal.shuffle();
		},

		// Shows a help overlay with keyboard shortcuts
		showHelp: function() {
			this.curReveal.showHelp();
		},

		// Toggle presentation states, optionally pass true/false to force on/off
		toggleOverview: function() {
			this.curReveal.toggleOverview();
		},

		togglePause: function() {
			this.curReveal.togglePause();
		},

		toggleAutoSlide: function() {
			this.curReveal.toggleAutoSlide();
		},

		// Returns the present configuration options
		getConfig: function() {
			return this.curReveal.getConfig();
		},

		// Fetch the current scale of the presentation
		getScale: function() {
			return this.curReveal.getScale();
		},

		// Retrieves the previous and current slide elements
		getPreviousSlide: function() {
			return this.curReveal.getPreviousSlide();
		},

		getCurrentSlide: function() {
			return this.curReveal.getCurrentSlide();
		},

		getIndices: function() {
			return this.curReveal.getIndices(); // { h: 0, v: 0 } }
		},

		getProgress: function() {
			return this.curReveal.getProgress(); // 0-1
		},

		getTotalSlides: function() {
			return this.curReveal.getTotalSlides();
		},

		// Returns the speaker notes for the current slide
		getSlideNotes: function() {
			return this.curReveal.getSlideNotes();
		},

		// State checks
		isFirstSlide: function() {
			return this.curReveal.isFirstSlide();
		},

		isLastSlide: function() {
			return this.curReveal.isLastSlide();
		},

		isOverview: function() {
			return this.curReveal.isOverview();
		},

		isPaused: function() {
			return this.curReveal.isPaused();
		},

		isAutoSliding: function() {
			return this.curReveal.isAutoSliding();
		},

		setState: function(state) {
			this.curReveal.setState(state);
		},

		getState: function() {
			return this.curReveal.getState();
		},

		/**
		 * マークダウン形式の文字列からスライド内容表示 スライド追加する
		 *
		 * @params maskdown (文字列、マークダウン形式) options (セパレーターオブジェクト) separator notesSeparator
		 *         verticalSeparator attributes
		 */
		appendSlides: function(maskdown, options) {
			var sections = $(this.rootElement).find('.slides > section');
			this.insertSlidesAfter(maskdown, options, sections.length - 1);
		},

		/**
		 * マークダウン形式の文字列からスライド内容表示
		 *
		 * @params maskdown (文字列、マークダウン形式) options (セパレーターオブジェクト) separator notesSeparator
		 *         verticalSeparator attributes index(指定したインデックス)
		 */
		insertSlidesAfter: function(maskdown, options, index) {
			var convertToHTMLStr = RevealMarkdown.slidify(maskdown, options);
			var slidesNode = $(this.rootElement).find('.slides');
			var sections = slidesNode.find('section');
			if (Number(index) >= 0 && Number(index) < sections.length) {
				$(convertToHTMLStr).insertAfter(sections[index]);
				RevealMarkdown.convertSlides();
				this.curReveal.sync();
				this.curReveal.slide(0, 0, 0);
			} else if (Number(index) < 0 && sections.length === 0) {
				slidesNode.append(convertToHTMLStr);
				RevealMarkdown.convertSlides();
				this.curReveal.sync();
				this.curReveal.slide(0);
			}
		},

		/**
		 * インデックス指定したスライドを削除する。
		 *
		 * @params index(インデックス)
		 */
		removeSlideByIndex: function(index) {
			var sections = $(this.rootElement).find('.slides > section');
			if (Number(index) >= 0 && Number(index) < sections.length) {
				sections[index].remove();
				this.curReveal.sync();
				this.curReveal.slide(0);
			}
		},

		/**
		 * スライドの内容を取得
		 *
		 * @params kind
		 * @return content kind = 0 の場合、平文（文字列)。kind = 1 の場合、構造化オブジェット
		 */
		getContentOfSlides: function(kind) {
			var content;
			if (kind === 0) {
				content = "";
				var slidesCount = Reveal.getTotalSlides();
				for (var i = 0; i < slidesCount; i++) {
					if (Reveal.getSlide(i)) {
						content += Reveal.getSlide(i).outerHTML + "\n";
					} else {
						break;
					}
				}
				return content;
			} else {

			}
		},

		/**
		 * 現在のスライドの内容を取得
		 *
		 * @return content(カレントオブジェットの内容)
		 */
		getContentOfCurrentSlide: function() {
			var curretSlideObj = this.getCurrentSlide();
			return curretSlideObj.outerHTML;
		},

		/**
		 * スライド操作 (番号指定)
		 *
		 * @params slideNo (スライド番号: 1～スライス数)
		 */
		goToSlide: function(slideNo) {
			if (slideNo && Number(slideNo) >= 1) {
				this.slide(slideNo - 1, 0, 0);
			}
		},

	}
	h5.core.expose(presentationController);
})(Reveal);