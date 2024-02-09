# API Proxy
## 概要
Web API サービスの api_key/api_secret を隠すために使用するプロキシサーバーです。  
NodeJS の express と http-proxy-middleware パッケージを使用したアプリです。

以下の書籍を参考に作成しました。
[「プロキシサーバーのつくりかた」](https://monotein.com/books/proxy-server-book)

## 構成図
```mermaid
   flowchart TB
   style p1 fill:#f9f,color:#000,stroke-dasharray: 5 5
   style p2 fill:#f9f,color:#000,stroke-dasharray: 5 5
   style c1 stroke-dasharray: 5 5
   style c2 stroke-dasharray: 5 5
   style s1 stroke-dasharray: 5 5
   style s2 stroke-dasharray: 5 5
   style Proxy fill:#00f

   c1-->p1-->s1
   s2-->p2-->c2
   subgraph Client
       c1[Send HTTP Request]
       c2[Receive HTTP Reponse]
   end
   subgraph Proxy
       p1[Forward HTTP Request]
       p2[Foward HTTP Reponse]
   end
   subgraph API-Server
       s1[Receive HTTP Request]-->s2[Send HTTP Response]
   end
```
## 動作イメージ
1. プロキシサーバーはクライアント(Webアプリなど)からHTTPリクエストを受信する
1. プロキシサーバーはAPIサーバーへHTTPリクエストを転送する
1. プロキシサーバーはAPIサーバーからHTTPレスポンスを受信する
1. プロキシサーバーはクライアントへHTTPレスポンスを転送する

## その他
今回のAPIサーバーはPOSTリクエストのみしか使用していないため、
POST以外のリクエスト(GET,DELETEなど)は素通しする。
