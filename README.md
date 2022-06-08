# Postman

<h1 align="center">Работа в Postman</h1>

<h3>HW_1 <br>

[EP_1 /get_method](https://github.com/narshinova/Postman/blob/main/README.md#ep_1)<br>
[EP_2 /user_info_3](https://github.com/narshinova/Postman/blob/main/README.md#ep_2)<br>
[EP_3 /object_info_1](https://github.com/narshinova/Postman/blob/main/README.md#ep_3)<br>
[EP_4 /object_info_2](https://github.com/narshinova/Postman/blob/main/README.md#ep_4)<br>
[EP_5 /object_info_3](https://github.com/narshinova/Postman/blob/main/README.md#ep_5)<br>
[EP_6 /object_info_4](https://github.com/narshinova/Postman/blob/main/README.md#ep_6)<br>
[EP_7 /user_info_2](https://github.com/narshinova/Postman/blob/main/README.md#ep_7)<hr></h3>

</i><h3>Writing test scripts + HW_2:<h3></i>
    
[Поверка типа значения](https://github.com/narshinova/Postman/blob/main/README.md#%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0-%D1%82%D0%B8%D0%BF%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F)<br>
[Проверка значения ответа по переменной](https://github.com/narshinova/Postman/blob/main/README.md#%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D0%B0-%D0%BF%D0%BE-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9)<br>
[Work_1](https://github.com/narshinova/Postman/blob/main/README.md#work_1)<hr>

**HW_2**	<br>
[Endpoint_1 /test scripts_Body is correct](https://github.com/narshinova/Postman/blob/main/README.md#endpoint_1)<br>	
[Endpoint_2 /test scripts_JSON value check](https://github.com/narshinova/Postman/blob/main/README.md#endpoint_2)<br>	
[Endpoint_3 /checking request and response parameters](https://github.com/narshinova/Postman/blob/main/README.md#endpoint_3)<br>	
[Endpoint_4 /checking request and response parameter elements,cycle](https://github.com/narshinova/Postman/blob/main/README.md#endpoint_4)<br>	
[Endpoint_5 /parameters from the environment](https://github.com/narshinova/Postman/blob/main/README.md#endpoint_5)<br>	<hr>	
HW_2*<br> 
[Postman Endpoint_6 /testing the API of this endpoint for input validation
parameters](https://github.com/narshinova/Postman/blob/main/README.md#hw_2-postmanep_7-user_info_2)<br>	
[Endpoint_7 /testing un the cycle](https://github.com/narshinova/Postman/blob/main/README.md#4-ep_7-user_info_2http16255220725005user_info_2)<br>	
	
	
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
2.2. в столбец "VALUE" добавить значения "Nata", "35" , "600" напротив ключей "name", "age" и "salary" "auth_token" соответственно<br>
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
    
<h2>Endpoint_1</h2>
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
    
<h2>Endpoint_2</h2>
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
pm.expect(responseData.salary).to.eql(+requestData.salary);  
});
```

<i>во вкладке Test Results<\i>
```
PASS значения salary в ответе и в запросе совпадают
```
11. Вывести в консоль параметр family из response.<br>
    
<i>в окне редактирования тестов код:</i>
```
console.log ("family:", jsonData.family);
```    
Проверить содержимое переменной, выводя ее в Console:
```
family: {children: [2], u_salary_1_5_year: 8000}
```    
12.Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)<br>
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
<hr>
<h2>Endpoint_3</h2>
(EP_5 из HW_1) http://162.55.220.72:5005/object_info_3<br>
<i>Add request<br>
метод GET<br>
в поле "Enter request URL"  http://162.55.220.72:5005/object_info_3?name=Nata&age=37&salary=50000<br>

1. Отправить запрос.<br>
    нажать Save Send

2. Статус код 200<br>
```js
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```
    
3. Спарсить response body в json.<br>
```js
let jsonData = pm.response.json();
console.log('Response Data:', responseData)
```

<i>в Console:</i>
```
Response Data: {age: "37", family: {…}, name: "Nata"…}
```    
4. Спарсить request.<br>
```js
let requestData = pm.request.url.query.toObject()  
console.log('Request Data:', requestData);
```
<i>в Console:</i>
```
Request Data: {name: "Nata", age: "37", salary: "50000"}
```
5. Проверить, что name в ответе равно name s request (name забрать из request.)<br>
<i>из списка SNIPPETS выбрать `Response body: JSON value check`</i><br>
<i>в окне редактирования тестов оставить код:</i>
```js
pm.test("name в запросе равен name в ответе", function () {
    pm.expect(jsonData.name).to.eql(requestData.name)
});
```    

6. Проверить, что age в ответе равно age s request (age забрать из request.)<br>
```js
pm.test("age в запросе равен age в ответе", function () {
    pm.expect(jsonData.age).to.eql(requestData.age)
});
```
7. Проверить, что salary в ответе равно salary s request (salary забрать из request.)<br>
<i>в окне редактирования тестов оставить код:</i>
```js
m.test("salary в запросе равен salary в ответе", function () {
    pm.expect(jsonData.salary).to.eql(Number(requestData.salary))
});
```	

8. Вывести в консоль параметр family из response.<br>
```js
console.log('Family: ', jsonData.family)
в Console:

Family: {children: [2], pets: {…}, u_salary_1_5_year: 200000}
```	
9. Проверить, что у параметра dog есть параметры name.<br>
```js
pm.test("у параметра dog есть параметры name", function () {  
    pm.expect(jsonData.family.pets.dog).to.have.property('name');   
});
```
10. Проверить, что у параметра dog есть параметры age.<br>
```js
pm.test("у параметра dog есть параметры age", function () {  
    pm.expect(jsonData.family.pets.dog).to.have.property('age');   
});
```	
11. Проверить, что параметр name имеет значение Luky.<br>
```js
pm.test("параметр name имеет значение Luky", function () {
    pm.expect(jsonData.family.pets.dog.name).to.eql('Luky')
});
```	
12. Проверить, что параметр age имеет значение 4.<br>
```js
pm.test("параметр age имеет значение 4", function () {
    pm.expect(jsonData.family.pets.dog.age).to.eql(4)
});
```
<hr>
<h2>Endpoint_4</h2>
(EP_6 из HW_1) http://162.55.220.72:5005/object_info_4<br>
<i>Add request<br>
метод GET<br>
в поле "Enter request URL" вписать http://162.55.220.72:5005/object_info_4?name=Marg0sh&age=34&salary=50000 и нажать Save</i><br>


1.Статус код 200
```js
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```	
2.Спарсить response body в json.<br>
```js
let responseData = pm.response.json();
console.log ('Response Data', responseData)
```
в Console:
```
Response Data {age: 37, name: "Nata", salary: [3]}
```	
3. Спарсить request.<br>
```js	
let requestData = pm.request.url.query.toObject();
console.log ('Request Data', requestData)
```
в Console:
```
Request Data: {name: "Nata", age: "37", salary: "50000"}
```	
4. Проверить, что name в ответе равно name s request (name забрать из request.)<br>
```js
pm.test("name в ответе равно name в request ", function () {
    pm.expect(responseData.name).to.eql(requestData.name)
});
```
5. Проверить, что age в ответе равно age из request (age забрать из request.)<br>
```js
pm.test("age в ответе равно age из request ", function () {
    pm.expect(responseData.age).to.eql(Number(requestData.age))
});
```

6.Вывести в консоль параметр salary из request.<br>
```js
console.log(requestData.salary)
```
<i>Save - Send<br>
в Console:</i><>br
`50000`<br>
	
7. Вывести в консоль параметр salary из response.<br>
```
console.log(responseData.salary)
```	
<i>Save - Send<br>
в Console:<br>
(3) [50000, "100000", "150000"]<br></i>
	
8. Вывести в консоль 0-й элемент параметра salary из response.<br>
```
console.log(responseData.salary[0])
```	
<i>Save - Send<br>
в Console:</i><br>
`50000`

9. Вывести в консоль 1-й элемент параметра salary параметр salary из response.<br>
```
console.log(responseData.salary[1])
```
<i>Save - Send<br>
в Console:</i><br>
`"100000"`
	
10. Вывести в консоль 2-й элемент параметра salary параметр salary из response.<br>
```
console.log(responseData.salary[2])
```	
<i>Save - Send<br>
в Console:<br>
`"150000"`</i>
	
11. Проверить, что 0-й элемент параметра salary равен salary из request (salary забрать из request.)<br>
```js
pm.test("0-й элемент параметра salary равен salary из request ", function () {
    pm.expect(responseData.salary[0]).to.eql(+(requestData.salary))
});
```
12. Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request.)<br>
```js
pm.test(" 1-й элемент параметра salary равен salary*2 из request ", function () {
    pm.expect(+responseData.salary[1]).to.eql(requestData.salary*2)
});
```
13. Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request.)<br>
```js
pm.test("2-й элемент параметра salary равен salary*3 из request ", function () {
    pm.expect(+responseData.salary[2]).to.eql(requestData.salary*3)
});
```
14. Создать в окружении переменную name<br>
<i>в меню слева выбирать Environment - New Environment - Nata_HW2 <br>
В строку Variable внести название переменной name</i><br>

15. Создать в окружении переменную age<br>
`в меню слева выбирать Environment - Nata_HW2 
В строку Variable внести название переменной age`

16. Создать в окружении переменную salary<br>
`в меню слева выбирать Environment - Nata_HW2 
В строку Variable внести название переменной salary`

17. Передать в окружение переменную name<br>
`вернуться в коллекции, в Endpoint_4 object_info_4, во вкладку Tests, прописать код:`
```js
pm.environment.set('Name', responseData.name);
```
18. Передать в окружение переменную age<br>
```js
pm.environment.set('Age', responseData.age);
```
19. Передать в окружение переменную salary<br>
```js
pm.environment.set('Salary', responseData.salary[0]);
```	
20. Написать цикл который выведет в консоль по порядку элементы списка из параметра salary.
```js
for (let i of responseData.salary) {  
console.log('элементы списка из параметра salary:',i);  
	}
```
<i>в Console: </i>
```
элементы списка из параметра salary: 50000
элементы списка из параметра salary: "100000"
элементы списка из параметра salary: "150000"
```
	
<h2>Endpoint_5</h2>
(EP_7 из HW_1) http://162.55.220.72:5005/user_info_2<br>
<i>Add request<br>
метод POST в поле "Enter request URL" вписать http://162.55.220.72:5005/user_info_2 и нажать Save</i><br>

1.Вставить параметр salary из окружения в request<br>
`перейти во вкладку Body - from-data в столбце Value напротив 'salary' написать {{Salary}}`

2.Вставить параметр age из окружения в age<br>
`в столбце Value напротив 'age' написать {{Age}}</i>`

3.Вставить параметр name из окружения в name<br>
`в столбце Value напротив 'name' написать {{Name}}`
Отправить запрос.<br>
Save - Send</i><br>

4 Статус код 200<br>
<i>перейти во вкладку Tests, в окне редактирования тестов оставить код:</i>
```js
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```	
5. Спарсить response body в json.<br>
```js
let responseData = pm.response.json();
console.log ('Response Data', responseData)
```	
<i>в Console</i>
```
Response Data {person: {…}, qa_salary_after_1.5_year: 165000, qa_salary_after_12_months: 135000…}
```	
6. Спарсить request.
```js
let requestData = request.data
console.log ('Request Data', requestData)
```	
<i>в Console</i>
```
Request Data {name: "Nata", age: "37", salary: "50000"}
```	
7.Проверить, что json response имеет параметр start_qa_salary<br>
```js
pm.test("json response имеет параметр start_qa_salary", function () {  
    pm.expect(responseData).to.have.property('start_qa_salary');   
});
```
8. Проверить, что json response имеет параметр qa_salary_after_6_months<br>
```js
pm.test("json response имеет параметр qa_salary_after_6_months", function () {  
    pm.expect(responseData).to.have.property('qa_salary_after_6_months');   
});
```
9. Проверить, что json response имеет параметр qa_salary_after_12_months<br>
```js
pm.test("json response имеет параметр qa_salary_after_12_months", function () {  
    pm.expect(responseData).to.have.property('qa_salary_after_12_months');   
});
Save - Send
```
10. Проверить, что json response имеет параметр qa_salary_after_1.5_year
```js
pm.test("json response имеет параметр qa_salary_after_1.5_year", function () {  
    pm.expect(responseData).to.have.property('qa_salary_after_1.5_year');   
});
```
11.Проверить, что json response имеет параметр qa_salary_after_3.5_years<br>
```js
pm.test("json response имеет параметр qa_salary_after_3.5_years", function () {  
    pm.expect(responseData).to.have.property('qa_salary_after_3.5_years');   
});
```
12. Проверить, что json response имеет параметр person<br>
```js
pm.test("json response имеет параметр person", function () {  
    pm.expect(responseData).to.have.property('person');   
});
```
13.Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)<br>
```js
pm.test("параметр start_qa_salary равен salary из request", function () {
    pm.expect(responseData.start_qa_salary).to.eql(requestData.Salary)
});
```
14. Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request.)<br>
```js
pm.test("параметр qa_salary_after_6_months равен salary*2 из request", function () {
    pm.expect(responseData.qa_salary_after_6_months).to.eql(requestData.salary*2)
});
```
15.Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request.)<br>
```js
pm.test("параметр qa_salary_after_12_months равен salary*2.7 из request", function () {
    pm.expect(responseData.qa_salary_after_12_months).to.eql(requestData.salary*2.7)
});
```
16. Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request.)<br>
```js
pm.test("параметр qa_salary_after_1.5_year равен salary*3.3 из request", function () {
    pm.expect(responseData['qa_salary_after_1.5_year']).to.eql(requestData.salary*3.3)
});
```
17. Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request.)<br>
```js
pm.test("параметр qa_salary_after_3.5_years равен salary*3.8 из request", function () {
    pm.expect(responseData['qa_salary_after_3.5_years']).to.eql(requestData.salary*3.8)
});
```
18. Проверить, что в параметре person, 1-й элемент из u_name равен salary из request (salary забрать из request.)<br>
```js
pm.test("параметре person, 1-й элемент из u_name равен salary из request", function () {
    pm.expect(responseData.person.u_name[1]).to.eql(Number(requestData.salary))
});
```
19. Проверить, что что параметр u_age равен age из request (age забрать из request.)<br>
```js
pm.test("параметр u_age равен age из request", function () {
    pm.expect(responseData.person.u_age).to.eql(Number(requestData.age))
});
```
20. Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request.)<br>
```js
pm.test("параметр u_salary_5_years равен salary*4.2 из request", function () {
    pm.expect(responseData.person.u_salary_5_years).to.eql(requestData.salary*4.2)
});
```
`***`**Написать цикл который выведет в консоль по порядку элементы списка из параметра person.**
```js
for (let i in responseData.person) {  
console.log('элементы списка из параметра person:',i);  
	}
```
в Console
```
элементы списка из параметра person: u_age
элементы списка из параметра person: u_name
элементы списка из параметра person: u_salary_5_years
```
<hr>
<h2>HW_2* Postman<br>
Endpoint_6 /user_info_2</h2>
<h4>Требования:</h4><br>
<i>Name: 3-40 символов включительно, запрещены префиксные и постфиксные пробелы. Поле обязательное<br>
Age: только целые цифры в диапазоне 18-120 включительно. Поле обязательное<br>
Salary: только целые цифры в диапазоне 1-1000000 включительно. Поле обязательное</i><br>
	
<h4>1. Преобразовать задание 1 таким образом, чтобы вы отправляли параметры через CSV файл. У вас будет ровно 1 запрос в коллекции, который будет<br> повторяться столько раз, сколько строк в CSV файле. Также должна быть написана функция в тестах, которая проверяет валидность входящих данных, и в<br> зависимости от этого проверяет на статус 200 или НЕ 200.</h4>

<h2>2.Endpoint_7 /object_info_4<br>
http://162.55.220.72:5007/object_info_4 </h2> <br>

Преобразовать пункты 12-13-14 (salary из реквеста и респонса равны) таким образом,<br> чтобы проверка производилась циклом, в котором будет всего ОДИН тест.<br> Имя теста должно меняться в зависимости от значения в Salary.<br>
 
12. Проверить, что 0-й элемент параметра salary равен salary из request (salary из request.)<br>
13. Проверить, что 1-й элемент параметра salary равен salary2 из request (salary из request.)<br>
14. Проверить, что 2-й элемент параметра salary равен salary3 из request (salary из request.)<br>
	
```js
let reqSal = pm.request.url.query.get('salary')
let respSal = pm.response.json().salary

for(let i = 0; i < respSal.length; i++){
    pm.test(`Request salary ${reqSal} *${i+1} == response salary ${respSal[i]}`, function(){
        pm.expect(+reqSal*(i+1)).to.eql(+respSal[i])
        // console.log('reqSal*(i+1): ', reqSal*(i+1))
    })
}
```				    
или
```js
respSal.forEach((element, i) =>{
    pm.test(`Request salary ${reqSal} *${i+1} == response salary ${element}}}`, function(){
        pm.expect(+reqSal*(i+1)).to.eql(+element)
    })
})
```	
<i>Save - Send<br>
во вкладке Test Results</i>
```
PASS Request salary 50000 *1 == response salary 50000
PASS Request salary 50000 *2 == response salary 100000
PASS Request salary 50000 *3 == response salary 150000
```
<h2>3. Endpoint_8 /object_info_3<br>
http://162.55.220.72:5005/object_info_3</h2>
Преобразовать задания 5-7 (сравнить идентичные поля в реквесте и респонсе) таким образом, <br>чтобы это делалось ЗА ОДИН ТЕСТ (сразу все 3 поля) БЕЗ ЦИКЛОВ! (глубокое сравнение объектов).<br>

5. Проверить, что name в ответе равно name s request (name забрать из request.)<br>
6. Проверить, что age в ответе равно age s request (age забрать из request.)<br>
7. Проверить, что salary в ответе равно salary s request (salary забрать из request.)<br>
```js
let reqSal = +pm.request.url.query.get('salary')
let reqName = pm.request.url.query.get('name')
let reqAge = +pm.request.url.query.get('age')
// console.log (reqSal)
// console.log (reqName)
// console.log (reqAge)

const reqObj ={
    name : reqName,
    age : reqAge,
    salary : reqSal
}
// console.log (reqObj)

let respSal = +pm.response.json().salary
let respAge = +pm.response.json().age
let respName = pm.response.json().name

const respObj ={
    name : respName,
    age : respAge,
    salary : respSal
}
// console.log (respObj)

pm.test('RespObj == ReqObj', function(){
    pm.expect(reqObj).to.deep.eql(respObj)
})
```
или
```js
let reqSal = +pm.request.url.query.get('salary')
let reqName = pm.request.url.query.get('name')
let reqAge = +pm.request.url.query.get('age')

const reqObj ={
    name : reqName,
    age : reqAge,
    salary : reqSal
}

const respObj = {}
for (const key in reqObj){
    if(!isNaN(pm.response.json()[key])){
        respObj[key] = +pm.response.json()[key]
    }else
        respObj[key] = pm.response.json()[key]
    }

pm.test('RespObj == ReqObj', function(){
    pm.expect(reqObj).to.deep.eql(respObj)
})
```	
Save - Send<br>
во вкладке Test Results<br>
```
PASS RespObj == ReqObj
```	
<h2>4. Endpoint_9 /user_info_2<br>
http://162.55.220.72:5005/user_info_2</h2>

Преобразовать задания 8-13 таким образом, <br>чтобы все проверки делались в цикле (1 проверка в цикле, в которую попадают нужные параметры). <br>Название теста должно видоизменяться исходя из подаваемых данных. ( ${} или другим способом)<br>
8. Проверить, что json response имеет параметр start_qa_salary<br>
9. Проверить, что json response имеет параметр qa_salary_after_6_months<br>
10. Проверить, что json response имеет параметр qa_salary_after_12_months<br>
11. Проверить, что json response имеет параметр qa_salary_after_1.5_year<br>
12. Проверить, что json response имеет параметр qa_salary_after_3.5_years<br>
13. Проверить, что json response имеет параметр person<br>
```js
let arr = []
const resp = pm.response.json()

for(const key in resp){
    arr.push(key)
}
console.log(arr)
```	
в Console:
```
(6):
0: "person"
1: "qa_salary_after_1.5_year"
2: "qa_salary_after_12_months"
3: "qa_salary_after_3.5_years"
4: "qa_salary_after_6_months"
5: "start_qa_salary"
```	
в поле кода:
```js
arr.forEach((element) => {
    pm.test(`Response has a ${element}`, function(){
        pm.expect(resp).to.have.property(element)
    })
})
```	
Save - Send<br>
во вкладке Test Results<br>
```
PASS Response has a person
PASS Response has a qa_salary_after_1.5_year
PASS Response has a qa_salary_after_12_months
PASS Response has a qa_salary_after_3.5_years
PASS Response has a qa_salary_after_6_months
PASS Response has a start_qa_salary
```	
<h5>Преобразовать задания 14 - 18 (проверить что параметр равен salary умножить на коэффициент) таким образом,<br> чтобы все проверки делались в цикле (1 проверка в цикле, в которую попадают нужные параметры). <br>Название теста должно видоизменяться исходя из подаваемых данных. <br>( ${} или другим способом)</h5><br>
14. Проверить, что параметр start_qa_salary равен salary из request <br>
15. Проверить, что параметр qa_salary_after_6_months равен salary * 2 из request <br>
16. Проверить, что параметр qa_salary_after_12_months равен salary * 2.7 из request <br>
17. Проверить, что параметр qa_salary_after_1.5_year равен salary * 3.3 из request <br>
18. Проверить, что параметр qa_salary_after_3.5_years равен salary * 3.8 из request <br>
```js
let arr = []
const resp = pm.response.json()

for(const key in resp){
    arr.push(key)
}
const count = [
    '',
    3.3,
    2.7,
    3.8,
    2,
    1
]

arr.forEach((element, i) => {
    if (element !=='person') {
    pm.test(`Response_has_a ${element}`, function(){
        pm.expect(+resp[element]).to.eql(50000*count[i])
    })}
})
```
Save - Send<br>
во вкладке Test Results<br>
```
PASS Response_has_a qa_salary_after_1.5_year
PASS Response_has_a qa_salary_after_12_months
PASS Response_has_a qa_salary_after_3.5_years
PASS Response_has_a qa_salary_after_6_months
PASS Response_has_a start_qa_salary
```
	<br>
**Преобразовать описанные выше задания 1 и 2 для данного эндпоинта в ОДИН ЦИКЛ, в котором будут проходить ОБА теста.**
```js
let arr = []
const resp = pm.response.json()
const salary = 50000

const counters = {
    'person': '',
    'start_qa_salary': 1,
    'qa_salary_after_6_months': 2,
    'qa_salary_after_12_months': 2.7,
    'qa_salary_after_1.5_year': 3.3,
    'qa_salary_after_3.5_years': 3.8
}

for (const key in counters){
    pm.test(`Response_Has_ ${key}`, () =>{
        pm.expect(resp).to.have.property(key)
    })
    if (key !== 'person'){
        pm.test(`${key} = ${salary} * ${counters[key]}`, () =>{
        pm.expect(resp[key]).to.eql(counters[key]*salary)
    })
    }
}
```
Save - Send<br>
во вкладке Test Results<br>
```
PASS Response_Has_ person
PASS Response_Has_ start_qa_salary
PASS start_qa_salary = 50000 * 1
PASS Response_Has_ qa_salary_after_6_months
PASS qa_salary_after_6_months = 50000 * 2
PASS Response_Has_ qa_salary_after_12_months
PASS qa_salary_after_12_months = 50000 * 2.7
PASS Response_Has_ qa_salary_after_1.5_year
PASS qa_salary_after_1.5_year = 50000 * 3.3
PASS Response_Has_ qa_salary_after_3.5_years
PASS qa_salary_after_3.5_years = 50000 * 3.8
```	
