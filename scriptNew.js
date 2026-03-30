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



let arr = [
	[1, 2, 3, 
		[4, 5, 
			[6, 7]
		]
		], 
		[8, [
			9, 10]
		]
];


console.log(arr[0][0] + arr[0][1]+ arr[0][2]+arr[0][3][0]+arr[0][3][1]+arr[0][3][2][0]+arr[0][3][2][1]+arr[1][0]+arr[1][1][0]+arr[1][1][1])