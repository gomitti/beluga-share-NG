# beluga-share-NG
共有NG機能の試作

## 作りたい機能

 - 誰かを共有NGリストに登録する
 - 共有NGリストをミュートする作業を代行する
 - 共有リストからの登録を解除する
 - 荒らし目的の登録を無力化する

## 作りたくない機能

 - 「誰が誰を登録したか」の表示

## muteのあれこれ

 - 必要な情報、パラメータ

### 登録

#### method/endpoint

 - POST /api/v1/mute/user/create

#### param

 - user_id_to_mute
 - requested_by

### 解除

#### method/endpoint

 - POST /api/v1/mute/user/destory

#### param

 - user_id_to_unmute
 - requested_by
