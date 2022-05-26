<h2>Token из responce спарсить в переменную в окружении</h2>

1. Создать новое окружение "Test Environment"<br>
в столбец "VARIABLE" добавить значение "token" <br>
2 В коллекции Course создать "New Request" и переименовать его в "login"<br>
Выбрать метод Post, в поле "Enter request URL" вписать [http://162.55.220.72:5005/login<br>
Выбрать вкладку "Body" в нем "from-data"<br>
* в столбец "KEY" добавить строки с именами "login" и "password"<br>
* в столбец "VALUE" добавить значения "Natali" и "1234567" <br>
3.Во вкладке "Tests" прописать <br>
```js
let jsonData = pm.response.json();
let user_token = jsonData.token
pm.environment.set("token", user_token);
```
Save - Send

***В результате значение "token" пропишется в "Test Environment" в "CURRENT VALUE"***