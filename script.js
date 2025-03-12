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

// let arr = [1, 2, 3, 4, 5, 6, 7]
// for(let i = 0; i <= arr.length -1; i++){
//     arr[i] += 10
// }
// console.log(arr)

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {}

// for(let i = 0; i <= 6; i++){
//     let key =  arr1[i] 
//     let value = arr2[i]
// obj[key] = value
// }
// console.log(obj)

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let newObj = {}
// for(let key in obj){
   
//     if(obj[key] % 2 === 0){
// newObj[key] = obj[key]
//     }
// }
// console.log(newObj)

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

// let newObj = {}

// for(let key in obj){
//     newObj[obj[key]] = key
// }
// console.log(newObj)

// let obj = {x: 1, y: 2, z: 3};

// for(let key in obj){
//     obj[key] = obj[key] +=1
// }
// console.log(obj)

// let arr = [1, 2, 3, 4, 5, 6, 6, 7]
// for(let elem of arr){
//     if(elem == 6){
//         console.log('+++')
//         break
//     }
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let flag = false

// for(let elem of arr){
//     if(elem == 'c'){
//         flag = true
//     }
// }
// if(flag === true) {
//     console.log('+++')
// }else{
//     console.log('---')
// }

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];

// let count = 0

// for(let elem of arr){
//     if(elem == 3){
//         count++
//     }
// }
// console.log(count)

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let num3 = 0
// let num2 = 0
// for(let elem of arr){
//     if(elem == 2){
//         num2++
//     }else if(elem == 3){
//         num3++
//     }
// }
// console.log(num2)
// console.log(num3)

// let str = 'abccdfj'
// let charCount = {}
// for(let char of str){
//     charCount[char] = (charCount[char] || 0) + 1 
// }
// console.log(charCount)

// let arr = [1, 2, 3, 4, 5];
// for(let i = 1; i <= arr.length; i++){
//     console.log(arr[i + 3])
// }

// let arr = [10, 20, 30, 40, 21, 32, 51];

// let sum = 0

// for(let i = 0; i <= arr.length-1; i ++){
//     let firstNum = arr[i].toString()[0]
// if(firstNum === '1' || firstNum === '2'){
// sum+= arr[i]
// }
// }
// console.log(sum)

// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;

// for (let key in obj) {
//     let value = obj[key]
//     let firstElem = value.toString()[0]
// 	if (firstElem === '1' || firstElem === '2' ) {
// 		sum += value;
// 	}
// }

// console.log(sum);

// let res = 0;

// for (let i = 1; i <= 10; i++) {
// 	res += i;
// }

// console.log(res);

// let res = 1;

// for (let i = 1; i <= 10; i++) {
// 	res *= i;
// }

// console.log(res);


// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let elem of arr) {
// 	sum += +elem;
// }

// console.log(sum); // должно вывести 15

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;

// for (let i = 0; i <= arr.length-1; i++) {
// 	sum += +arr[i];
// }

// console.log(sum); // почему-то выводит NaN

// let arr = [1, 2, 3, 4, 5];
// let sum 
// for (let elem of arr) {
// 	elem = elem ** 2;
//     console.log(elem)
// }

// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;

// for (let elem in obj) {
// 	sum += obj[elem];
// }

// console.log(sum);


// let arr = [1, 2, 3, 4, 5];
// let res = '';
// let flag = false

// for (let elem of arr) {
// 	if (elem == 3) {
//         flag = true
//         break
//     }	
// }
// if(flag === true){
//     console.log('+++');
// }else{
//     console.log('---');
// }


// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	if (elem % 2 === 0) {
// 		console.log(elem);
// 	}
// }

// for(let i = 1; i <= 100; i++){
//     console.log(i)
// }

// for(let i = 100; i >= 1; i--){
//     console.log(i)
// }

// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// let arr = []
// for(let i = 1; i <= 10; i++){
//     arr.push('x')
// }
// console.log(arr)

// let arr = []
// for(let i = 1; i <= 10; i++){
//     arr.push(i)
// }
// console.log(arr)

// let arr = [1, 2, 3, 4, 5, 15, 18]

// for(let elem of arr){
//     if (elem > 0 && elem < 10){
//         console.log(elem)
//     }
// }

// let arr = [1, 2, 3, 4, 5, 15, 18]
// let res = ''
// let flag = false
// for(let elem of arr){
//     if(elem === 5){
//         flag = true
//         break
//     }
// }
// if(flag === true){
//     console.log('+++')
// }else{
//     console.log('---')
// }

// let arr = [1, 2, 3, 4, 5, 15, 18]
// let sum = 0
// for(let elem of arr){
//     sum+=elem 
// }
// console.log(sum)

// let arr = [-2, -1, 0, 1, 2, 3, 4, 5]
// let sum = 0
// for(let elem of arr){
//     if(elem >= 0){
//         sum+=elem
//     }
// }
// console.log(sum)

// let arr = []
// for(let i = 10; i >= 1; i--){
//     arr.push(i)
// }
// console.log(arr)

// let arr = [10, 20, 30, 50, 235, 3000];
// for(let elem of arr){
//     let firstElem = elem.toString()[0]
//     console.log(firstElem)
//     if(firstElem === '1' || firstElem === '2' || firstElem === '3'){
//         console.log(firstElem)
//     }
// }

// let arr = [10, 20, 30, 50, 235, 3000];


// //    console.log(arr.reverse()) 
//     for(let i = arr.length; i > 0; i--){
//         console.log(arr[i])
//     }

    //№16

    // let arr = [0, 1, 10, 2, 3, 5, 5, 8, 9]

    // for(let i = 0; i <= arr.length-1; i++){
        
    //     if(i === arr[i]){
    //         console.log(i)
    //     }
    // }


    //№17
    // let arr = [1, 2, 3, 4, 5]
    // for(let elem of arr){
    
    //     document.write(`${elem}  <br>`)
    // }

    // let arr = [1, 2, 3, 4, 5]

    // for(let elem of arr){
    //     document.write(`${elem} <a>`)
    // }

    // let weeks = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

    // for(let i = 0; i <= weeks.length-3; i++){
    //     document.write(`${weeks[i]} <br>`  )
           
        
    // }

    // for(let day of weeks){        
    //     if(day === 'Сб' || day === 'Вс'){
    //         document.write(`<b> ${day} <br> <b>` )
    //     }    
    // }

    // let weeks = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    // let day = new Date().getDay() 
    // day = day === 0 ? 6 : day - 1;
    // // for(let i = 0; i <= weeks.length-4; i++){
    // //     document.write(`${weeks[i]} <br>`)
    // // }
    // // for(let elem of weeks){
    // //     if(day === elem){
    // //         day = `<b> ${day}`
    // //         document.write(`${day} <br>`)
            
    // //     }else{
    // //         document.write(`${elem} <br>`)
    // //     }
    // // }
    // for (let i = 0; i < weeks.length; i++) {
    //     if (i === day) {
    //         console.log(`%c${weeks[i]}`, 'font-style: italic;'); // Выводим текущий день курсивом
    //     } else {
    //         console.log(weeks[i]);
    //     }
    // }

    // let day = 4
    // for(let i = 0; i <= weeks.length-1; i++){
    //     if(i === day){
    //         console.log(`%c${weeks[i]}`, 'font-style: italic;')
    //     }else{
    //         console.log(`${weeks[i]}`)
    //     }
        
    // }


   // Дан следующий объект с работниками и их зарплатами:

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };

// for(let key in obj){
//     if (obj[key] <= 400){
       
//        console.log(obj[key] * 2)
//     }
       
    
   
// }

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// let obj = {}

// for(let i = 0; i <= 4; i++){
//     let key = arr1[i]
//     let value = arr2[i]
//     obj[key] = value
// }
// console.log(obj)

// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// let sum = 0

// for(let key in obj){
//     sum += +key
    
//     sum / obj[key]
// }
// console.log(sum)

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// let arrakey = []
// let arrValue = []
// for(let key in obj){
//     arrakey.push(key)
//     arrValue.push(obj[key])
// }
// console.log(arrakey)
// console.log(arrValue)

// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// let arr = []
// for(let key in obj){
//     let value = obj[key]
//     let firstNum = value.toString()[0]
//         if(firstNum === '1' || firstNum === '2'){
//             arr.push(value)
//         }
// }
// console.log(arr)

// let arr = ['a', 'b', 'c', 'd', 'e'];

// let obj = {}

// for(let i = 0; i <= arr.length-1; i++){
//     let key = i + 1
//     let value = arr[i]

//     obj[key] = value

// }
// console.log(obj)


// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {}
// for(let i = 0; i <= arr.length-1; i++){
//     let key = arr[i]
//     let value = i + 1
//     obj[key] = value  
// }
// console.log(obj)

//Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.
// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];

// console.log(arr[3][2])
// console.log(arr[1][1])
// console.log(arr[2][0])
// console.log(arr[0][0])


// let arr = [[1, 2], [3, 4], [5, 6]];
// let a = arr[0][0] + arr[0][1]
// let b = arr[1][0] + arr[1][1]
// let c = arr[2][0] + arr[2][1]
// console.log(a + b + c)


// let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];

// let a = arr[0][0][0] + arr[0][0][1] + arr[0][1][0] + arr[0][1][1]
// let b = arr[1][0][0] + arr[1][0][1] + arr[1][1][0] + arr[1][1][1]
// console.log(a + b)

// let arr = [
//     [1, 2, 3, 
//         [4, 5, 
//             [6, 7]
//         ]
//     ], 
//     [8, 
//         [9, 10]
//     ]
// ];

// let a = arr[0][0] + arr[0][1] + arr[0][2] + 
// +arr[0][3][0] + arr[0][3][1] + 
// +arr[0][3][2][0] + arr[0][3][2][1] +
// + arr[1][0] + arr[1][1][0] + arr[1][1][1]
// console.log(a)

// let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

// for (let subArr of arr) {
// 	for (let elem of subArr) {
// 		console.log(elem);
// 	}
// }

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0
// for(let subArr of arr){
//     for(let elem of subArr){
//         sum+= elem
//     }
// }
// console.log(sum)


// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0
// for(let perentArr of arr){
//     for(let subArr of perentArr){
//         for(let elem of subArr){
//             sum+= elem
//         }
//     }
// }
// console.log(sum)


// let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
// 		console.log(arr[i][j]);
// 	}
// }

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0
// for(let i = 0; i <= arr.length-1; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         sum+= arr[i][j]
//     }
// }
// console.log(sum)

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum = 0
// for(let i = 0; i <= arr.length-1; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         for(let k = 0; k < arr[i][j].length; k++){
//             sum+= arr[i][j][k]
//         }
//     }
// }
// console.log(sum)

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []; // создаем подмассив
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(j + 1); // заполняем подмассив числами
// 	}
// }

// console.log(arr);

// let arr = []
// for(let i = 0; i < 3; i++){
//     arr[i] = []
//     for(let j = 0; j < 5; j++){
//         arr[i].push(j + 1)
//     }
// }
// console.log(arr)


// let arr = []
// for(let i = 0; i < 3; i++){
//     arr[i] = []
//     for(let j = 0; j < 4; j++){
//         arr[i].push('x')
//     }
// }
// console.log(arr)


// let arr = []
// for(let i = 0; i < 3; i++){
//     arr[i] = []
//     for(let j = 0; j < 2; j++){
//         arr[i][j] = []
//         for(let k = 0; k < 5; k++){
//             arr[i][j].push(k + 1)
//         }
//     }
// }
// console.log(arr)

// let arr = []
// let k = 1
// for(let i = 0; i < 4; i++){
//     arr[i] = []
//     for(let j = 0; j < 2; j++){
//         arr[i].push(k++)
//     }
// }
// console.log(arr)

// let arr = []
// let k = 2
// for(let i = 0; i < 4; i++){
//     arr[i] = []
//     for(let j = 0; j < 3; j++){
//         arr[i].push(k+=2) 
//     }
// }
// console.log(arr)

// let arr = []
// let calc = 1
// for(let i = 0; i < 2; i++){
//     arr[i]= []
//     for(let j = 0; j < 2; j++){
//         arr[i][j] = []
//         for(let k = 0; k < 2; k++){
//             arr[i][j].push(calc++)
//         }
//     }
// }
// console.log(arr)

// let arr = []
// let calc = 1
// for(let i = 0; i < 3; i++){
//     arr[i] = []
//     for(let j = 0; j < 3; j++){
//         arr[i].push(calc++)
//     }
// }
// console.log(arr)



// let obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
// let sum = 0
// let a = obj.key1.key1 + obj.key1.key2 + obj.key1.key3
// let b = obj.key2.key1 + obj.key2.key2 + obj.key2.key3
// let c = obj.key3.key1 + obj.key3.key2 + obj.key3.key3
// console.log(a + b + c)


// let obj = {
// 	1: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	2: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	3: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }

// console.log(obj[2][2])

// console.log(obj[3][1])


// let obj = {
// 	key1: {
// 		a: 1, b: 2, c: {
// 			d: 3,
// 			e: 4,
// 		}, f: 5,
// 	},
// 	key2: {
// 		g: 6, h: 7,
// 	},
// }

// let a = obj.key1.a + obj.key1.b + obj.key1.c.d +obj.key1.c.e +obj.key1.f
// let b = obj.key2.g + obj.key2.h
// console.log(a + b)


// let obj = {
// 	a: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	b: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	c: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }
// for (let key in obj) {
// 	let subObj = obj[key];
	
// 	for (let subKey in subObj) {
// 		console.log(subObj[subKey]);
// 	}
// }


// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// let sum = 0
// for(let key in obj){
//     let subObj = obj[key]
//     for(let subKey in subObj){
//         sum+= subObj[subKey]
//     }
// }
// console.log(sum)


// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// }
// let sum = 0
// for(let key in obj){
//     let underObj = obj[key]
//     for(let stillUnderObj in underObj){
//         let plusUnderKey = underObj[stillUnderObj]
//         for(let keyObj in plusUnderKey){
//             sum+= plusUnderKey[keyObj]
//         }
//     }
// }
// console.log(sum)


// let students = {
// 	'group1': ['name11', 'name12', 'name13'],
// 	'group2': ['name21', 'name22', 'name23'],
// 	'group3': ['name31', 'name32', 'name33'],
// };

// console.log(students.group3[0])


// let data = {
// 	1: [
// 		'data11',
// 		'data12',
// 		'data13',
// 	],
// 	2: [
// 		'data21',
// 		'data22',
// 		'data23',
// 	],
// 	3: [
// 		'data31',
// 		'data32',
// 		'data33',
// 	],
// 	4: [
// 		'data41',
// 		'data42',
// 		'data43',
// 	],
// };
// for(let key in data){
//     for(let elem of data[key]){
//         console.log(elem)
//     }
// }


// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 		3: 'data33',
// 	},
// ];
// for(let elem of data){
//     for(let key in elem){
//         console.log(elem[key])
//     }
// }


// let data = [
// 	{
// 		1: [
// 			'data111',
// 			'data112',
// 			'data113',
// 		],
// 		2: [
// 			'data121',
// 			'data122',
// 			'data123',
// 		],
// 	},
// 	{
// 		1: [
// 			'data211',
// 			'data212',
// 			'data213',
// 		],
// 		2: [
// 			'data221',
// 			'data222',
// 			'data223',
// 		],
// 	},
// 	{
// 		1: [
// 			'data411',
// 			'data412',
// 			'data413',
// 		],
// 		2: [
// 			'data421',
// 			'data422',
// 			'data423',
// 		],
// 	},
// ];
// for(let elem of data){
//     for(let key in elem){
//         for(let arr of elem[key]){
//             console.log(arr)
//         }
//     }
// }


// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];

// for(let user of employees){
//     console.log(user.name + ' ' + user.salary)
// }



// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
// let sum = 0

// for(let user of employees){
//     sum+=user.salary
// }
// console.log(sum)


// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		age: 31,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		age: 32,
// 	},
// ];
// let sum = 0

// for(let user of employees){
//     if(user.age >= 30){
//         sum+=user.salary
//     }
// }
// console.log(sum)


// let months = {
// 	'ru': [
// 		'январь',
// 		'февраль',
// 		'март',
// 		'апрель',
// 		'май',
// 		'июнь',
// 		'июль',
// 		'август',
// 		'сентябрь',
// 		'октябрь',
// 		'ноябрь',
// 		'декабрь',
// 	],
// 	'en': [
// 		'january',
// 		'february',
// 		'march',
// 		'april',
// 		'may',
// 		'june',
// 		'july',
// 		'august',
// 		'september',
// 		'october',
// 		'november',
// 		'december',
// 	],
// };

// let lang = 'ru'; // может быть или 'ru' или 'en'
// let month = 5;   // число от 0 до 11

// console.log(months[lang][month])

// let affairs = {
// 	'2018': {
// 		11: {
// 			29: ['дело111', 'дело112', 'дело113'],
// 			30: ['дело121', 'дело122', 'дело123'],
// 		},
// 		12: {
// 			30: ['дело211', 'дело212', 'дело213'],
// 			31: ['дело221', 'дело222', 'дело223'],
// 		},
// 	},
// 	'2019': {
// 		12: {
// 			29: ['дело311', 'дело312', 'дело313'],
// 			30: ['дело321', 'дело322', 'дело323'],
// 			31: ['дело331', 'дело332', 'дело333'],
// 		}
// 	},
// }

// let year = '2018'
// let month = 12
// let day = 31
// console.log(affairs[year][month][day])

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }

// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj[key1][key2]);


// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }

// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj.key2.key4);

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }

// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj.key2['key4']);

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }

// let key1 = 'key2';
// console.log(obj.key2['key4']);


// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// ];

// employees.push({name: 'name-4', salary: 600, age: 36, })

// console.log(employees)


// let affairs = {
// 	'2019-12-28': ['data11', 'data12', 'data13'],
// 	'2019-12-29': ['data21', 'data22', 'data23'],
// 	'2019-12-30': ['data31', 'data32', 'data33'],
// }

// affairs["2019-12-29"].push('hello')


// affairs['2019-12-31'] = []
// affairs['2019-12-31'].push('Lux', 'Alex')
// console.log(affairs)


// let students = {
// 	'group1': {
// 		'subgroup11': ['student111', 'student112', 'student113'],
// 		'subgroup12': ['student121', 'student122', 'student123'],
// 	},
// 	'group2': {
// 		'subgroup21': ['student211', 'student212', 'student213'],
// 		'subgroup22': ['student221', 'student222', 'student223'],
// 	},
// 	'group3': {
// 		'subgroup31': ['student311', 'student312', 'student313'],
// 		'subgroup32': ['student321', 'student322', 'student323'],
// 	},
// };

// students.group1.subgroup11.push('Alex')
// console.log(students)
// students.group1['subgroup13'] = []
// students.group1.subgroup13.push('Wow')
// console.log(students)

// students['group4'] = {}
// students.group4['subgroup000'] = []
// students.group4.subgroup000.push('Lux')

// console.log(Math.pow(2, 10))

// console.log(Math.sqrt(245))

// let arr = [4, 2, 5, 19, 13, 0, 10]
// let sum = 0
// for(let elem of arr){
//     elem = elem * 3
//     sum+= elem
// }
// console.log(Math.sqrt(sum))

// let num = 379
// let sqrt = Math.sqrt(num)
// console.log(sqrt.toFixed(3))

// let num = 587
// let obj = {}

// let sqrt = Math.sqrt(num)
// let floors = Math.floor(sqrt)
// let ceils = Math.ceil(sqrt)
// obj.floor
// obj.floor = floors
// obj.ceil
// obj.ceil = ceils

// console.log(obj)

// console.log(Math.max(4, -2, 5, 19, -130, 0, 10))

// console.log(Math.min(4, -2, 5, 19, -130, 0, 10))


// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(getRandomInt(1, 100));

// let arr = []
// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// for(let i = 0; i < 10; i++){
    
// arr.push(getRandomInt(1, 20))
// }
// console.log(arr)

// let a = -1
// console.log(Math.abs(a))

// let str = 'js'
// console.log(str.toUpperCase())

// let str = 'JS'
// console.log(str.toLowerCase())


// let str = 'я учу javascript!'
// // let a = str.substr(2, 3)
// let a = str.slice(2, 5)
// let b = str.substring(6, 16)
// console.log(a)
// console.log(b)


// let str = 'abcde'
// if(str.indexOf('a') === 0){
//     console.log('Yes')
// }
//  let str = 'abcde'
// //  if(str.lastIndexOf('a')){
// //     console.log('yes')
// //  }else{
// //     console.log('No')
// //  }
// console.log(str.startsWith('http:'))


// let str = '1-2-3-4-5'

// let arr = str.split('-')
// console.log(arr)

// let str = '12345'
// let arr = str.split('')
// console.log(arr)

// let arr = [1, 2, 3, 4, 5];

// let str = arr.join('-')
// console.log(str)

// let arr = [1, 2, 3]
// let first = arr.pop()
// // for(let elem of arr){
// //     console.log(elem)
// // }
// console.log(first)

// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.slice(0, -2)
// console.log(newArr)

// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.slice(3)
// console.log(newArr)

// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 0, 'a', 'b')
// arr.splice(6, 0, 'c')
// arr.splice(8, 0, 'e')

// console.log(arr)


// let arr = [1, 2, 3, 4, 5]
// console.log(arr.includes(3))


// let str = 'london';
// let result = str.slice(0, 1).toUpperCase() + str.slice(1);
// console.log(result); // выведет 'London'

// let str = 'london';
// let result = str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(result);

// let str = 'london';
// let result = str.slice(0, 2).toUpperCase() + str.slice(2) 
// console.log(result)


// let str = 'London';
// let result = str.slice(0, 1).toLowerCase() + str.slice(1)
// console.log(result)


// let str = 'word1 word2 word3';
// let words = str.split(' ')


// for (let i = 0; i < words.length; i++) {
// 	// Увеличим регистр каждого слова:
// 	words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
//     console.log(words[i])
// }

// // Сольем массив обратно в строку:
// let result = words.join(' ');
// console.log(result);

// let str = 'word1 word2 word3';

// let words = str.split(' ')
// console.log(words)
// for(let i = 0; i < words.length; i ++){
//     words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1)
//     console.log(words[i])
// }

// let str = 'var_test_text' 
// let arr = str.split('_')
// for(let i = 0; i < arr.length; i++){
//     arr[i] = arr[i].slice(0, 1).toLowerCase() + arr[i].slice(1)
    
// }
// let res = arr.join(' ')
// console.log(res)


// let str = '12345';
// let res = str.split('').reverse().join('')
// console.log(res)

// let num = 12345;
// num = String(num);
// let arr = num.split('')
// console.log(arr)

// let sum = 0;
// for (let digit of arr) {
// 	sum += Number(digit);
// }

// console.log(sum);

// function func(){
//     console.log('Alex')
// }

// func()

// let sum = 0
// function func(){
//     for(let i = 1; i <= 100; i++){
//         sum+= i
        
//     }
//     console.log(sum)
// }
// func()

// function func(num){
//     console.log(num ** 3)
// }
// func(3)

// function func(num){
//     if (num > 0){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }
// func(-1)
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

// function func(param1, param2, param3){
//     console.log(param1 + param2 + param3)
// }
// func(param1, param2, param3)

// function func(num = 5) {
// 	console.log(num * num);
// }
// func(2);
// func(3);
// func();

// function func(num1 = 0, num2 = 0) {
// 	console.log(num1 + num2);
// }
// func(2, 3);
// func(3);
// func();

// function func(num) {
// 	return num ** 2;
// }
// let res = func(3);
// console.log(res)

// function func(num){
// return num ** 3
// }
// let res = func(2)
// console.log(res)


// function func(num){
//     return Math.sqrt(num)
// }
// let sum = func(3) + func(4)
// console.log(sum)

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function round(num) {
// 	return num.toFixed(3);
// }

// let res = round(sqrt(2))
// console.log(res)


// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// let res = sum(sqrt(2), sqrt(3), sqrt(4))
// console.log(res)


// function round(num) {
// 	return num.toFixed(3);
// }
// let res = round(1.44323)
// console.log(res)

// function func(num) {
// 	return num;
	
// 	let res = num ** 2;
// 	return res;
// }

// console.log( func(3) );

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	} else {
// 		return num ** 2;
// 	}
// }

// console.log( func(10) );
// console.log( func(-5) );



// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	}
	
// 	return num ** 2;
// }

// console.log( func(10) );
// console.log( func(-5) );



// function func(num) {
// 	let sum = 0;
	
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;
// 		return sum;
// 	}
// }

// console.log( func(5) );


// function func(arr) {
// 	let sum = 0;
	
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
		
// 		// Если сумма больше или равна 10:
// 		if (sum >= 10) {
// 			return i + 1; // выходим из цикла и из функции
// 		}
// 	}
//     // for(let elem of arr){
//     //     sum+= elem
//     // if(sum >= 10){
//     //     return elem
//     // }
//     //}
// }

// let res = func([1, 2, 3, 4, 5]);
// console.log(res);


// function func() {
// 	let sum = 0;
// 	let i = 1;
	
// 	while (true) { // бесконечный цикл
// 		sum += i;
		
// 		if (sum >= 100) {
// 			return i; // цикл крутится пока не выйдет тут
// 		}
		
// 		i++;
// 	}
// }

// console.log( func() );


// function func() {
// 	let sum = 0;
// 	let i = 1;
	
// 	while (true) { // бесконечный цикл
// 		sum += i;
		
// 		if (sum >= 100) {
// 			return i; // цикл крутится пока не выйдет тут
// 		}
		
// 		i++;
// 	}
// }

// console.log( func() );

// function func(num){
//     let count = 0
//     while(num >= 10){
//         num /= 2
//     count++
//     }
//     return count
// }
// console.log(func(1000))


// function divideUntilLessThan10(num) {
//     let count = 0; // Переменная для подсчета итераций

//     while (num >= 10) { // Выполняем цикл, пока число больше или равно 10
//         num /= 2;       // Делим число на 2
//         count++;        // Увеличиваем счетчик итераций
//     }

//     return count; // Возвращаем количество итераций
// }

// // Пример использования
// console.log(divideUntilLessThan10(100)); // Результат: 4
// console.log(divideUntilLessThan10(50));  // Результат: 3


// function func(num1, num2) {
	
	
// 	if (num1 > 0 && num2 > 0) {
// 		return num1 * num2;
// 	} else {
// 		return num1 - num2;
// 	}
	
	
// }

// console.log(func(3, 4));
// let arr = [1, 3, 5]
// function func(arr){
//     for(let elem of arr){
//         if(elem % 2 == 0){
//             return (console.log('Четные числа'))
//         }
//     }

//     return console.log('Не четные числа')
// }

// func(arr)

// function func(num){
//     let arr = num.toString().split('')
//     for(let elem of arr){
//         if(elem % 2 != 0){
//             return true
//         }
//     }
    
//     return false
// }
// console.log(func(135))

// let arr = [1, 2, 3, 4, 5, 6]

// function func(arr){
//     for(let i = 0; i < arr.length-1; i++){
//         if (arr[i] === arr[i + 1]){
//             return true
//         }
//     }
//     return false
// }

// console.log(func(arr))


// function func1(num1) {
// 	return num1
// }
// function func2(num2) {
// 	return num2
// }

// console.log( func1(2) + func2(2) );

// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
		
// 	}
//     return res
// }

// console.log(sum([1, 2, 3, 4, 5]));

// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }

// console.log( func1() + func2() );

// let arr = sum([1, 2, 3, 4, 5]);
// console.log(arr);

// function sum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
	
// 	return sum;
// }

// let res = sum([1, 2, 3, 4, 5]);
// console.log(res);

// function sum(arr) {
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
//     return sum
// }


// function add(num) {
// 	if (num <= 9) {
// 		return '0' + num;
// 	}
//     return num
// }

// console.log(add(11))


// let arr = [1, 2, 3, 4, 5];
// let num = sum(arr);
// console.log(num);

// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
	
// 	return res;
// }


// let num = 12345;
// console.log(num.toString().split(''))

// let res = getDigitsSum(num);
// console.log(res);

// function getDigitsSum(num) {
// 	let arr = num.toString().split('');
// 	let sum = 0;
	
// 	for (let elem of arr) {
// 		sum += +elem;
// 	}
	
// 	return sum;
// }


// console.log(isPrime(7)); // должен вывести true

// function isPrime(num) {
// 	for (let i = 1; i < num; i++) {
// 		if (num % i === 0) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// }


// let arr = [1, 2, 3, 4, 5]
// function func(arr){
//     let sum = 0
//     for(let elem of arr){
//         sum+= elem 
//     }
//     return sum
// }
// console.log(func(arr))



// function func(num){
//     let arr = []
//     for(let i = 1; i <= num; i++){
//         if(num % i === 0){
//           arr.push(i)
//         }
//     }
//     return arr
// }

// console.log(func(12))

// function func(str){
//     return str.split('')

// }


// console.log(func('World'))

// function func(str){
//     let arr = str.split('')
//     let newStr = ''
//     for(let i = arr.length-1; i >= 0; i--){
//          newStr+= arr[i]
//     }
//     return newStr
// }

// console.log(func('Hello'))


// function func(str){
//     let newStr = str.split('').splice(0, 1).join('').toUpperCase()
//    return newStr= newStr + str.split('').splice(1).join('')
// }
// console.log(func('hello'))

// function func(str){
//     let arr = str.split(' ')
    
//     for(let i = 0; i < arr.length; i++){
//       arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1)
    
//     }
//     return arr
// }

// console.log(func('hello hello hello'))


// let str = 'word1 word2 word3';

// let words = str.split(' ')
// console.log(words)
// for(let i = 0; i < words.length; i ++){
//     words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1)
//     console.log(words[i])
// }

// let arr = []
// function func(arr){

//     for(let i = 1; i <= 10; i++){
//        arr.push(i)
//     }
//     return arr

// }

// console.log(func(arr))


// let arr = [1, 2, 3, 4, 5, 6]

// function func(arr){
//     let minArr = Math.min.apply(null, arr)
//     let maxArr = Math.max.apply(null, arr)
    
//         function getRandomInt(min, max) {
            
//             return Math.floor(Math.random() * (max - min + 1)) + min;
        
//         }
        
//         return getRandomInt(minArr, maxArr)
// }
// console.log(func(arr))

// function func(num){
//         return num % 2 === 0
    
// }
// console.log(func(4))


// let num = 123222
// let sum = 0
// let arr = num.toString().split('')
// let firstNum = arr.slice(0, 3)

// let secondNum = arr.slice(3)
// let a
// let b
// function func(num){
//     for(let elem of num){
//         sum += Number(elem)
//     }
//     return sum
// }

// console.log(func(firstNum))
// console.log(func(secondNum))

// function func() {
// 	let num = 2;
// }

// let num = 1;
// func();
// console.log(num);

// function func(arr) {
// 	let newArr = arr;
// 	newArr[0] = '!';
// }

// let arr = [1, 2, 3];
// func(arr);
// console.log(arr);

// function func(){
//     return 'Hello, Alex'
// }

// func = 123
// console.log(func)


// function func(){
//     return 3
// }
// console.log(func())

// let func2 = func()
// console.log(func2)
// let res = func() + func2
// console.log(res)

// let func1 = function(){
//     return 1
// }

// let func2 = function(){
//     return 2
// }
//  console.log(func1() + func2())

// func()
// let test = function func() {
// 	console.log('!');
// }

// let arr = [
// 	function() {console.log('1')},
// 	function() {console.log('2')},
// 	function() {console.log('3')},
// ];

// for (let func of arr) {
// 	func(); // вызываем наши функции в цикле
// }

// let arr = [
// 	function() {return 1},
// 	function() {return 2},
// 	function() {return 3},
// ];

// for(let elem of arr){
//     console.log(elem())
// }

// let obj = {
// 	func1: function() {return 1},
// 	func2: function() {return 2},
// 	func3: function() {return 3},
// };
// // console.log(obj.func1() + obj.func2() + obj.func3())

// for(key in obj){
//     console.log(obj[key]())
// }


// let obj = {
// 	func1: function(arr) {
//         let sum = 0
//         for(let elem of arr){
//             sum+= elem
//         }
//         return sum
//     },
// 	func2: function(arr) {
//         let square
//         for(let elem of arr){
//             square = elem * elem
//         }
//         return square
//     },
// 	func3: function(arr) {
//         let cube
//         for(let elem of arr){
//             cube = elem * elem * elem
//         }
//         return cube
//     },
// };

// console.log(obj.func1([1, 2, 3, 4, 5]))
// console.log(obj.func2([1, 2, 3, 4, 5]))
// console.log(obj.func3([1, 2, 3, 4, 5]))


// test(
// 	function() {return 1;}, // первый параметр
// 	function() {return 2;}  // второй параметр
// );

// function test(func1, func2) {
// 	console.log(func1() + func2()); // выведет 'function() {return 1;}'
	
// }

// function test(func1, func2, func3){
//     console.log(func1() + func2() + func3())
// }

// test(
//     function(){return 1},
//     function(){return 2},
//     function(){return 3}
// )


// function test(func1, func2, func3){
//     console.log(func1() + func2() + func3())
    
// }

// let func1 = function (){return 1}
// let func2 = function (){return 2}
// let func3 = function (){return 3}

// test(func1, func2, func3)

// Выведет 9:
// test(function(num) {
// 	return num ** num;
// });

// function test(func) {
// 	console.log(func(3));
// }

// let func1 = function (){
//     return 2
// }

// let func2 = function (){
//     return 3
// }

// function test(func1, func2){
//     console.log(func1() + func2())
// }
// test(func1, func2)

// function test(num, func1, func2) {
// 	return console.log(func1(num), func2(num));
// }

// function func1(num){
//     return num * num
// }
// function func2(num){
//     return num ** num
// }
// test(3, func1, func2)

// function test(arr, func) {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = func(arr[i]);
// 	}
	
// 	return arr;
// }

// // Оформим код изящнее:
// let result = test([1, 2, 3], function(num) {
// 	return num ** num;
// });

// console.log(result); // выведет [1, 4, 9]

// let test = function func() {
// 	console.log('!'); // выводим '!'
// 	func(); // вызываем сами себя
// };

// test();

// function func(num1, num2){
//     function square(num){
//         return num * num
//     }

//     function cube(num){
//         return num * num * num
//     }
//     return square(num1) + cube(num2)
// }

// console.log(func(2, 2))

// let cube = 2 * 2 * 2
// console.log(cube)

// function test() {
// 	let num = 1;
	
// 	function func() {
// 		console.log(num);
// 	}
	
// 	func();
// }

// test();

// function func() {
// 	return function() {
// 		return '!';
// 	};
// }

// // let result = func(); // в переменной result будет функция
// console.log(func()()); // выведет 'function() {return '!';}'

// function func(){
//     return function(){
//         return 1
//     }
// }


// function func2(){
//     return function(){
//         return 2
//     }
// }
// console.log(func()() + func2()())

// function func(){
//     return function(){
//         return function(){
//             return function(){
//                 return function(){
//                     return '!'
//                 }
//             }
//         }
//     }
// }
// console.log(func()()()()())

// function func(num1){
//     return function(num2){
//         return function(num3){
//             return num1 + num2 + num3
//         }
//     }
// }
// console.log(func(2)(3)(4))

// let arr = []

// function func(num1){
//     return function(num2){
//         return function(num3){
//             return function(num4){
//                 return function(num5){
//                     return function(){
//                         arr.push(num1, num2, num3, num4, num5)
//                     }
//                 }
//             }
//         }
//     }
// }
// func(2)(3)(4)(5)(6)()
// console.log(arr)

// function test() {
// 	let num = 1;
	
// 	return function() {
// 		console.log(num);
// 		num++; // прибавляем единицу
// 	}
// }

// let func = test();
// func()
// func()
// func()



// function createDecrementer() {
//     let num = 10; // Переменная в замыкании
    
//     return function() {
//         if (num > 0) {
//             console.log(--num); // Уменьшаем число на 1 и выводим
//         } else {
//             console.log("Число уже равно 0");
//         }
//     };
// }

// const decrement = createDecrementer(); // Создаём замыкание

// decrement(); // 9
// decrement(); // 8
// decrement();
// decrement();
// decrement();
// decrement();
// decrement();
// decrement();
// decrement();
// decrement();
// decrement();
// decrement();
// decrement();
// decrement(); // 7
// // ... вызываем дальше



// function test(){
//     let num = 10
//     return function(){
        
//         if(num > 0){
//             console.log(num--)
            
//         }else{
//             console.log('отсчет окончен')
//         }
        
//     }
// }
// let func = test()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()


// (function(num1, num2) {
// 	console.log(num1 + num2);
// })(1, 2);

// (function() {
// 	// какой-то код
//     return function(){
//         return function(){
//             return alert('Hello')
//         }
//     }
// })()()();

// (function(num) {
// 	// какой-то код
//      return function(num2){
//         return alert(num + num2)
//     }
    
// })(1)(2);

// (function(num1) {
// 	// какой-то код
//     return function(num2){
//         return function(num3){
//             return alert(num1 + num2 + num3)
//         }
//     }

// })(1)(2)(3);

// let result = 1
// +function() {
// 	return 2;
// }();

// console.log(result)

// let str = 'str'

// (function() {
// 	console.log(1);
// })();

// let func = function(){
//     let num = 1
//     return function(){
//         console.log(num)
//         num++
//         if(num === 5){
            
//             console.log(num)
//             num = 0
//             num++
//         }
//     }
// }()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// func()
// let arr = [1, 2, 3, 4, 5]
// function each(arr, callback) {
// 	let result = [];
	
// 	for (let elem of arr) {
// 		result.push( callback(elem) ); // вызываем функцию-коллбэк
// 	}
	
// 	return result;
// }
// let result = each(arr, function(num){
//     return num * 2
// })

// console.log(result)

// let arr = ["apple", "banana", "cherry", "date"]
// let arr = [1, 2 , 3, 4, 5]

// function each(arr, callback){
//     let result = []
//     for(let elem of arr){
//         result.push(callback(elem))
//     }
//     return result
// }

// // let result = each(arr, function(str){
// //     // return str.split('').reverse().join('')
// //     return str.toUpperCase()
// // })

// function cube(num) {
// 	return num ** 3;
// }

// let result = each(arr, cube)


// console.log(result)


// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let result = each(arr, (elem, index) => elem * index > 10)

// let arr = [1, 2, 3, 4, 5];


// let i = 1;

// function func(){
// 	console.log(i);
// 	i++;
	
// 	if (i <= 10){
// 		func(); // здесь функция вызывает сама себя
// 	}
// }
// func();
	

// function func(arr) {
// 	console.log(arr.shift(), arr);
	
// 	if (arr.length != 0) {
// 		func(arr);
// 	}
// }

// func([1, 2, 3]);

// let arr = [1, 2, 3, 4, 5];

// function func(arr){
//     console.log(arr.shift(), arr);

//     if(arr.length != 0){
//         func(arr)
//     }
    
// }
// func(arr)
// let i = 1
// function func(num){
//     console.log(num)
//     num ++
//     if(num <= 10){
//         func(num)
//     }
// }
// func(i)

// function getSum(arr) {
// 	let sum = arr.shift();
	
// 	if (arr.length !== 0) {
// 		sum += getSum(arr);
// 	}
	
// 	return sum;
// }

// console.log(getSum([1, 2, 3]));

// let arr = [1, 2, 3, 4, 5];
// function getSquare(arr){
//     let sum = arr.shift()

//     if(arr.length !== 0){
//         sum *= getSquare(arr)
//     }
//     return sum
// }
// console.log(getSquare(arr))

// function func(arr) {
// 	for (let elem of arr) {
// 		console.log(elem);
// 	}
// }

// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

// function func(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			// элемент - массив
// 		} else {
// 			// элемент - примитив
// 			console.log(elem);
// 		}
// 	}
// }

// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

// function func(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			func(elem);
// 		} else {
// 			console.log(elem);
// 		}
// 	}
// }

// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

// function func(obj){
//     for(let key in obj){
//         if(typeof obj[key] === 'object'){
//             func(obj[key])
//         }else{
//             console.log(obj[key])
//         }
//     }
// }

// func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
// )

// function func(arr){
//     let newArr = []
//     for(let elem of arr){
//         if(typeof elem == 'object'){
//             newArr.push(func(elem)) 
            
//         }else(console.log(elem))
        
//     }
//     return newArr
// }

// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]])

// function func(obj){
//     let sum = 0
//     for(let key in obj){
//         if(typeof obj[key] === 'object'){
//             sum += func(obj[key])
//         }else{
//             sum += obj[key]
//         }
//     }
//     return sum
// }

// console.log(func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}))

// function func(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] == 'object') {
// 			arr[i] = func(arr[i]);
// 		} else {
// 			// arr[i] = arr[i] + '!';
//             arr[i] = arr[i] * 2
// 		}
// 	}
	
// 	return arr;
// }

// console.log(func([1, [2, 7, 8], [3, 4, [5, 6]]]));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// let newArr = []
// let result = arr.map(function(elem){
     
//      return newArr.push(elem * elem)

// })
// console.log(newArr)

// let arr = ['Hello', 'world']

// let result = arr.map(function (elem){
//     return elem.split('').reverse().join('')
// })

// console.log(result)

// let arr = ['123', '456', '789'];
// let res = arr.map((elem) =>{
//    let newArr =  elem.split('').map(Number)
//      return newArr

     
// })
// console.log(res)

// let arr = [1,2, 3, 4, 5, 6]
// let res = arr.map((elem, index)=>{
//     return elem * index
// })

// console.log(res)

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// let result = arr.map(function(elem) {
// 	return elem
// });

// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// arr.forEach(function(elem) {
// 	sum += elem;
// });

// console.log(sum);


// let arr = [1, 2, 3, 4, 5]
// let sum 
// let res = arr.forEach((elem)=>{
//     return sum = elem * elem 
// })
// console.log(sum)

// let arr = [1 ,2, 3, 4, 5, 6, 9, 12, 15]
// let res = arr.filter((elem) => {
//     return elem > 0 && elem < 10
// })

// console.log(res)

// let arr = ['hello', 'everybody', 'wellcome']

// let res = arr.filter((elem) => {
//     return elem.length > 5
// })

// console.log(res)

// let arr = [1, 2, 3, 4, 5];

// let res = arr.filter((elem) => {
//     return elem % 2 == 1 
// })

// console.log(res.length)

// let arr = [1, 2, 3, 4, 5]
// // let res = arr.every((elem) => {
// //     return elem > 0
// // })
// // console.log(res)

// let res = arr.some((elem) => {
//     return elem > 0
// })

// console.log(res)


// let arr = [1, 2, 3, 4, 5]

// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }
// console.log(func(...arr))

// function func(n1, n2, n3, n4, n5, n6, n7, n8) {
// 	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
// }

// console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );


// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];

// console.log(arr2);

// function func(a, b, ...rest) {
// 	console.log(a);
// 	console.log(b);
//     console.log(rest)
// }
// func(1, 2, 3, 4, 5);


// function func(...nums){
//     let sum = 0
//     for(let num of nums){
//         sum+= num
//     }
//     return sum
// }
// console.log(func(1, 2, 3, 4, 5))

// let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(result); // выведет [ [1, 2, 3,] [4, 5, 6], [7, 8, 9] ]

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let [name, surname, department, position, salary] = arr

// console.log(salary)

// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000];
// }

// let [name, surname, department, position, salary] = func();

// console.log(name)


// let arr = ['Alex', 'Torzuk', 'developer']
// let [name, surname, department] = arr
// console.log(name)
// console.log(surname)
// console.log(department)

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// // let info = arr.slice(2); // все элементы со второго до конца массива
// let [name, surname, ...job] = arr
// console.log(name)
// console.log(surname)
// console.log(job)


// let arr = ['John', 'Smit', 'development', 'programmer'];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];

// let position;
// if (arr[3] !== undefined) {
// 	position = arr[3];
// } else {
// 	position = 'trainee';
// }

// let [name, surname, department, position = 'trainee'] = arr
// console.log(name)
// console.log(surname)
// console.log(department)
// console.log(position)



// function yearF() {
	
//     return new Date().getFullYear();
// }
// function monthF() {
	
//     return new Date().getMonth();
// }
// function dayF() {
	
//     return new Date().getDate();
// }

// let arr = []

// let [year = yearF(), month = monthF()+1, day = dayF()] = arr;

// console.log(year)
// console.log(month)
// console.log(day)

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let {color, width, height} = options
// console.log(color)
// console.log(width)
// console.log(height)

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let {color: c, width: w, height: h} = options
// console.log(c)
// console.log(w)
// console.log(h)

// let options = {
// 	width:  400,
// 	height: 500,
// };

// let {color = 'black', width, height} = options
// console.log(color)
// console.log(width)
// console.log(height)

// let options = {
// 	width:  400,
// 	height: 500,
// };

// let {color: c = 'black', width: w, height: h} = options
// console.log(c)
// console.log(w)
// console.log(h)


// function func([name, surname, department, position, salary]) {
// 	console.log(name)
//     console.log(surname)
//     console.log(department)
//     console.log(position)
//     console.log(salary)

// }

// func( ['John', 'Smit', 'development', 'programmer', 2000] );

// function func([name, surname, ...info]) {
// 	console.log(name)
//     console.log(surname)
//     console.log(info)

// }

// func( ['John', 'Smit', 'development', 'programmer', 2000] );

// function func([name, surname, department, position = 'джуниор']) {
// 	console.log(name)
//     console.log(surname)
//     console.log(department)
//     console.log(position)
	
	
// }

// func( ['John', 'Smit', 'development'] );

// function func(department, [name, surname], [year, month, day]) {
// 	console.log(department)
//     console.log(name)
//     console.log(surname)
//     console.log(year)
//     console.log(month)
//     console.log(day)
// }

// func( 'development', ['John', 'Smit'], [2018, 12, 31] );

// function func({color, width, height}) {
// 	console.log(color)
//     console.log(width)
//     console.log(height)
// }

// func( {color: 'red', width: 400, height: 500} );

// function func({color = 'black', width, height}) {
// 	console.log(color)
//     console.log(width)
//     console.log(height)
// }

// func( {color: 'red', width: 400, height: 500} );

// let date = new Date()
// console.log(date)

// let day = new Date()
// console.log(day.getDate())
// console.log(day.getMonth())
// console.log(day.getFullYear())

// let date = new Date()
// function func(num){
//     if (num >= 0 && num <= 9){
//         return '0' + num
//     }else{
//         return num
//     }
// }
// console.log(date.getHours() + ':' + 
//     date.getMinutes() + ':' +
//     date.getSeconds() + ' ' +
//     func(date.getDate()) + '.' +
//     func(date.getMonth()+1) + '.' +
//     date.getFullYear()
// )

// let str = '2025-12-31';

// let res = str.split('-').reverse().join('/')
// console.log(res)

// let day = new Date()
// if(day.getDay() === 0 || day.getDay() === 6){
//     console.log('Выходной день')
// } else{
//     console.log('Рабочий день')
// }

// let date = new Date()
// let month = date.getMonth()
// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];

// console.log(months[month])

// let date = new Date(1988, 7, 6); 
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);

// let date = new Date(2015, 11, 4, 23, 59, 59);
// console.log(date.getTime());


// let date = new Date();
// console.log(date.getTime());

// let date = new Date(2025, 0, 0, 0, 0, 0);
// console.log(date.getTime());


// let now  = new Date();
// let date = new Date(1988, 10, 13, 23, 59, 59);

// let diff = now.getTime() - date.getTime();
// console.log(diff / (1000 * 60 * 60 * 12 * 24));


// let now  = new Date();
// let date = new Date(2000, 8, 0, 12, 59, 59);

// let diff = now - date; // вычитаем два объекта с датами друг от друга
// console.log(diff / (1000 * 60 * 60 * 12 * 24 * 12));     // увидим разницу в миллисекундах



// function func(year, month, day){
//     let data = new Date(year, month, day)
//     return data.getDate()
// }
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// let newDay = func(2025, 4, 0)

// console.log(days[newDay])

// let year  = 2025;
// let month = 0;
// let day   = 31;

// let date = new Date(year, month, day);

// if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
// 	console.log('корректна');
// } else {
// 	console.log('некорректна');
// }

// let now  = new Date(); // получаем текущий момент
// let date = new Date(now.getFullYear(), 11, 31); // получаем нашу дату
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[date.getDay()]);
// console.log(date.getDay())

// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 1);
// console.log(date)

// let now  = new Date();
// let date = new Date(now.getFullYear() - 1, 11, 31);
// console.log(date)

// let date1 = new Date();
// let date2 = new Date(2015, 4, 25, 12, 59, 59);

// console.log(date1 / (60 * 60) - date2 / (60 * 60)); // разность в миллисекундах

// let date1 = '2020-11-31';
// let date2 = '2020-12-01';

// let date1 = '09-21';
// let date2 = '09-23';

// console.log(date1 < date2)

// let btn = document.querySelector('#btn')
// let elem1 = document.querySelector('.elem1')
// // let elem2 = document.querySelector('.elem2')
// // let res = document.querySelector('.res')
// btn.addEventListener('click', ()=>{
//     // res.textContent = Number(elem1.textContent) + Number(elem2.textContent)
//     // elem1.textContent = Number(elem1.textContent) + 1
//     // elem1.textContent = elem1.textContent + '!!!'
//     console.log(elem1.innerHTML)
// })

// let input = document.querySelector('#elem')
// let a = document.querySelector('.a')
// let img = document.querySelector('.img')
// let p = document.querySelector('.p')
// let btn = document.querySelector('#btn')
// btn.addEventListener('click', ()=>{
//  p.textContent = img.src
// })


// let input = document.querySelector('#elem')
// let input2 = document.querySelector('#elem2')
// let input3 = document.querySelector('#elem')
// let input4 = document.querySelector('#elem2')
// let input5 = document.querySelector('#elem')

// let btn = document.querySelector('#btn')

// let p = document.querySelector('p')

// btn.addEventListener('click', ()=>{
//    p.textContent = Number(input.value) + Number(input2.value) + Number(input3.value) + Number(input4.value) + Number(input5.value)
// })

// let elem = document.querySelector('#elem');
// // elem.addEventListener('focus', function() {
// // 	elem.value = elem.value ** 2
// // });
// elem.addEventListener('blur', function() {
// 	elem.value = ''
// });

// let elem = document.querySelector('#elem');
// console.log(elem.className); // выведет 'aaa bbb'
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', func);
// function func() {
// 	console.log(this); // содержит ссылку на наш элемент
// }
// elem.addEventListener('blur', func);
// function func() {
// 	console.log(this); // содержит ссылку на наш элемент
// }




// let p = document.querySelector('#p')
// let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')
// let btn3 = document.querySelector('#btn3')
// btn1.addEventListener('click', ()=>{
//     // p.style.textDecoration = 'line-through'
//     p.classList.toggle('tex')
// })
// btn2.addEventListener('click', ()=>{
//     // p.style.fontWeight = 'bold'
//     p.classList.toggle('bold')
// })
// btn3.addEventListener('click', ()=>{
//     // p.style.color = 'red'
//     p.classList.toggle('red')
// })

// let elem = document.getElementById('elem')
// elem.textContent += elem.dataset.text

// let btn = document.querySelector('#btn')

// btn.addEventListener('click', func)

// function func(){
//     let sum = 0
//       btn.dataset.click = sum+= btn.dataset.click
//         btn.dataset.click++
//     console.log(btn.dataset.click)
// }
// btn.addEventListener('dblclick', ()=>{
//     alert(btn.dataset.click)
// })
    

// let elem = document.querySelector('#elem')



// elem.addEventListener('blur', ()=>{
//     if(elem.value.length <= elem.dataset.min ){
//         alert('Слишком мало символов !!')
//     } 
//    if(elem.value.length > elem.dataset.max){
//     alert('Слишком много символов !!')
//    }
// })


// let elem = document.getElementById('elem')

// elem.addEventListener('click', func)

// function func(){
//     elem.textContent += elem.dataset.productPrice * elem.dataset.productAmount
// }

// let inp1 = document.querySelector('#inp1')

// inp1.addEventListener('blur', ()=>{
//     let fio = inp1.value.trim()
//     if(fio){
//         fio = fio.split(' ').map(name =>{
//             return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//         }).join(' ')
//         inp1.value = fio
//     }
    
// })


// let inp = document.getElementById('inp1')
// inp.addEventListener('blur', ()=>{
//     let date = inp.value
//     inp.value = date.split('.').reverse().join('.')
// })

// let num = document.querySelector('input')
// let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')

// btn1.addEventListener('click', ()=>{
    
//     num.value++
// })

// btn2.addEventListener('click', ()=>{
//     if(num.value != 0){
//         num.value--
//     }
    
// })

// let inp = document.querySelector('input')
// let elems = document.querySelectorAll('p')
// for(let elem of elems){
// elem.addEventListener('click', function(){
//     inp.value++
// })
// }

let elems = document.querySelectorAll('p')
elems.forEach(elem => {
    let text = elem.textContent
    if(text.length > 10){
        elem.textContent = text.substring(0,10) + '...'
    }
})

// // Обходим каждый найденный <div>
// divs.forEach(div => {
//     // Получаем текст внутри <div>
//     let text = div.textContent;
  
//     // Обрезаем текст до 10 символов и добавляем троеточие
//     if (text.length > 10) {
//       div.textContent = text.substring(0, 10) + '...';
//     }
//   });