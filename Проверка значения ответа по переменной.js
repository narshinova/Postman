Проверка значения ответа по переменной
pm.test("Checking the response value by variable", function () {
  pm.expect(pm.response.json().name).to.eql("Nata");
});