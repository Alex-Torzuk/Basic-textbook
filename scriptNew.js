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



let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

let sum = 0

for(let i = 0; i < arr.length; i++){
	for(let j = 0; j < arr[i].length; j++){
		for(let k = 0; k < arr[i][j].length; k++){
			sum+= arr[i][j][k]
		}
	}
}
console.log(sum)