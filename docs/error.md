# エラーコード対照表

|       種類       | コード |         メッセージ         | 継続 | http 状態 |
| :--------------: | :----: | :------------------------: | :--: | :-------: |
|       異常       |  9999  |      プログラムエラー      |  ❌   |    500    |
|       正常       | 10000  |       プログラム正常       |  ✔   |    200    |
|     ログイン     | 10001  |    ログイン成功しました    |  ✔   |    200    |
|     ログイン     | 10002  |    id は存在しないです     |  ✔   |    200    |
|     ログイン     | 10003  |  パスワードが間違いました  |  ✔   |    200    |
|     ログイン     | 10004  |    ログイン失敗しました    |  ✔   |    200    |
|    ログアウト    | 10005  |   ログアウト失敗しました   |  ✔   |    200    |
|  管理者情報取得  | 10006  | 管理者情報取得失敗しました |  ✔   |    200    |
|  パスワード修正  | 10007  | パスワード修正失敗しました |  ✔   |    200    |
|    ログアウト    | 10008  |   ログアウト成功しました   |  ✔   |    200    |
|     JWT 401      | 10009  |        JWT 認証失敗        |  ❌   |    401    |
|     JWT 検証     | 10010  |     JWT権限足りません      |  ❌   |    400    |
|       CRUD       | 10011  |          取得成功          |  ✔   |    200    |
|       CRUD       | 10012  |          取得失敗          |  ❌   |    403    |
|       CRUD       | 10013  |          追加成功          |  ✔   |    200    |
|       CRUD       | 10014  |          追加失敗          |  ❌   |    403    |
|       CRUD       | 10015  |          更新成功          |  ✔   |    200    |
|       CRUD       | 10016  |          更新失敗          |  ❌   |    403    |
|       CRUD       | 10017  |          削除成功          |  ✔   |    200    |
|       CRUD       | 10018  |          削除失敗          |  ❌   |    403    |
| パラメータエラー | 10019  |      無効なパラメータ      |  ❌   |    402    |
|       404        | 10020  |   データは見つかりません   |  ❌   |    404    |
|  GraphQL エラー  | 10021  |    GraphQL 読み取り失敗    |  ❌   |    404    |
|    条件エラー    | 10022  |          無効なID          |  ❌   |    400    |
