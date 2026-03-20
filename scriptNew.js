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



// let num = 1;
// let res = num >= 0 ? '1':'2'

// console.log(res);

let user = confirm('Есть ли вам уже 18 лет')
if(user){
	alert('сообщение с текстом для взрослых')
}else{
	alert('доступ пользователю запрещен')
}