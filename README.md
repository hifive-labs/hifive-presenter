Hifive Presentation Assistant
===============
Hifive、Reveal.js、Socket.ioを使ってプレゼンテーションアシスタントを作成します.

## インストール
git clone http://tritoma.o.sysrdc.ns-sol.co.jp/gitbucket/git/hifive/hifive-presenter.git  
cd hifive-presenter  
npm install  

## サーバー起動
cd src  
node app.js  

## 動作確認
複数タブを開いて、http://localhost:3000 へアクセスする  

## 部品機能一覧
スライドのナビゲーション（左、右、上、下)  
スライドの追加・削除  
スライドの平文(HTML内容)取得  
各ユーザーの間、スライドのデータや状態を非同期・同期化  

## 部品のフォルダ構成
 - __LICENSE__
 - __README.md__
 - __package.json__
 - __src/__
  - __server/__　　*サーバー*_ 
   - __slide/__　　*DBにスライド挿入・更新・削除・API*
    - __slide.controller.js__
   - __config.js__
   - __routes.js__
  - __static/__　　*クライアント*
   - __client/__　　*WebContent* 
    - __css/__　　　*カスタムCSS* 
    - __js/__
     - __PageController.js__　　*メインページのコントローラ*
     - __PresentationController.js__　　*revealjsをラップしたコントローラ*  
    - __mdfile/__　　*マークダウンファイル*
     - __example.md__
    - __index.html__　　*メインページ*
   - __vendor/__　　*hifive、jquery、revealライブラリ*
    - __h5/__
    - __jquery/__
    - __reveal/__
  - __app.js__
