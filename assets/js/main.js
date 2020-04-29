"use strict";
let users = [
    {name: "Abby", sex: "female", year: 22 },
    {name: "Oliver", sex: "male", year: 23 },
    {name: "Alexa", sex: "female", year: 17 },
    {name: "Harry", sex: "male", year: 18 },
    {name: "Alice", sex: "female", year: 35 },
    {name: "Thomas", sex: "male", year: 15 },
    {name: "Diana", sex: "female", year: 25 },
    {name: "George", sex: "male", year: 33 },
    {name: "Helen", sex: "female", year: 27 }
];


console.log("Массив имен пользователей: ", users.map(function(usersInfo) {
    return usersInfo.name;
}));

console.log("Массив возрастов пользователей: ", users.map(function(usersInfo) {
    return usersInfo.year;
}));


let adultUsers = users.filter(function(age) {
    return age.year >= 18;
});
console.log("Массив пользователей, которым 18 или более лет: ", adultUsers);


let user = users.find(function(item) {
return ((item.name === "Diana") && (item.year === 25));
});
console.log("Искомый пользователь: " , user);


let userIndex = users.findIndex(function(item) {
    return ((item.name === "Diana") && (item.year === 25));
    });
console.log("Индекс искомого пользователя: " + userIndex);






let map = function(arr, callback, thisArg) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback.call(thisArg, arr[i], i, arr));
    }
    return result;
  };

// Объявляем перменную map, которой присваиваем функцию с тремя аргументами: 
// arr - массив, с которым будем работать
// callback - функция, для работы с каждым элементом массива
// thisArg - значение для использования в качестве this
// в теле функции объявим пустой массив result, чтобы добалять в него после каждой итерации 
// результат выполнения  функции callback, которая, в свою очередь, так же имеет три аргумента:
// текущий элемент массива, индекс и сам массив.
// Далее, используя метод push, добавляем результат выполнения функции в пустой массив results


let checkFuncMap = map([1, 2, 3, 4, 5], function(check) {
    return check / 10;
});
console.log(checkFuncMap);



let filter = function(arr, callback, thisArg) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  };

// Объявляем перменную filter, которой присваиваем функцию с тремя аргументами: 
// arr - массив, с которым будем работать
// callback - функция, для работы с каждым элементом массива
// thisArg - значение для использования в качестве this
// в теле функции объявим пустой массив result, чтобы добалять в него после каждой итерации 
// результат выполнения  функции callback, которая, в свою очередь, так же имеет три аргумента:
// текущий элемент массива, индекс и сам массив.
// с помощью метода call вызываем callback и смотрим вернула ли функция значение, которое
// было отфильтровать.

let checkFuncFilter = filter([1, 2, 3, 4, 5], function(check) {
    return check > 3;
})
console.log(checkFuncFilter);