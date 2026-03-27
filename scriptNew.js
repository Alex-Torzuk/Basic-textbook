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
let newObj = {}
for(let key in obj){
	newObj[obj[key]] = key
}
console.log(newObj)


//Переберите этот объект циклом и создайте новый объект так, 
// чтобы его ключами стали элементы старого объекта, а значениями - ключи старого объекта.