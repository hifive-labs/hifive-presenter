hifive Presentation Assistant
===============
hifive、reveal.js、socket.ioを使ってプレゼンテーションアシスタントを作成します.

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
**hifive-presenter**  
　　　├── **LICENSE**  
　　　├── **package.json**  
　　　├── **README.md**  
　　　├── **src**  
　　　│　　　├── **app.js**  
　　　│　　　├── **server**　　　　　　　　　　　*サーバー*  
　　　│　　　│　　　├── **config.js**　　　　　　*DB設定・開発・テストパスとポートの定義*  
　　　│　　　│　　　├── **routes.js**　　　　　　*API Router*  
　　　│　　　│　　　└── **slide**　　　　　　　　*DBにスライド挿入・更新・削除・API*  
　　　│　　　│　　　　　　 └── **slide.controller.js**  
　　　│　　　└── **static**　　　　　　　　　　　*クライアント*  
　　　│　　　　　　 ├── **client**　　　　　　　　*WebContent*  
　　　│　　　　　　 │　　　├── **index.html**  　　*メインページ*  
　　　│　　　　　　 │　　　├── **css**　　　　　*カスタムCSS*  
　　　│　　　　　　 │　　　├── **js**  
　　　│　　　　　　 │　　　│　　├── **PageController.js**　　　　　　　*メインページのコントローラ*  
　　　│　　　　　　 │　　　│　　└── **PresentationController.js**　　　*revealjsをラップしたコントローラ*  
　　　│　　　　　　 │　　　└── **mdfile**　　　　　*マークダウンファイル*  
　　　│　　　　　　 │　　　　　 └── **example.md**  
　　　│　　　　　　 └──**vendor**　　　　　　　　*hifive、jquery、revealライブラリ*  
　　　│　　　　　　　　　  ├── **h5**  
　　　│　　　　　　　　　  ├── **jquery**  
　　　│　　　　　　　　　  └── **reveal**  
　　　└── **test**  
　　　　　　 └── **test.js**
