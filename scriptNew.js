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

let arr = [1, 7, 2, 8, 4]
for(let i = 0; i <= arr.length; i++){
	if(arr[i] === i){
		console.log(arr[i])
	}
}

//Дан массив с числами. С помощью цикла выведите на экран все элементы, 
// значение которых совпадает с их порядковым номером в массиве.