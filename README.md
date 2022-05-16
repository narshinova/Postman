# Postman

Работа в Postman

Создать запросы в Postman.

Create new collection - New request

Protocol: http
IP: 162.55.220.72
Port: 5005

в поле "Enter request URL" вписать http://162.55.220.72:5005/ и нажать Save

EP_1
Method: GET
EndPoint: /get_method
request url params:
name: str
age: int

В коллекции Course создать "New Request" и переименовать его в "EP1"
1. Выбрать метод GET, в поле "Enter request URL" дописать "/get_method", чтоб получилось http://162.55.220.72:5005/get_method
2. выбрать "Params"
2.1. в столбец "KEY" добавить две строки с именами "name" и "age"
2.2. в столбец "VALUE" добавить значения "Nata" и "30" напротив ключей "name" и "age" соответственно
3. нажать Save и Send

response:
ответ

[
    "Nata",
    "30"
]
в поле "Enter request URL" будет отображаться URL http://162.55.220.72:5005/get_method?name=Nata&age=34



EP_2
Method: POST
EndPoint: /user_info_3
request form data:
name: str
age: int
salary: int

В коллекции Course создать "New Request" и переименовать его в "EP2"
1. Выбрать метод Post, в поле "Enter request URL" вписать http://162.55.220.72:5005/user_info_3
2. выбрать "Body" в нем "from-data"
2.1. в столбец "KEY" добавить три строки с именами "name", "age" и "salary"
2.2. в столбец "VALUE" добавить значения "Nata", "34" и "50000" напротив ключей "name", "age" и "salary" соответственно
3. нажать Save и Send

response:
ответ

{   
    "age": "34",
    "family": {"children": [["Alex", 24], ["Kate", 12]],
               "u_salary_1_5_year": 200000},
    "name": "Nata",
    "salary": 50000
}
в поле "Enter request URL" URL не изменяется

EP_3
Method: GET EndPoint: /object_info_1 request url params: name: str age: int weight: int

В коллекции Course создать "New Request" и переименовать его в "EP3"
1. Выбрать метод Get, в поле "Enter request URL" вписать http://162.55.220.72:5005/object_info_1
2. выбрать "Params"
2.1. в столбец "KEY" добавить три строки с именами "name", "age" и "weight"
2.2. в столбец "VALUE" добавить значения "Nata", "34" и "70" напротив ключей "name", "age" и "weight" соответственно
3. нажать Save и Send

response:
ответ

{
    "age": 34,
    "daily_food": 0.84,
    "daily_sleep": 175.0,
    "name": "Nata"
}
в поле "Enter request URL" будет отображаться URL http://162.55.220.72:5005/object_info_1?name=Nata&age=34&weight=70


EP_4
Method: GET
EndPoint: /object_info_2
request url params:
name: str
age: int
salary: int

В коллекции Course создать "New Request" и переименовать его в "EP4"
1. Выбрать метод Get, в поле "Enter request URL" вписать http://162.55.220.72:5005/object_info_2
2. выбрать "Params"
2.1. в столбец "KEY" добавить три строки с именами "name", "age" и "salary"
2.2. в столбец "VALUE" добавить значения "Nata", "34" и "50000" напротив ключей "name", "age" и "salary" соответственно
3. нажать Save и Send

response: ответ

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
в поле "Enter request URL" будет отображаться URL http://162.55.220.72:5005/object_info_2?name=Nata&age=34&salary=50000


EP_5
Method: GET
EndPoint: /object_info_3
request url params:
name: str
age: int
salary: int

В коллекции Course создать "New Request" и переименовать его в "EP5"
1. Выбрать метод Get, в поле "Enter request URL" вписать http://162.55.220.72:5005/object_info_3
2. выбрать "Params"
2.1. в столбец "KEY" добавить три строки с именами "name", "age" и "salary"
2.2. в столбец "VALUE" добавить значения "Nata", "34" и "50000" напротив ключей "name", "age" и "salary" соответственно
3. нажать Save и Send

response:
ответ

{
    "age": "34",
    "family": {"children": [["Alex", 24], ["Kate", 12]],
               "pets": {"cat": {"age": 3, "name": "Sunny"},
                        "dog": {"age": 4, "name": "Luky"}},
               "u_salary_1_5_year": 200000},
    "name": "Nata",
    "salary": 50000
}
в поле "Enter request URL" будет отображаться URL http://162.55.220.72:5005/object_info_3?name=Nata&age=34&salary=50000


EP_6
Method: GET
EndPoint: /object_info_4
request url params:
name: str
age: int
salary: int

В коллекции Course создать "New Request" и переименовать его в "EP6"
1. Выбрать метод Get, в поле "Enter request URL" вписать http://162.55.220.72:5005/object_info_4
2. выбрать "Params"
2.1. в столбец "KEY" добавить три строки с именами "name", "age" и "salary"
2.2. в столбец "VALUE" добавить значения "Nata", "34" и "50000" напротив ключей "name", "age" и "salary" соответственно
3. нажать Save и Send

response:
ответ

{
    "age": 34,
    "name": "Nata",
    "salary": [50000, "100000", "150000"]
}
в поле "Enter request URL" будет отображаться URL http://162.55.220.72:5005/object_info_4?name=Nata&age=34&salary=50000


EP_7
Method: POST
EndPoint: /user_info_2
request form data:
name: str
age: int
salary: int

В коллекции Course создать "New Request" и переименовать его в "EP7"
1. Выбрать метод Post, в поле "Enter request URL" вписать http://162.55.220.72:5005/user_info_2
2. выбрать "Body" в нем "from-data"
2.1. в столбец "KEY" добавить три строки с именами "name", "age" и "salary"
2.2. в столбец "VALUE" добавить значения "Nata", "34" и "50000" напротив ключей "name", "age" и "salary" соответственно
3. нажать Save и Send

response:
ответ

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
в поле "Enter request URL" URL не изменяется
