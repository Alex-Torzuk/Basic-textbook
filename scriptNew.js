'use strict'

// let num = 77


// if(num >= 10 && num <= 99){
// 	let strNum = String(num)
// 	let sum = Number(strNum[0]) + Number(strNum[1])
// 	console.log(sum)
// 	if(sum <= 9){
// 		console.log('сумма цифр однозначна')
// 	}else{
// 		console.log('сумма цифр двухзначна')
// 	}
// }




//Возведите 2 в 10 степень.
// console.log(Math.pow(2, 10))
// console.log(Math.sqrt(245))





//Дана строка 'i study javascript'. Вырежьте из нее слово 'study' и слово 'javascript' 
// тремя разными способами (через substr, substring, slice).

// let str = 'i study javascript'
// let a = str.slice(2, 7)
// let b = str.slice(8, 18)
// console.log(a)
// console.log(b)

// let c = str.substr(2, 5)
// let d = str.substr(8, 10)
// console.log(c)
// console.log(d)

// let e = str.substring(2, 7)
// let f = str.substring(8, 18)
// console.log(e)
// console.log(f)


//Дана строка. Проверьте, начинается ли эта строка на 'http://'.

// let str = 'http://'.includes('ht')
// console.log(str)
// let str = 'http://'
// let res = str.startsWith('ht')
// let res = str.endsWith('//')
// let res = str.indexOf(':')
// let res = str.lastIndexOf('/')
// console.log(res)


//Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки.
// let str = '1-2-3-4-5'
// let res = str.replaceAll('-', '.')


// console.log(res)

//Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.

// let str = '1-2-3-4-5'
// let arr = str.split('-')
// console.log(arr)

//Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
// let str = '12345'
// let arr = str.split('')
// console.log(arr)


// let arr = [1, 2, 3, 4, 5];

// let str = arr.join('-')
// console.log(str)
//С помощью метода join слейте его в строку '1-2-3-4-5'.

// let arr = [1, 2, 3]
// arr.unshift(4, 5, 6)
// console.log(arr)




// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.slice(3)
// console.log(newArr)

//массив.splice(откуда удаляем, сколько удаляем, [вставить], [вставить]...);____________________________________
// let arr = [1, 2, 3, 4, 5]
// //С помощью метода splice преобразуйте массив в следующий:
// arr.splice(3, 0, 'a', 'b', 'c')
// console.log(arr)
//[1, 4, 5]

//[1, 2, 3, 'a', 'b', 'c', 4, 5]

// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 0, 'a', 'b')
// arr.splice(6, 0, 'c')
// arr.splice(8, 0, 'e')
// console.log(arr)



//[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

// let arr = [1, 2, 3, 4, 5]

// console.log(arr.includes(3))
// console.log(arr.indexOf(2))

// let obj = {a: 1, b: 2, c: 3};
// console.log(Object.keys(obj))

//_______





//Код должен найти сумму цифр числа:

// let num = 12345;
// let arr = String(num).split('')

// let sum = 0;
// for (let digit of arr) {
// 	sum += +digit;
// }

// console.log(sum);


//Код должен найти сумму цифр числа:

// let num = 12345;
// let arr = String(num).split('');

// let prod = 1;
// for (let digit of arr) {
// 	prod *= +digit;
// }

// console.log(prod);




// function each(arr, callback) {
	
// 	for(let elem of arr){
// 	callback(elem)
// 	}
// }
// each([1, 2, 3], function(elem){
// 	console.log( elem * 2)
// })



// function map(arr, callback) {
//     let result = []
//     for (let elem of arr) {
//         result.push(callback(elem))
//     }
//     return result
// }

// let result = map([1, 2, 3], function(elem) {
//     return elem * 2
// })
// console.log(result) // [2, 4, 6]

//                        №2
//Дан массив со строками. С помощью созданной нами функции 
// each переверните символы каждой строки в обратном порядке.

// function each(arr, callback) {
//     for(let elem of arr){
//         callback(elem)
//     }
// }
// each(['abc', 'def'], function(elem){
//     console.log(elem.split('').reverse().join('') )
// })


//Дан массив со строками. С помощью созданной нами функции 
// each сделайте заглавным первый символ каждой строки.

// function func(arr, callback) {
//     for(let elem of arr){
//         callback(elem)
//     }               
// }
// func(['abc', 'def'], function(elem){
//     console.log(elem[0].toUpperCase() + elem.slice(1) )
//     })

//С помощью следующей функции возведите все элементы массива в куб:

// function each(arr, callback) {
//     for(let elem of arr){
//         callback(elem)
//     }               
// }
// each([1, 2, 3], function(elem){
//     console.log(cube(elem))
// })

// function cube(num) {
// 	return num ** 3;
// }    

// function filter(arr, callback) {
// 	let res = [];

// 	for (let elem of arr) {
// 		if ( callback(elem) === true ) {
// 			res.push(elem);
// 		}
// 	}
	
// 	return res;
// }
// let result = filter([1, 2, 3, 4, 5], elem => elem > 0)
// console.log(result)


// function test(){
// 	let num = 10
// 	return function(){
// 		if (num >= 0) {
// 			console.log(num)
// 			num--
// 		} else {
// 			console.log('отсчет окончен')
// 		}
// 	}
// }

// let func1 = test()
// func1()
// func1()
// func1()
// func1()
// func1()
// func1()
// func1()
// func1()
// func1()
// func1()
// func1()
// func1()

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];

// let [name, surname, department, position, salary] = ['John', 'Smit', 'development', 'programmer', 2000];

// console.log(name)
// console.log(surname)

// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000];
// }

// let arr = func();

// let [name, surname, department, position, salary] = func();

// console.log(name, surname, department, position, salary)


// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [, , department, position] = arr;
// console.log(department, position)

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, ...info] = arr;
// console.log(name, surname)
// console.log(info)


// let arr = ['John', 'Smit', 'development'];

// // let name       = arr[0];
// // let surname    = arr[1];
// // let department = arr[2];
// let [name, surname, department, position = 'trainee'] = arr;	

// console.log(name, surname, department, position)
// console.log(position)

// let arr = []
// function funcDay() {
// 	return (new Date).getDate();
// }
// function funcMonth() {
// 	return (new Date).getMonth() + 1;
// }	
// function funcYear() {
// 	return (new Date).getFullYear();
// }
// let [year = funcYear(), month = funcMonth(), day = funcDay()] = arr;
// console.log(year, month, day)

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color, width, height} = options;
// console.log(color, width, height)

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color:c, width:w, height:h} = options;
// console.log(c, w, h)


// let options = {
// 	width:  400,
// 	height: 500,
// };
// let {color: c = 'black', width:w, height:h} = options;
// console.log(c, w, h)

// function func([name, surname, department, position, salary]) {
// 	console.log(name, surname, department, position, salary)
// 	// let name       = employee[0];
// 	// let surname    = employee[1];
// 	// let department = employee[2];
// 	// let position   = employee[3];
// 	// let salary     = employee[4];
// }

// func( ['John', 'Smit', 'development', 'programmer', 2000] );

// function func([name, surname, info]) {	
// console.log(name)
// console.log(surname)
// console.log(info)
// 	// let name     = employee[0];
// 	// let surname  = employee[1];
// 	// let info     = employee[2];
// }

// func( ['John', 'Smit', 'development', 'programmer', 2000] );

// function func([name, surname, department, position = 'junior']) {
// 	console.log(name)
// 	console.log(surname)
// 	console.log(department)
// 	console.log(position)	
// }

// func( ['John', 'Smit', 'development'] );

// function func(department, [name, surname], [year, month, day]) {
// 	console.log(department)
// 	console.log(name)
// 	console.log(surname)
// 	console.log(year)
// 	console.log(month)
// 	console.log(day)
	
// }

// func( 'development', ['John', 'Smit'], [2018, 12, 31] );

// function func({color, width, height}) {

// 	console.log(color)
// 	console.log(width)
// 	console.log(height)
// }

// func( {color: 'red', width: 400, height: 500} );

// function func({color = 'black', width, height}) {
// 	console.log(color)
// 	console.log(width)
// 	console.log(height)
// }

// func( { width: 400, height: 500} );

function func({color = 'black', width, height}) {
    console.log(color)      // ← проверьте это
    console.log(width)
    console.log(height)
}

func({color: 'red', width: 400, height: 500})