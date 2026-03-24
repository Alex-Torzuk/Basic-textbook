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

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

for(let key in obj){
	if(obj[key] % 2 === 1){
		console.log(obj[key])
	}
}