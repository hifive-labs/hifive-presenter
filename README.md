hifive Presentation Tool
===============
hifive、reveal.js、socket.ioを使った簡易プレゼンテーションツールです。

## クライアント動作環境
* Google Chrome (バージョン： 57.0.2987.133(64-bit))  
* Internet Explorer 11 (バージョン： 11.0.9600.18638)  
* iOS (バージョン: 10.)

## サーバ動作環境
* Node.js v7.9.0

## インストール
```
git clone http://tritoma.o.sysrdc.ns-sol.co.jp/gitbucket/git/hifive/hifive-presenter.git  
cd hifive-presenter  
npm install  
```

## 動作手順  

* サーバーを起動する  

```
cd src  
node app.js  
```

* `http://localhost:3000` へアクセスする

## 部品機能一覧

### PresentationController  

* スライドのナビゲーション（左、右、上、下、前のスライド、次のスライド、スライド番号で移動)  
* マークダウン形式の文字列からスライドの追加  
* インデックスからスライドの削除  
* スライドの平文(HTML内容)取得(全てのスライド、現在のスライド)  
* HTML文字列からスライドの作成

### PageController

* 各ユーザ間でスライドのデータや状態をサーバを介して同期化（WebSocketを使用）  

※ 同期機能が必要なければPresentationController.jsを単独で読み込んで使用できます。  

## 部品のフォルダ構成

```
hifive-presenter  
　　　├── LICENSE.txt
　　　├── package.json  
　　　├── README.md  
　　　├── src  
　　　│　　　├── app.js  
　　　│　　　├── server　　　　　　　　　　　サーバー  
　　　│　　　│　　　├── config.js　　　　　　DB設定・開発・テストパスとポートの定義  
　　　│　　　│　　　├── routes.js　　　　　　API Router  
　　　│　　　│　　　└── slide　　　　　　　　DBにスライド挿入・更新・削除・API  
　　　│　　　│　　　　　　 └── slide.controller.js  
　　　│　　　└── static　　　　　　　　　　　クライアント  
　　　│　　　　　　 ├── client　　　　　　　　WebContent  
　　　│　　　　　　 │　　　├── index.html  　　メインページ  
　　　│　　　　　　 │　　　├── css　　　　　カスタムCSS  
　　　│　　　　　　 │　　　├── js  
　　　│　　　　　　 │　　　│　　├── PageController.js　　　　　　　メインページのコントローラ  
　　　│　　　　　　 │　　　│　　└── PresentationController.js　　　revealjsをラップしたコントローラ  
　　　│　　　　　　 │　　　└── mdfile　　　　　マークダウンファイル  
　　　│　　　　　　 │　　　　　 └── example.md  
　　　│　　　　　　 └── res　　　　　　　　hifive、jquery、revealライブラリ  
　　　│　　　　　　 　　　└── lib　　　　　
　　　│　　　　　　　　　　　　 ├── hifive  
　　　│　　　　　　　　　　　　 ├── jquery  
　　　│　　　　　　　　　　　　 └── reveal  
　　　└── test  
　　　　　　 └── test.js
```