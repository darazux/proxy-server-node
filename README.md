# API Proxy
## 概要
Web API サービスの api_key/api_secret を隠すために使用するプロキシサーバーです。
NodeJS の express と http-proxy-middleware パッケージを使用したアプリです。

以下の書籍を参考に作成しました。
[「プロキシサーバーのつくりかた」](https://monotein.com/books/proxy-server-book)

## 構成図
   flowchart TB
   style p1 fill:#f9f,stroke-dasharray: 5 5
   style p2 fill:#f9f,stroke-dasharray: 5 5
   style c1 stroke-dasharray: 5 5
   style c2 stroke-dasharray: 5 5
   style s1 stroke-dasharray: 5 5
   style s2 stroke-dasharray: 5 5
   style Proxy fill:#0ff
   
   c1[Send HTTP Request]-->p1[Forward HTTP Request]
   p1-->s1[Receive HTTP Request]
   s1-->s2
   s2[Send HTTP Response]-->p2[Foward HTTP Reponse]
   p2-->c2[Receive HTTP Reponse]
   subgraph Client
       c1
       c2
   end
   subgraph Proxy
       p1
       p2
   end
   subgraph API Server
       s1
       s2
   end

## 動作イメージ
1. プロクシサーバーはクライアント(Webアプリなど)からHTTPリクエストを受信する
1. プロクシサーバーはAPIサーバーへHTTPリクエストを転送する
1. プロクシサーバーはAPIサーバーからHTTPレスポンスを受信する
1. プロクシサーバーはクライアントへHTTPレスポンスを転送する

## その他
今回のAPIサーバーはPOSTリクエストのみしか使用していないため、
POST以外のリクエスト(GET,DELETEなど)は素通しする。
