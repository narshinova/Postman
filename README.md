# Postman

<h1 align="center">Работа в Postman</h1>

**[HW_1](https://github.com/narshinova/Postman/blob/main/README.md#%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D1%8B-%D0%B2-postman)**

[EP_1 /get_method](https://github.com/narshinova/Postman/blob/main/README.md#ep_1)
[EP_2 /user_info_3](https://github.com/narshinova/Postman/blob/main/README.md#ep_2)
[EP_3 /object_info_1](https://github.com/narshinova/Postman/blob/main/README.md#ep_3)
[EP_4 /object_info_2](https://github.com/narshinova/Postman/blob/main/README.md#ep_4)
[EP_5 /object_info_3](https://github.com/narshinova/Postman/blob/main/README.md#ep_5)
[EP_6 /object_info_4](https://github.com/narshinova/Postman/blob/main/README.md#ep_6)
[EP_7 /user_info_2](https://github.com/narshinova/Postman/blob/main/README.md#ep_7)

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
в поле "Enter request URL" URL не изменяется
