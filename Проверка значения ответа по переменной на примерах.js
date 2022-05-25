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