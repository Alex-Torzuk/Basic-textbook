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

let num = 12345;
let arr = String(num).split('');

let prod = 1;
for (let digit of arr) {
	prod *= +digit;
}

console.log(prod);