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



let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {}
for(let i = 1; i <= 5; i++){
	obj[arr[i-1]] = i
}
console.log(obj)