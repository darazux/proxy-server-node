# API Proxy
## 概要
Web API サービスの api_key/api_secret を隠すために使用するプロキシサーバーです。
NodeJS の express と http-proxy-middleware パッケージを使用したアプリです。

以下の書籍を参考に作成しました。
[「プロキシサーバーのつくりかた」](https://monotein.com/books/proxy-server-book)

## 構成図

## 動作イメージ
1. プロクシサーバーがクライアント(Webアプリなど)からHTTPリクエストを受信する
1. プロクシサーバーがAPIサーバーへHTTPリクエストを転送する
1. プロクシサーバーがAPIサーバーからHTTPレスポンスを受信する
1. プロクシサーバーがクライアントへHTTPレスポンスを転送する
