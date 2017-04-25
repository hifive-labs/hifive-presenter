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
			//オプション
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

		// =========================================================================
		//
		// 初期化、
		// 設定・状態を設定
		//
		// =========================================================================

		/**
		 * スライドを初期化する。
		 *
		 * @param {Object} options 設定値
		 */
		initialize: function(options) {
			this.curReveal.initialize(options);
		},

		/**
		 * ランタイム際、設定値を更新する。
		 *
		 * @param {Object} options 設定値
		 */
		configure: function(options) {
			this.curReveal.configure(options);
		},

		/**
		 * スライドを同期する。
		 */
		sync: function() {
			this.curReveal.sync();
		},

		/**
		 * スライド状態を設定する。
		 *
		 * @param {Object} state スライド状態
		 */
		setState: function(state) {
			this.curReveal.setState(state);
		},

		// =========================================================================
		//
		// ナビゲーション
		//
		// =========================================================================

		/**
		 * 指定したインデックススライドを移動する
		 *
		 * @param {Number} indexh 水平インデックス
		 * @param {Number} indexv 垂直インデックス
		 * @param {Number} indexf フラグメントインデックス
		 */
		slide: function(indexh, indexv, indexf) {
			this.curReveal.slide(indexh, indexv, indexf)
		},

		/**
		 * 左のスライドへ移動する。
		 */
		left: function() {
			this.curReveal.left();
		},

		/**
		 * 右のスライドへ移動する。
		 */
		right: function() {
			this.curReveal.right();
		},

		/**
		 * 上のスライドへ移動する。
		 */
		up: function() {
			this.curReveal.up();
		},

		/**
		 * 下のスライドへ移動する。
		 */
		down: function() {
			this.curReveal.down();
		},

		/**
		 * 前のスライドへ移動する。
		 */
		prev: function() {
			this.curReveal.prev();
		},

		/**
		 * 次のスライドへ移動する。
		 */
		next: function() {
			this.curReveal.next();
		},

		/**
		 * 前のフラグメントへ移動する。
		 */
		prevFragment: function() {
			this.curReveal.prevFragment();
		},

		/**
		 * 次のフラグメントへ移動する。
		 */
		nextFragment: function() {
			this.curReveal.nextFragment();
		},

		/**
		 * 指定したフラグメントへ移動する。
		 *
		 * @param {Number} index フラグメントインデックス
		 * @param {Number} offset フラグメントインデックスのオフセット
		 */
		navigateFragment: function(index, offset) {
			this.curReveal.navigateFragment(index, offset);
		},

		/**
		 * スライドの順番をランダム化する。
		 */
		shuffle: function() {
			this.curReveal.shuffle();
		},

		/**
		 * キーボードショットカットでhelpを表示する
		 */
		showHelp: function() {
			this.curReveal.showHelp();
		},

		/**
		 * 概要状態を切り替える
		 */
		toggleOverview: function() {
			this.curReveal.toggleOverview();
		},

		/**
		 * ポーズ状態を切り替える
		 */
		togglePause: function() {
			this.curReveal.togglePause();
		},

		/**
		 * 自動スライド状態を切り替える
		 */
		toggleAutoSlide: function() {
			this.curReveal.toggleAutoSlide();
		},

		// =========================================================================
		//
		// 設定値・インデックス・値を取得する
		//
		// =========================================================================

		/**
		 * スライドの設定値を取得する。
		 *
		 * @returns スライドの設定値
		 */
		getConfig: function() {
			return this.curReveal.getConfig();
		},

		/**
		 * スライドのスケールを取得する。
		 *
		 * @returns スライドのスケール
		 */
		getScale: function() {
			return this.curReveal.getScale();
		},

		/**
		 * 前のスライドを取得する。 Retrieves the previous slide elements
		 *
		 * @returns 前のスライドオブジェット
		 */
		getPreviousSlide: function() {
			return this.curReveal.getPreviousSlide();
		},

		/**
		 * 現在のスライドを取得する。 Retrieves the current slide elements
		 *
		 * @returns 現在のスライドオブジェット
		 */
		getCurrentSlide: function() {
			return this.curReveal.getCurrentSlide();
		},

		/**
		 * スライドのインデックスを取得する。
		 *
		 * @returns スライドのインデックス
		 */
		getIndices: function() {
			return this.curReveal.getIndices(); // { h: 0, v: 0 }
		},

		/**
		 * スライドの進捗状況を取得する
		 *
		 * @returns スライドの進捗状況（値：0-1）
		 */
		getProgress: function() {
			return this.curReveal.getProgress();
		},

		/**
		 * 全てのスライド数を取得する。
		 *
		 * @returns {Number} スライド数
		 */
		getTotalSlides: function() {
			return this.curReveal.getTotalSlides();
		},

		/**
		 * カレントのスライドのメモを取得する。
		 *
		 * @returns カレントのスライドのメモ
		 */
		getSlideNotes: function() {
			return this.curReveal.getSlideNotes();
		},

		/**
		 * スライド状態を取得する。
		 *
		 * @returns {Object} スライド状態のオブジェット
		 */
		getState: function() {
			return this.curReveal.getState();
		},

		// =========================================================================
		//
		// 状態チェック
		//
		// =========================================================================

		/**
		 * 最初のスライドかどうかをチェックする。
		 *
		 * @returns {boolean} 最初のスライドかどうか
		 */
		isFirstSlide: function() {
			return this.curReveal.isFirstSlide();
		},

		/**
		 * 最後のスライドかどうかをチェックする。
		 *
		 * @returns {boolean} 最後のスライドかどうか
		 */
		isLastSlide: function() {
			return this.curReveal.isLastSlide();
		},

		/**
		 * 概要かどうかをチェックする。
		 *
		 * @returns {boolean} 概要かどうか
		 */
		isOverview: function() {
			return this.curReveal.isOverview();
		},

		/**
		 * ポーズかどうかをチェックする。
		 *
		 * @returns {boolean} ポーズかどうか
		 */
		isPaused: function() {
			return this.curReveal.isPaused();
		},

		/**
		 * 自動スライディングかどうかをチェックする。
		 *
		 * @returns {boolean} 自動スライディングかどうか
		 */
		isAutoSliding: function() {
			return this.curReveal.isAutoSliding();
		},

		// =========================================================================
		//
		// EXPANSION FROM REVEAL.JS
		//
		// =========================================================================

		/**
		 * マークダウン形式の文字列からスライド内容表示 スライド追加する
		 *
		 * @param {String} maskdown (文字列、マークダウン形式)
		 * @param {Object} options {separator, notesSeparator, verticalSeparator, attributes}
		 */
		appendSlides: function(maskdown, options) {
			var sections = $(this.rootElement).find('.slides > section');
			this.insertSlidesAfter(maskdown, options, sections.length - 1);
		},

		/**
		 * マークダウン形式の文字列からスライド内容表示
		 *
		 * @param {String} maskdown (文字列、マークダウン形式)
		 * @param {Object} options {separator, notesSeparator, verticalSeparator, attributes}
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
		 * HTML文字列からスライドを作成する。
		 *
		 * @param {String} htmlString HTML文字列
		 */
		createSlidesByHTMLString: function(htmlString) {
			var slidesNode = $(this.rootElement).find('.slides');
			slidesNode.empty();
			slidesNode.append(htmlString);
			RevealMarkdown.convertSlides();
			this.curReveal.sync();
			this.curReveal.slide(0);
		},

		/**
		 * インデックス指定したスライドを削除する。
		 *
		 * @param {Number} index インデックス
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
		 * @param {Number} kind 内容タイプ区分
		 * @returns {String} content kindが0の場合、平文（文字列)。kindが1の場合、構造化オブジェット
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
				//TODO : kindが0以外の場合
			}
		},

		/**
		 * 現在のスライドの内容を取得
		 *
		 * @returns {String} カレントオブジェットの内容
		 */
		getContentOfCurrentSlide: function() {
			var curretSlideObj = this.getCurrentSlide();
			return curretSlideObj.outerHTML;
		},

		/**
		 * スライド操作 (番号指定)
		 *
		 * @param {Number} slideNo (スライド番号: 1～スライス数)
		 */
		goToSlide: function(slideNo) {
			if (slideNo && Number(slideNo) >= 1) {
				this.slide(slideNo - 1, 0, 0);
			}
		},
	}
	h5.core.expose(presentationController);
})(Reveal);