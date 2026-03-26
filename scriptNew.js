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


let arr = [1, 2, 3, 4, 5, 6, 7, 8]
for(let i = 0; i <= arr.length-1; i++){
	arr[i]+= 10
}
console.log(arr)