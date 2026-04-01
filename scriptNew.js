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



let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = []
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);