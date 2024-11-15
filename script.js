//Выделение чисел в JavaScript

//parseInt - отделяет число от букв и выводит число

// let a = '12px'
// console.log(parseInt(a))


// parseFloat - отделяет дробное число от букв 


// let num = parseFloat('12.5px');
// alert(num); // выведет 12.5



//инкремент ++,

//декремент --


//Префиксный и постфиксный тип

//В случае alert(a++) переменная сначала выведется, 
//а потом увеличится на единицу, а в случае alert(++a) 
//переменная сначала увеличится на единицу, а потом выведется.

// let num1 = 3;
// let num2 = ++num1;
// console.log(num1);
// console.log(num2);

// let num1 = 3;
// let num2 = num1--;
// console.log(num1);
// console.log(num2);

// let num1 = 3;
// num1++;
// let num2 = num1--;
// console.log(num1++);
// console.log(--num2);




//Метод toFixed


// let a = 0.1 * 0.2
// console.log(+a.toFixed(2));



// alert('Ваше имя: ' + prompt('Ваше имя?'));

// let num1 = prompt('Введите первое число');
// let num2 = prompt('Введите второе число');

// alert(Number(num1) + Number(num2)); // сложит числа как строки

// document.write('text');
// document.write('<br>');
// document.write('text');

// let a = 24 * 60 * 60;
// console.log(a);

// let num = 123;
// num = String(num);
// // let last = num.length - 1
// // console.log(num[last])

// console.log(num[num.length - 1])


// let num = 123;
// let str = String(num);
// console.log(str[str.length-1]);



// Массивы в JavaScript

// let arr = ['a', 'b', 'c', 'd'];
// console.log(`${arr[0]}+${arr[1]}+${arr[2]}+${arr[3]}`)

// let arr = [1, 2, 3, 4, 5, 6, 1];
// console.log(arr.length-1) // выведет 6

// let arr1 = ['a', 'b', 'c'];
// console.log(arr1[arr1.length-1]) // выведет 'c'


// let arr = ['a', 'b', 'c']
// arr[0] = 1
// arr[1] = 2
// arr[2] = 3
// arr[0] += 3
// arr[1] += 3
// arr[2] += 3

// console.log(arr)


// let arr = [1, 2, 3, 4];
// arr[0]++
// ++arr[1]
// arr[2]++
// ++arr[3]
// console.log(arr)


// let arr = [];

// arr.push(1, 2, 3)
// console.log(arr)
// arr.push(4, 5)
// console.log(arr)

// let arr = ['a', 'b', 'c'];
// let key = 2;
// console.log(arr[key])

// let arr = [1, 2, 3, 4, 5];
// let key1 = 1;
// let key2 = 2;
// console.log(arr[key1] + arr[key2])


// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.length-1)

// delete arr[0]
// console.log(arr.length-1)

// let arr = [1, 2, 3, 4, 5, 12];
// console.log(arr[arr.length-1]);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length-1);


//Объекты в JavaScript

// let obj = {1: 'Пн', 2: 'Вт', 3: 'Ср', 4: 'Чт', 5: 'Пт', 6: 'Сб', 7: 'Вс' }
// console.log(obj)

// let user = {name: 'Alexander', patronymic: 'Sergeevich', surname: 'Torzuk'}

// console.log(user['name'], user['patronymic'], user['surname'])

// let obj = {1: 'Пн', 2: 'Вт', 3: 'Ср', 4: 'Чт', 5: 'Пт', 6: 'Сб', 7: 'Вс' }
// console.log(obj[2])

// let date = {year: 2024, month: 'November', day: 6}
// let year = date.year
// let month = date.month
// let day = date.day
// console.log(`${year}-${month}-${day}`)

// let obj = {
// 	'1a': 1,
// 	b2: 2,
// 	'c-c': 3,
// 	'd 4': 4,
// 	e5: 5
// };

// console.log(obj['1a']);
// console.log(obj.b2);
// console.log(obj['c-c']);
// console.log(obj['d 4']);
// console.log(obj.e5);

// let obj = {x: 1, y: 2, z: 3};

// obj['x'] = obj['x'] * 2

// obj['y'] = obj['y'] * 2

// obj['z'] = obj['z'] * 2

// console.log(obj)

// let obj = {}
// obj.a = 1
// obj.b = 2
// obj.c = 3

// console.log(obj)



//Массив ключей объекта в JavaScript


// let obj = {x: 1, y: 2, z: 3};

// let keys = Object.keys(obj)
// console.log(keys)

// let obj = {x: 1, y: 2, z: 3};

// let keys = Object.keys(obj).length-1
// console.log(keys)

// let obj = {x: 1, y: 2, z: 3};

// let key = 'y'

// console.log(obj[key])

// let key = 'hello';
// let obj = {
// 	[key]: 1,
// 	b: 2,
// 	c: 3
// };

// console.log(obj)



// let obj = {
// 	[key + '1']: 1,
// 	[key + '2']: 2,
// 	[key + '3']: 3
// };

// console.log(obj)
// let key1 = 'x';
// let key2 = 'y';
// let key3 = 'z';
// let obj = {
// 	[key1]: 1,
// 	[key2]: 2,
// 	[key3]: 3
// };


// console.log(obj)

//Оператор in в JavaScript

// let obj = {x: 1, y: 2, z: 3};
// console.log('y' in obj)

//Оператор delete в JavaScript

// let obj = {x: 1, y: 2, z: 3};
// delete obj.x
// console.log(obj)

//Типизация объектов в JavaScript

// console.log( typeof {x: 1, y: 2, z: 3} );

// console.log( typeof {} );
// let obj = {x: 1, y: 2, z: 3};
// console.log( typeof obj );

// let obj = {x: 1, y: 2, z: 3};
// console.log( typeof obj['x'] );

// console.log( typeof [1, 2, 3] );
// let arr = [1, 2, 3];
// console.log( typeof arr );
// let arr = ['1', '2', '3'];
// console.log( typeof arr[0] );

// console.log( Array.isArray([]) ); // выведет true
// console.log( Array.isArray({}) );// выведет false


//=============
//++++++++==++
//В JavaScript семь примитивных типов данных: 
//string, 
//number, 
//boolean, 
//null, 
//undefined, 
//symbol, 
//bigint. Запомните их количество и названия - это часто спрашивают 
//на собеседованиях.
//+++++++++++++++
//_______________
//)))))))))))))))


// const arr = ['a', 'b', 'c'];
// arr[0] = 'u'
// arr[1] = 'v'
// arr[0] = 'v'
// console.log(arr);

// const a = 1;
// const b = 2;
// const c = a + b;

// console.log(c);

// let obj = {x: 1, y: 2, z: 3};
// console.log(obj['x']);

// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';

// console.log(obj[key]);
// let obj = {x: 1, y: 2, z: 3};
// let sum = obj['x'] + obj['y'] + obj['z'];

// console.log(sum);

// let obj = {x: 1, y: 2, z: 3};

// console.log(Object.keys(obj).length);


// let test = 10
// if (test > 0){
//     console.log(true)
// }else{
//     console.log(false)
// }

// let test1 = 3;
// let test2 = '3';
		
// if (test1 !== test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let test1 = 3;
// let test2 = 2;
		
// if (test1 !== test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let test = -5;

// if (test) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let day = '11'
// if(day !== Number(day)){
//     console.log('Не число')
// }
// else if(day <= 10){
//     console.log('One')
// }else if(day<=20){
//     console.log('two')
// }else if(day <= 20){
//     console.log('three')
// }else{
//     console.log('не попадает!!')
// }


// let num = 55

// if(num >= 10 && num <= 99){
//     num = String(num)
//     let res = Number(num[0]) + Number(num[1])
//     console.log(res)
//     if(res <= 9){
//         console.log('Cумма цифр однозначна')
//     }else{
//         console.log('Cумма цифр двухзначна')
//     }
// }

// let lang = 'ru';

// switch(lang){
// case 'ru':
//     console.log('рус')
//     break;
// case 'en':
//     console.log('анг')
//     break
// }


// let num = 1; // пусть здесь число 1

// switch (num) {
// 	case 1:
// 		console.log(1); // сработает это
// 	case 2:
// 		console.log(2); // сработает и это
// 	case 3:
// 		console.log(3); // сработает и это
// }


//Тернарный оператор в JavaScript


// let num = 6;
// let res = num <= 5 ? 'Yes': 'No';
// console.log(res)

//Операторы сравнения можно использовать вне конструкций if.

// let a = 2 * (3 - 1);
// let b = 6 - 2;
// let a = 2 ** 4;
// let b = 4 ** 2;
// console.log(a != b)

// let question = confirm(('Are you have eighteen years old ?'))

// if(question){
//     alert('Ты взрослый')
// }else{
//     alert('Ты еще не взрослый')
// }

// let arr = [1, 2, 3, 4, 5]
// let res
// console.log(arr.length-1)
// if(arr.length >= 3){
//     res = arr[0] + arr[1] + arr[2] + arr[3] + arr[4]
// }
// console.log(res)

// let str = '12345';

// if (str[0] == 1) {
// 	console.log('!');
// }

// let str = 'abcx'
// let x = str[str.length-1]
// if(x == 'x'){
//     console.log('Yes')
// }

// let str = 'abcd'

// if(str[0] =='a' && str[1] == 'b'){
//     console.log('У тебя все получиться !!!!!')
// }

// let num = 10
// if(String(num)[1] == 0){
//     console.log('Yes')
// }else{
//     console.log('No')
// }

// let num = 10
// if(String(num)[1] == 0 || String(num)[1] == 2 || String(num)[1] == 4){
//     console.log('Четное')
// }

// let a = 10;
// let b = 3;
// let rest = a % b;

// if (rest === 0) {
// 	console.log('делится нацело');
// } else {
// 	console.log('делится с остатком ' + rest);
// }

// let num = 10
// if(num % 3 === 0){
//     console.log('Четное')
// }else{
//     console.log('Не четное')
// }

// let num1 = '1';
// let num2 = '2';

// if (Number(num1) + Number(num2) === 3) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 123;
// console.log(String(num)[0])

// if (String(num)[0] == 1) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 12;

// console.log(String(num).length)

// if (String(num).length === 2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам

// let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
// let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);


// if (sum1 == sum2) {
// 	console.log('суммы равны');
// } else {
// 	console.log('суммы не равны');
// }

// let month = 10
// if(month == 12 || month <= 2){
// console.log('Winter')
// }else if(month >= 3 && month <= 5){
//     console.log('Spring')
// }else if (month >= 6 && month <= 8){
//     console.log('Summer')
// }else if(month >= 9 && month <= 11){
//     console.log('Fall')
// }

// let str = 'abcde'
// if (str[0] === 'a'){
//     console.log('Yes')
// }else{
//     console.log('No')
// }

// let num = 12345
// console.log(String(num)[0] == '1')
// if (String(num)[0] == '1' || String(num)[1] == '2' || String(num)[3] == '3'){
//     console.log('Yes')
// }else{
//     console.log('No')
// }

// let num = 123
// console.log(String(num)[0])
// let str = String(num)[0] + String(num)[1] + String(num)[2]
// let sum = Number(str[0]) + Number(str[1]) + Number(str[2])

// console.log(sum)

// let num = 123033
// let str = String(num)
// let newNum1 = Number(str[0]) + Number(str[1]) + Number(str[2])
// let newNum2 = Number(str[3]) + Number(str[4]) + Number(str[5])

// if (newNum1 === newNum2){
//     console.log('Yes')
// }else{
//     console.log('No')
// }

//for loop in JavaScript

// for(let i = 100; i >= 0; i--){
    
//         console.log(i)
    
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];

// for(let elem of arr){
//     console.log(elem)
// }

// let obj = {x: 1, y: 2, x: 3};

// for(let key in obj){
//     console.log(`${key} :  ${obj[key]}`)
// }

//Цикл while в JavaScript

// let num = 11
// while(num <= 33){
//     console.log(num)
//     num++
// }

// let num = 2
// while(num <= 1000){
//     console.log(num)
//     num = num * 3
    
// }
// let arr = [1, 2, 3, 4, 5];
// for (let i = 1; i <= arr.length-1; i++) {
// 	console.log(arr[i]);
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for(let i = 1; i <= arr.length-2; i++){
//     console.log(arr[i])
// }

// for(let i = arr.length -1; i > 0; i--){
//     console.log(arr[i])
// }

// for (let i = arr.length - 1; i >= 0; i--) {
// 	console.log(arr[i]);
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
		
// for (let i = 0; i <= arr.length-1; i++) {
// 	console.log(arr[i]);
// }

// let arr = [2, 5, 9, 15, 1, 4];

// for(let elem of arr){
  
//     if(elem > 3 && elem < 10){
//         console.log(elem)
//     }
// }

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// for(let elem in obj){
//     if(obj[elem] % 2 === 1){
//         console.log(obj[elem])
//     }
// }

// let res = 0;

// for (let i = 1; i <= 100; i++) {
// 	res = res + i;
// }

// console.log(res); // искомая сумма

//Найдите сумму четных чисел от 2 до 100.

// let res = 1
// for(let i = 1; i <= 99; i++){
//     if(i % 2 === 1){
//         res+= i
//     }
   
// }
// console.log(res)

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0
// // for(let elem of arr){
// //     res += elem
// // }

// for(let elem of arr){
//     if(elem % 2 === 0){
//         res+= elem
//     }
// }
// console.log(res)

// let str = ''
// for(let i = 1; i <= 5; i++){
//     str+= '-'
// }
// console.log(str)

// let num = ''

// // for(let i = 1; i <= 9; i++){
// //     num += i
// // }

// for(let i = 9; i >= 1; i--){
//     num+=i
// }
// console.log(num)

// let str1 = ''
// for(let i = 1; i <= 9; i++){
//     str1 += '-' + i 
// }
// console.log(str1)

// for(let i = 10; i <= 1000; i++){
//     let str = String(i)
//     if(Number(str[0]) + Number(str[1]) === 5){
//         console.log(str)
//     }
// }

// let arr = [1, 2, 3, 4, 5, -1, 8, 9]

// // for(let elem of arr){
// //     if (elem === 0){
// //         console.log('Yes')
// //         break
// //     }
// // }
// // let sum = 0
// // for (let elem of arr){
// //     sum+= elem
// //     if(elem === -1){
        
// // break


// //     }
// //     console.log(sum)
// // }
// // for(let elem of arr){
// //     if (elem === 3){
// //         console.log('Yes')
// //         break
// //     }
// // }

// for(let i = 0; i <= arr.length; i++){
//     if(arr[i] === 3){
//         console.log(i)
//         break
//     }
// }

// let sum = 0

// for(let i = 1; i < 100; i++){
//     sum += i
//     if(sum >= 100){
//         break
//     }
    
//     console.log(sum)
   
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let elem of arr) {
// 	let result;
	
// 	if (elem % 2 === 0) {
// 		result = elem * elem;
// 	} else if (elem % 3 === 0) {
// 		result = elem * elem * elem;
// 	}
	
// 	console.log(result); // вынесли вывод за условие
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let elem of arr) {
// 	let result;
	
// 	if (elem % 2 == 0) {
// 		result = elem * elem;
// 	} else if (elem % 3 == 0) {
// 		result = elem * elem * elem;
// 	} else {
// 		continue; // перейдем на новую итерацию цикла
	
// 	}
// 	console.log(result)}

// let arr = [1, 2, 3, 4, 5, 6]
// for (let elem of arr){
//     let res
//     if(elem % 2 === 0){
//        res = elem * elem
//     }
//     else{ 
//         continue
//     }
//     console.log(res)
// }

// for (let i = 1; i <= 9; i++){
//     for(let k = 1; k <= 3; k++){
//         document.write(i)
//     }
// }

// let result = '';

// for (let i = 1; i <= 3; i++) {  // Внешний цикл для первой цифры
//     for (let j = 1; j <= 3; j++) {  // Внутренний цикл для второй цифры
//         result += `${i}${j} `;  // Форматируем и добавляем к результату
//     }
// }

// console.log(result);

// for(let i = 1; i <= 3; i++){
//     for(k = 3; k <= 3; k++){
//         console.log(`${i}${k}`)
//     }
// }

// let arr = []
// let str = ''
// // for(let i = 1; i <= 10; i++){
// //     arr.push(i)
// // }

// for(let i = 1; i <= 10; i++){
//     str += 'x' 
//     arr.push(str)

// }
// console.log(str)

// let arr = [1, 2, 3, 4, 5]
// let newArr = []
// for(let num of arr){
//     if(num % 2 === 0){
//         newArr.push(num)
//     }
// }
// console.log(newArr)