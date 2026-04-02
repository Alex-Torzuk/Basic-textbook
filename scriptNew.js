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




let arr = []
let a = 1
for(let i = 0; i < 2; i++){
	arr[i] = []
	for(let j = 0; j < 2; j++){
		arr[i][j] = []
		for(let k = 0; k < 2; k++){
			arr[i][j].push(a++)
		}
	}
}
console.log(arr)

//[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]