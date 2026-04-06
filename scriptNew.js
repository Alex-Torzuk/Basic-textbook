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

let arr = [4, 2, 5, 19, 13, 0, 10]
let sum = 0
for(let elem of arr){
	sum+= elem
}
console.log(Math.sqrt(sum))