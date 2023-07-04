let tim = prompt('введите name или age');
let abj = {
    name: 'Tim',
    age: 20,
};

while (tim !== "age" && tim !== "name") {
    alert('вы ввели не правильно')
    let tim = prompt('введите name или age')
}
alert(abj[tim])