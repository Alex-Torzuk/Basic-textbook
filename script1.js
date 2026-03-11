'use strict'
// let sb
// let vs
// let week = []
// let arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
// for (let i = 0; i <= arr.length; i++) {
//     sb = '<b>' + arr[arr.length - 2]
//     vs = '<b>' + arr[arr.length - 1]
//     if (arr[i] == 'Сб') {
//         break
//     }
//     week.push(arr[i])
// }


// document.write(`${week} ${sb} ${vs}`)

// let obj = {
//     employee1: 100,
//     employee2: 200,
//     employee3: 300,
//     employee4: 400,
//     employee5: 500,
//     employee6: 600,
//     employee7: 700,
// };


// const increasePercent = 10;
// const multiplier = 1 + (increasePercent / 100); // 1.1

// for (let keys in obj) {
//     if (obj[keys] <= 400) {
//         obj[keys] *= multiplier
//     }
// }

// console.log(obj)


// let arr = []
// let x = 1
// for (let i = 0; i < 2; i++) {
//     arr[i] = []
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = []
//         for (let k = 0; k < 2; k++) {
//             arr[i][j].push(x)
//             x++
//         }
//     }

// }
// console.log(arr)


//[     [  [1, 2], [3, 4]  ], [  [5, 6], [7, 8]  ]     ]


// let obj = {
//     1: {
//         1: {
//             1: 111,
//             2: 112,
//             3: 113,
//         },
//         2: {
//             1: 121,
//             2: 122,
//             3: 123,
//         },
//     },
//     2: {
//         1: {
//             1: 211,
//             2: 212,
//             3: 213,
//         },
//         2: {
//             1: 221,
//             2: 222,
//             3: 223,
//         },
//     },
//     3: {
//         1: {
//             1: 311,
//             2: 312,
//             3: 313,
//         },
//         2: {
//             1: 321,
//             2: 322,
//             3: 323,
//         },
//     },
// }

// let sum = 0
// for (let key in obj) {
//     let subObj = obj[key]
//     for (let subKey in subObj) {
//         let moreObj = subObj[subKey]
//         for (let moreKey in moreObj) {
//             sum += moreObj[moreKey]
//         }
//     }
// }
// console.log(sum)


// let students = {
//     'group1': ['student11', 'student12', 'student13'],
//     'group2': ['student21', 'student22', 'student23'],
//     'group3': ['student31', 'student32'],
// };

// for (let key in students) {
//     for (let elems of (students[key])) {
//         console.log(elems)
//     }
// }



// let data = [
//     {
//         1: 'data11',
//         2: 'data12',
//         3: 'data13',
//     },
//     {
//         1: 'data21',
//         2: 'data22',
//         3: 'data33',
//     },
//     {
//         1: 'data31',
//         2: 'data32',
//         3: 'data33',
//     },
// ];

// for (let elem of data) {
//     for (let obj in elem) {
//         console.log(elem[obj])
//     }
// }



// let students = {
//     'group1': {
//         'subgroup11': ['student111', 'student112', 'student113'],
//         'subgroup12': ['student121', 'student122', 'student123'],
//     },
//     'group2': {
//         'subgroup21': ['student211', 'student212', 'student213'],
//         'subgroup22': ['student221', 'student222', 'student223'],
//     },
//     'group3': {
//         'subgroup31': ['student311', 'student312', 'student313'],
//         'subgroup32': ['student321', 'student322', 'student323'],
//     },
// };

// //Добавьте нового студента в подгруппу 'subgroup11'.
// students.group1.subgroup11.push('student114')
// //Добавьте в первую группу еще одну подгруппу.
// students.group1['subgroup13'] = []
// //Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.
// students.group4 = {}
// students.group4.subgroup41 = []
// students.group4.subgroup41.push('student421', 'student422')


// console.log(students)


// console.log(Math.pow(2, 10))

// console.log(Math.sqrt(245))


// let arr = [4, 2, 5, 19, 13, 0, 10]
// let res
// let sum = 0
// for (let i = 0; i <= arr.length - 1; i++) {
//     arr[i] = Math.pow(arr[i], 3)
//     sum += Math.sqrt(arr[i])

// }
// console.log(sum)


//Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
// let obj = {}


// obj.floor = Math.floor(Math.sqrt(587))
// obj.ceil = Math.ceil(Math.sqrt(587))
// console.log(obj)


//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10))


//Выведите на экран случайное целое число от 1 до 100.
// let arr = []

// for (let i = 0; i <= 10 - 1; i++) {
//     arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
// }
// console.log(arr)

// console.log(Math.abs(-5))


//Дана строка 'js'. Сделайте из нее строку 'JS'.
// let str = 'JS'
// console.log(str.toUpperCase())



//Дана строка 'i study javascript'. Вырежьте из нее слово 'study' и слово 'javascript' тремя разными способами (через substr, substring, slice).

// let str = 'i study javascript'
//console.log(str.substr(2, 5))
// console.log(str.substring(2, 7))
// console.log(str.slice(2, 7))


//Дана строка. Проверьте, начинается ли эта строка на 'http://'.


// let str = 'http://'
// let res = str.startsWith('http')
// console.log(res)

// let str = 'fdfkd.html'
// let res = str.endsWith('html')
// console.log(res)

// let str = 'ab-cd-ef';
// let arr = str.split('-');

// console.log(arr);

// let str = '1-2-3-4-5'
// let arr = str.split('-')
// console.log(arr)

// let str = '12345'
// let arr = str.split('')
// console.log(arr)

// let arr = [1, 2, 3, 4, 5]
// let str = arr.join('-')
// console.log(str)


// let arr = [1, 2, 3]
// // let firstArr = arr.shift()
// // let lastArr = arr.pop()
// let arrPush = arr.unshift(4, 5, 6)
// console.log(arr)


// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 0, 'a', 'b')
// arr.splice(6, 0, 'c')
// arr.splice(9, 0, 'e')
// console.log(arr)


// let arr = [1, 2, 3, 4, 5]
// let res = arr.includes(3)
// console.log(res)


// let arr = [1, 2, 3, 3, 3, 4];

// let res = arr.lastIndexOf(3)
// console.log(res)


// let num = 12345;
// let arr = String(num).split('');

// let prod = 1;
// for (let digit of arr) {
//     prod *= digit;
// }

// console.log(prod);

// function func() {
//     let sum = 0;
//     let i = 1;

//     while (true) { // бесконечный цикл
//         sum += i;
//         //1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, , 14
//         if (sum >= 100) {
//             return i; // цикл крутится пока не выйдет тут

//         }
//         console.log(i)
//         i++;
//     }
// }

// console.log(func());

// 

//Сделайте функцию, которая параметром будет принимать массив с 
// числами, и проверять, что все элементы в этом массиве являются четными числами.

// function func(arr){
    
//     for(let i = 0; i <= arr.length-1; i++){
//         if (arr[i] === arr[i]+1){
//             return true
//         }
//     }
//     return false
// }
// console.log(func([1, 2, 3, 4, 5, 6]))


// let arr = [2, 3, 4, 5]

// function each(arr, callback){
//     let newArr = []
//     for(let elem of arr){
//         newArr.push(callback(elem))
//     }
//     return newArr
// }

// let res = each(arr, function (num){
//     return num * 2
// })
// console.log(res)

// let arr = ['hello world']
// function each(arr, callback){
//     let newArr = []
//     for(let elem of arr){
//         newArr.push(callback(elem))
//     }
//     return newArr
// }

// let result = each(arr, function(str){
//     let newArr2 = str.split('')
//     return newArr2.reverse()
// })

// console.log(result)

// let arr = ['hello world', 'javascript is fun', 'test string']
// function each(arr, callback){
//     let newArr = []
//     for(let elem of arr){
//         newArr.push(callback(elem))
//     }
//     return newArr
// }

// let result = each(arr, function (str){
    
//     let words = str.split(' ')

//     let newWords = []

    
//     for(let word of words){
//     let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//         newWords.push(capitalizedWord)
//     }
//     return newWords.join(' ')

// })
// console.log(result)



// function cube(num) {
// 	return num ** 3;
// }
// function each(arr, callback){
//     let newArr = []
// for(let elem of arr){
//     newArr.push(callback(elem))
// }
//     return newArr
// }

// let result = each([1, 2, 3, 4, 5], cube);
// console.log(result);



// function func(arr) {
// 	for (let elem of arr) {
// 		if (Array.isArray(elem)) {
// 			func(elem);
// 		} else {
// 			console.log(elem);
// 		}
// 	}
// }

// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);


// function func(obj){
//     for(let key in obj){
//         if(typeof obj[key] == 'object'){
//             func(obj[key])
//         }else{
//             console.log(obj[key])
//         }
//     }
// }

// func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}})


// function func(arr){
//     let newArr = []
//     for(let elem of arr){
//         if(Array.isArray(elem)){
//             func(elem)
//         }else{
//             console.log(elem)
//         }
//     }
//     return newArr
// }

// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]])


//// Проработать эту задачу, изучить рекруссию !!



// function func(obj){
//     for(let key in obj){
//         if(typeof obj[key] == 'object'){
//             func(obj[key])
//         }else{
//             console.log(obj[key])
//         }
//     }
// }

// func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}})

// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]]

// let newArr = []

// function func(arr){
//     for(let elem of arr){
//         if(typeof elem == 'object'){
//             func(elem)
//         }else{
//             newArr.push(elem)
//         }}
//     }
// func(arr)
// console.log(newArr)


// function func(obj){
//     let sum = 0
//     for(let key in obj){
//         if(typeof obj[key] == 'object'){
//             sum+= func(obj[key])
//         }else{
//             sum+= obj[key]
//         }
//     }
//     return sum
// }

// console.log(func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}))


// let srr = ''

// function func(arr){
//     for(let i = 0; i <= arr.length-1; i++){
//         if(typeof arr[i] == 'object'){
//             func(arr[i])
//         }else{
//           srr+= arr[i]
//         }
//     }
// }

// func(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]])
// console.log(srr)


// function func(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] == 'object') {
// 			arr[i] = func(arr[i]);
// 		} else {
// 			arr[i] = arr[i] * arr[i]
// 		}
// 	}
	
// 	return arr;
// }

// console.log(func([1, [2, 7, 8], [3, 4, [5, 6]]]));

// let arr = ['123', '456', '789']
// let newArr = arr.map(function(elem){
    
//     return elem.split('').map(Number)
    
// })
// console.log(newArr)

//15.01.2026
// **
//  * Функция считает количество делений числа на 2 до тех пор, 
//  * пока результат не станет меньше 10.
//  * @param {number} num - Исходное число
//  * @returns {number} Количество итераций
//  */



// function isPrime(num) {
//     let a = String(num).split('')
// 	for (let elem of a) {
// 		if (elem % 2 !== 0) {
// 			return false;
// 		} 
// 		}
//         return true
// 	}
//     console.log(isPrime(3)); // должен вывести true


