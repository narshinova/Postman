# Postman

<h1 align="center">Работа в Postman</h1>

**[HW_1](https://github.com/narshinova/Postman/blob/main/README.md#%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D1%8B-%D0%B2-postman)**

[EP_1 /get_method](https://github.com/narshinova/Postman/blob/main/README.md#ep_1)<br>
[EP_2 /user_info_3](https://github.com/narshinova/Postman/blob/main/README.md#ep_2)<br>
[EP_3 /object_info_1](https://github.com/narshinova/Postman/blob/main/README.md#ep_3)<br>
[EP_4 /object_info_2](https://github.com/narshinova/Postman/blob/main/README.md#ep_4)<br>
[EP_5 /object_info_3](https://github.com/narshinova/Postman/blob/main/README.md#ep_5)<br>
[EP_6 /object_info_4](https://github.com/narshinova/Postman/blob/main/README.md#ep_6)<br>
[EP_7 /user_info_2](https://github.com/narshinova/Postman/blob/main/README.md#ep_7)<hr>

</i><h3>Автотесты:<h3></i>
    
[Поверка типа значения](https://github.com/narshinova/Postman/edit/main/README.md#%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0-%D1%82%D0%B8%D0%BF%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F)<br>
[Проверка значения ответа по переменной](https://github.com/narshinova/Postman/edit/main/README.md#%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D0%B0-%D0%BF%D0%BE-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9)<br>
[Work_1](https://github.com/narshinova/Postman/blob/main/README.md#work_1)<hr>
    
<h4>Создать запросы в Postman.</h4>

***Create new collection - New request***

    Protocol: http
    IP: 162.55.220.72
    Port: 5005

в поле "Enter request URL" вписать http://162.55.220.72:5005/ и нажать Save

<h2>EP_1</h2><br>

Method: GET<br>
EndPoint: /get_method<br>
request url params:<br>
name: str<br>
age: int<br>

<i>В коллекции Course создать "New Request" и переименовать его в "EP1"
1. Выбрать метод GET, в поле "Enter request URL" дописать "/get_method", чтоб получилось http://162.55.220.72:5005/get_method
2. выбрать "Params"<br>
2.1. в столбец "KEY" добавить две строки с именами "name" и "age"<br>
2.2. в столбец "VALUE" добавить значения "Nata" и "30" напротив ключей "name" и "age" соответственно<br>
3. нажать Save и Send

response:</i>
ответ

    [
        "Nata",
        "30"
    ]
в поле "Enter request URL" будет отображаться URL http://162.55.220.72:5005/get_method?name=Nata&age=34
<hr>
<h2>EP_2</h2><br>
Method: POST<br>
EndPoint: /user_info_3<br>
request form data:<br.
name: str<br>
age: int<br>
salary: int<br>


<i>В коллекции Course создать "New Request" и переименовать его в "EP2"<br>
1. Выбрать метод Post, в поле "Enter request URL" вписать http://162.55.220.72:5005/user_info_3<br>
2. выбрать "Body" в нем "from-data"<br>
2.1. в столбец "KEY" добавить три строки с именами "name", "age" и "salary"<br>
2.2. в столбец "VALUE" добавить значения "Nata", "34" и "50000" напротив ключей "name", "age" и "salary" соответственно<br>
3. нажать Save и Send<br>

response:</i><br>
ответ
```json
{   
    "age": "34",
    "family": {"children": [["Alex", 24], ["Kate", 12]],
               "u_salary_1_5_year": 200000},
    "name": "Nata",
    "salary": 50000
}
```

в поле "Enter request URL" URL не изменяется
<hr>
<h2>EP_3</h2>
Method: GET<br>
EndPoint: /object_info_1 <br>
request url params:<br>
name: str <br>
age: int <br>
weight: int<br>


<i>В коллекции Course создать "New Request" и переименовать его в "EP3"
1. Выбрать метод Get, в поле "Enter request URL" вписать http://162.55.220.72:5005/object_info_1<br>
2. выбрать "Params"<br>
2.1. в столбец "KEY" добавить три строки с именами "name", "age" и "weight"<br>
2.2. в столбец "VALUE" добавить значения "Nata", "34" и "70" напротив ключей "name", "age" и "weight" соответственно<br>
3. нажать Save и Send<br>

response:</i><br>
ответ
```json
{
    "age": 34,
    "daily_food": 0.84,
    "daily_sleep": 175.0,
    "name": "Nata"
}
```
в поле "Enter request URL" будет отображаться URL http://162.55.220.72:5005/object_info_1?name=Nata&age=34&weight=70
<hr>
<h2>EP_4</h2>
Method: GET<br>
EndPoint: /object_info_2<br>
request url params:<br>
name: str<br>
age: int<br>
salary: int<br>


<i>В коллекции Course создать "New Request" и переименовать его в "EP4"<br>
1. Выбрать метод Get, в поле "Enter request URL" вписать http://162.55.220.72:5005/object_info_2<br>
2. выбрать "Params"<br>
2.1. в столбец "KEY" добавить три строки с именами "name", "age" и "salary"<br>
2.2. в столбец "VALUE" добавить значения "Nata", "34" и "50000" напротив ключей "name", "age" и "salary" соответственно<br>
3. нажать Save и Send<br>

response: </i><br>
ответ
```json
{   
    "person": {"u_age": 34,
               "u_name": ["Nata", 50000, 34],
               "u_salary_5_years": 210000.0},
    "qa_salary_after_1.5_year": 165000.0,
    "qa_salary_after_12_months": 135000.0,
    "qa_salary_after_3.5_years": 190000.0,
    "qa_salary_after_6_months": 100000,
    "start_qa_salary": 50000
}
```
в поле "Enter request URL" будет отображаться URL http://162.55.220.72:5005/object_info_2?name=Nata&age=34&salary=50000
<hr>
<h2>EP_5</h2>
Method: GET<br>
EndPoint: /object_info_3<br>
request url params:<br>
name: str<br>
age: int<br>
salary: int<br>


<i>В коллекции Course создать "New Request" и переименовать его в "EP5"<br>
1. Выбрать метод Get, в поле "Enter request URL" вписать http://162.55.220.72:5005/object_info_3<br>
2. выбрать "Params"<br>
2.1. в столбец "KEY" добавить три строки с именами "name", "age" и "salary"<br>
2.2. в столбец "VALUE" добавить значения "Nata", "34" и "50000" напротив ключей "name", "age" и "salary" соответственно<br>
3. нажать Save и Send<br>

response:</i><br>
ответ

```json
{
    "age": "34",
    "family": {"children": [["Alex", 24], ["Kate", 12]],
               "pets": {"cat": {"age": 3, "name": "Sunny"},
                        "dog": {"age": 4, "name": "Luky"}},
               "u_salary_1_5_year": 200000},
    "name": "Nata",
    "salary": 50000
}
```
в поле "Enter request URL" будет отображаться URL http://162.55.220.72:5005/object_info_3?name=Nata&age=34&salary=50000
<hr>
<h2>EP_6</h2>
Method: GET<br>
EndPoint: /object_info_4<br>
request url params:<br>
name: str<br>
age: int<br>
salary: int<br>


<i>В коллекции Course создать "New Request" и переименовать его в "EP6"
1. Выбрать метод Get, в поле "Enter request URL" вписать http://162.55.220.72:5005/object_info_4<br>
2. выбрать "Params"<br>
2.1. в столбец "KEY" добавить три строки с именами "name", "age" и "salary"<br>
2.2. в столбец "VALUE" добавить значения "Nata", "34" и "50000" напротив ключей "name", "age" и "salary" соответственно<br>
3. нажать Save и Send<br>

response:</i><br>
ответ
```json
{
    "age": 34,
    "name": "Nata",
    "salary": [50000, "100000", "150000"]
}
```
в поле "Enter request URL" будет отображаться URL http://162.55.220.72:5005/object_info_4?name=Nata&age=34&salary=50000
<hr>
<h2>EP_7</h2>
Method: POST<br>
EndPoint: /user_info_2<br>
request form data:<br>
name: str<br>
age: int<br>
salary: int<br>


<i>В коллекции Course создать "New Request" и переименовать его в "EP7"
1. Выбрать метод Post, в поле "Enter request URL" вписать http://162.55.220.72:5005/user_info_2<br>
2. выбрать "Body" в нем "from-data"<br>
2.1. в столбец "KEY" добавить три строки с именами "name", "age" и "salary"<br>
2.2. в столбец "VALUE" добавить значения "Nata", "34" и "50000" напротив ключей "name", "age" и "salary" соответственно<br>
3. нажать Save и Send<br>

response:</i><br>
ответ
```json
{
    "person": {"u_age": 34,
               "u_name": ["Nata", 50000, 34],
               "u_salary_5_years": 210000.0},
    "qa_salary_after_1.5_year": 165000.0,
    "qa_salary_after_12_months": 135000.0,
    "qa_salary_after_3.5_years": 190000.0,
    "qa_salary_after_6_months": 100000,
    "start_qa_salary": 50000
}
```
в поле "Enter request URL" URL не изменяется<hr>


<h2>Проверка типа значения</h2>

<i>/* ответ имеет такую структуру:</i>
```json
{
  "name": "Nata",
  "age": 37,
  "hobbies": [
    "travelling",
    "photo"
  ],
  "email": null
}
```
*/
```js
const jsonData = pm.response.json();
pm.test("Test data type of the response", () => {
  pm.expect(jsonData).to.be.an("object");
  pm.expect(jsonData.name).to.be.a("string");
  pm.expect(jsonData.age).to.be.a("number");
  pm.expect(jsonData.hobbies).to.be.an("array");
  pm.expect(jsonData.website).to.be.undefined;
  pm.expect(jsonData.email).to.be.null;
});
```
<h2>Проверка значения ответа по переменной</h2>

```javascript
pm.test("Checking the response value by variable", function () {
  pm.expect(pm.response.json().name).to.eql("Nata");
});
<hr>
```
    
<h2>Work_1</h2>
Method: POST<br>
EndPoint: /get_test_user<br>
request form data:<br>
name: str<br>
age: int<br>
salary: int<br>


<i>В коллекции Course создать "New Request" и переименовать его в "Work_1"
1. Выбрать метод Post, в поле "Enter request URL" вписать [http://162.55.220.72:5005/get_test_user]<br>
2. выбрать "Body" в нем "from-data"<br>
2.1. в столбец "KEY" добавить три строки с именами "name", "age", "salary" и "auth_token"<br>
2.2. в столбец "VALUE" добавить значения "Nata", "35" , "600" b ""/s34lfgbj/Natali/jjd909/86234kjkWpqc31161234567140418evny"" напротив ключей "name", "age" и "salary" "auth_token" соответственно<br>
3. нажать Save и Send<br>

response:</i><br>
ответ
```json
{
    "age": "35",
    "family": {
        "children": [
            [
                "Alex",
                24
            ],
            [
                "Kate",
                12
            ]
        ],
        "u_salary_1_5_year": 2400
    },
    "name": "Nata",
    "salary": 600
}
```
в поле "Enter request URL" URL не изменяется<br>
    
<i>3. Во вкладке "Tests" прописываем</i><br>
    
```js
const jsonData = pm.response.json();

 pm.test("Item_3 Person_from_body", function () {

     pm.expect(jsonData.age).to.equal("35")
});
    
// Массивы и элементы массивов начинаются с нуля
 pm.test("Item_4 children_Alex", function () {

     pm.expect(jsonData.family.children[0][1]).to.equal(24)
});

pm.test("Item_5 children_Kate", function () {

     pm.expect(jsonData.family.children[1][1]).to.equal(12)
});
//Проверим что есть параметр name
pm.test("Item_6 Test", function () {

     pm.expect(jsonData).to.have.property("name")
});
//Проверим что есть кусок jsona
pm.test("Item_7 Test", function () {

     pm.expect(jsonData).to.deep.include({"salary": 600})
});
//Проверить что первый элемент массива (Kate) содержит "Kate" (счет с 0)
pm.test("Item_8 children_Kate", function () {

     pm.expect(jsonData.family.children[1]).to.deep.include("Kate")
});
//Проверить что первый элемент массива (Kate) содержит в первом элементе массива "K" (счет с 0)
pm.test("Item_9 children_Kate", function () {

     pm.expect(jsonData.family.children[1][0]).to.deep.include("K")
});
//Проверка на тип данных (на массив)
pm.test("Item_10 children_Kate", function () {

     pm.expect(jsonData.family.children[1]).to.be.a("Array")
});
//Проверка на тип данных (на номер)
pm.test("Item_11 children_Kate", function () {

     pm.expect(jsonData.family.children[1][1]).to.be.a("Number")
});
//Проверка на тип данных (на cnhjrjdsq)
pm.test("Item_12 children_Kate", function () {

     pm.expect(jsonData.family.children[1][0]).to.be.a("String")
});
//Проверка что в name параметр value - String строка
pm.test("Item_13 children_Kate", function () {

     pm.expect(jsonData.name).to.be.a("String")
});
//
//Проверка на тип данных (на массив) и значение
pm.test("Item_14 children_Kate", function () {

     pm.expect(jsonData.family.children[1]).to.be.an("Array").that.include(12)
});
//Сравнить массив co значением
pm.test("Item_15 childrens", function () {

     pm.expect(jsonData.family.children[0]).to.eql(["Alex",24])
});
```
<hr>
    
<h3>Endpoint_1</h3>
http://162.55.220.72:5005/first<bt>

1. Отправить запрос. (Метод GET) <br>
<i>ответ:</i>
```
    This is the first responce from server!
```
     
2. Статус код 200 <br>
   
<i>перейти в поле Tests<br>
выбрать из списка SNIPPETS "Status code: Code is 200"<br>
в поле ввода кода тестов:</i>
```js
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```
Save - Send<br>
<i>во вкладке Test Results</i>
```
PASS Status code is 200
```

3. Проверить, что в body приходит правильный string.<br>
<i>ответ в body</i>
```
This is the first responce from server!
```
    
<i>перейти в поле Tests<br>
выбрать из списка SNIPPETS "Response body: Is equal to a string"<br>
в поле ввода кода тестов:</i> 
    
```js
pm.test("Body is correct", function () {
    pm.response.to.have.body("This is the first responce from server!");
});
```
Save - Send<br>
<i>во вкладке Test Results</i>
```
PASS Body is correct
```
<hr>
    
<h3>Endpoint_2</h3>
http://162.55.220.72:5005/user_info_3 (EP_5 из HW_1)<br>
<i>Add request<br>
метод POST<br>
в поле "Enter request URL" вписать http://162.55.220.72:5005/user_info_3 и нажать Save<br>

1. Отправить запрос.<br>
нажать Send<br></i>

2. Статус код 200 <br>
   
<i>перейти в поле Tests<br>
выбрать из списка SNIPPETS `"Status code: Code is 200"`<br>
в поле ввода кода тестов:</i>
```js
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```
Save - Send<br>
<i>во вкладке Test Results</i>
```
PASS Status code is 200
```
3. Спарсить response body в json.<br>  
      
<i>перейти в поле Tests<br>
выбрать из списка SNIPPETS `"Response body: JSON value check"`<br>
в поле ввода кода тестов оставить код:</i> 
    
```js
let responseData = pm.response.json();  
console.log(responseData);
```
    
<i>Проверить содержимое переменной, выводя ее в Console:</i>

```
{age: "30", family: {…}, name: "Nata"…}
```
4. Проверить, что name в ответе равно name в request (name вбить руками.)<br>

<i>Выбрать из списка SNIPPETS `"Response body: JSON value check"` <br>
в окне редактирования тестов оставить код:</i>
```js
pm.test("name в запросе равен name в ответе", function () {
    pm.expect(responseData.name).to.eql("Nata");
});
```
<i>во вкладке Test Results</i>
    
```
PASS name в запросе равен name в ответе
```
5. Проверить, что age в ответе равно age в request (age вбить руками.)<br>
    
<i>в окне редактирования тестов код:</i>
```js
pm.test("age в запросе равен age в ответе", function () {
    pm.expect(responseData.age).to.eql("34");
});
```
<i>во вкладке Test Results</i>
```
PASS age в запросе равен age в ответе
```
6. Проверить, что salary в ответе равно salary s request (salary вбить руками.)<br>
    
<i>в окне редактирования тестов код: </i>
```js
pm.test("salary в запросе равен salary в ответе", function () {
    pm.expect(responseData.salary).to.eql(50000);
});
```
<i>во вкладке Test Results</i>
```
PASS salary в запросе равен salary в ответе
```
7. Спарсить request.<br>
    
<i>в окне редактирования тестов код:</i>
```js
let requestData = request.data;  
console.log('request data:', requestData);
```
<i>Save - Send</i><br>
Проверить содержимое переменной, выводя ее в Console:
```
request data: {name: "Nata", age: "37", salary: "50000"}
```
8. Проверить, что name в ответе равно name s request (name забрать из request.)<br>
<i>в окне редактирования тестов код:</i>
```js
pm.test("значения name в ответе и в запросе совпадают", function () {
pm.expect(responseData.name).to.eql(requestData.name);  
});
```
<i>во вкладке Test Results</i>
```
PASS значения name в ответе и в запросе совпадают
```
9. Проверить, что age в ответе равно age s request (age забрать из request.)<br>
    
<i>в окне редактирования тестов код:</i>
```js
pm.test("значения age в ответе и в запросе совпадают", function () {
pm.expect(responseData.age).to.eql(requestData.age);  
});
```
<i>во вкладке Test Results</i>
```
PASS значения name в ответе и в запросе совпадают
```
10. Проверить, что salary в ответе равно salary s request (salary забрать из request.)<br>
    
<i>в окне редактирования тестов код:</i>
    
```js
pm.test("значения salary в ответе и в запросе совпадают", function () {
pm.expect(responseData.salary).to.eql(Number(requestData.salary));  
});
```

<i>во вкладке Test Results<\i>
```
PASS значения salary в ответе и в запросе совпадают
```
11. Вывести в консоль параметр family из response.<br>
    
<i>в окне редактирования тестов код:</i>
```
console.log('Family: ', responseDate.family)
```    
Проверить содержимое переменной, выводя ее в Console:
```
Family: {children: [2], u_salary_1_5_year: 200000}
```    
12.Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)<br
                                                                                          >
<i>в окне редактирования тестов код:</i>
```js
pm.test("u_salary_1_5_year в ответе равно salary*4", function () {  
pm.expect(responseData.family.u_salary_1_5_year).to.eql(requestData.salary*4);   
});  
```    
<i>во вкладке Test Results</i>
```
PASS u_salary_1_5_year в ответе равно salary*4
```
