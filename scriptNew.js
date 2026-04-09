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
console.log(Math.pow(2, 10))
console.log(Math.sqrt(245))





//Дана строка 'i study javascript'. Вырежьте из нее слово 'study' и слово 'javascript' 
// тремя разными способами (через substr, substring, slice).

let str = 'i study javascript'
let a = str.slice(2, 7)
let b = str.slice(8, 18)
console.log(a)
console.log(b)

let c = str.substr(2, 5)
let d = str.substr(8, 10)
console.log(c)
console.log(d)

let e = str.substring(2, 7)
let f = str.substring(8, 18)
console.log(e)
console.log(f)