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




//Возведите 2 в 10 степень.
// console.log(Math.pow(2, 10))
// console.log(Math.sqrt(245))





//Дана строка 'i study javascript'. Вырежьте из нее слово 'study' и слово 'javascript' 
// тремя разными способами (через substr, substring, slice).

// let str = 'i study javascript'
// let a = str.slice(2, 7)
// let b = str.slice(8, 18)
// console.log(a)
// console.log(b)

// let c = str.substr(2, 5)
// let d = str.substr(8, 10)
// console.log(c)
// console.log(d)

// let e = str.substring(2, 7)
// let f = str.substring(8, 18)
// console.log(e)
// console.log(f)


//Дана строка. Проверьте, начинается ли эта строка на 'http://'.

// let str = 'http://'.includes('ht')
// console.log(str)
// let str = 'http://'
// let res = str.startsWith('ht')
// let res = str.endsWith('//')
// let res = str.indexOf(':')
// let res = str.lastIndexOf('/')
// console.log(res)


//Дана строка '1-2-3-4-5'. Поменяйте все дефисы на точки.
// let str = '1-2-3-4-5'
// let res = str.replaceAll('-', '.')


// console.log(res)

//Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.

// let str = '1-2-3-4-5'
// let arr = str.split('-')
// console.log(arr)

//Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
// let str = '12345'
// let arr = str.split('')
// console.log(arr)


// let arr = [1, 2, 3, 4, 5];

// let str = arr.join('-')
// console.log(str)
//С помощью метода join слейте его в строку '1-2-3-4-5'.

// let arr = [1, 2, 3]
// arr.unshift(4, 5, 6)
// console.log(arr)




// let arr = [1, 2, 3, 4, 5]
// let newArr = arr.slice(3)
// console.log(newArr)

//массив.splice(откуда удаляем, сколько удаляем, [вставить], [вставить]...);____________________________________
// let arr = [1, 2, 3, 4, 5]
// //С помощью метода splice преобразуйте массив в следующий:
// arr.splice(3, 0, 'a', 'b', 'c')
// console.log(arr)
//[1, 4, 5]

//[1, 2, 3, 'a', 'b', 'c', 4, 5]

// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 0, 'a', 'b')
// arr.splice(6, 0, 'c')
// arr.splice(8, 0, 'e')
// console.log(arr)



//[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

// let arr = [1, 2, 3, 4, 5]

// console.log(arr.includes(3))
// console.log(arr.indexOf(2))

// let obj = {a: 1, b: 2, c: 3};
// console.log(Object.keys(obj))

//_______





//Код должен найти сумму цифр числа:

// let num = 12345;
// let arr = String(num).split('')

// let sum = 0;
// for (let digit of arr) {
// 	sum += +digit;
// }

// console.log(sum);


//Код должен найти сумму цифр числа:

// let num = 12345;
// let arr = String(num).split('');

// let prod = 1;
// for (let digit of arr) {
// 	prod *= +digit;
// }

// console.log(prod);




// function each(arr, callback) {
	
// 	for(let elem of arr){
// 	callback(elem)
// 	}
// }
// each([1, 2, 3], function(elem){
// 	console.log( elem * 2)
// })



// function map(arr, callback) {
//     let result = []
//     for (let elem of arr) {
//         result.push(callback(elem))
//     }
//     return result
// }

// let result = map([1, 2, 3], function(elem) {
//     return elem * 2
// })
// console.log(result) // [2, 4, 6]

//                        №2
//Дан массив со строками. С помощью созданной нами функции 
// each переверните символы каждой строки в обратном порядке.

// function each(arr, callback) {
//     for(let elem of arr){
//         callback(elem)
//     }
// }
// each(['abc', 'def'], function(elem){
//     console.log(elem.split('').reverse().join('') )
// })


//Дан массив со строками. С помощью созданной нами функции 
// each сделайте заглавным первый символ каждой строки.

// function func(arr, callback) {
//     for(let elem of arr){
//         callback(elem)
//     }               
// }
// func(['abc', 'def'], function(elem){
//     console.log(elem[0].toUpperCase() + elem.slice(1) )
//     })

//С помощью следующей функции возведите все элементы массива в куб:

// function each(arr, callback) {
//     for(let elem of arr){
//         callback(elem)
//     }               
// }
// each([1, 2, 3], function(elem){
//     console.log(cube(elem))
// })

// function cube(num) {
// 	return num ** 3;
// }    

// function filter(arr, callback) {
// 	let res = [];

// 	for (let elem of arr) {
// 		if ( callback(elem) === true ) {
// 			res.push(elem);
// 		}
// 	}
	
// 	return res;
// }
// let result = filter([1, 2, 3, 4, 5], elem => elem > 0)
// console.log(result)


// function test(){
// 	let num = 10
// 	return function(){
// 		if (num >= 0) {
// 			console.log(num)
// 			num--
// 		} else {
// 			console.log('отсчет окончен')
// 		}
// 	}
// }

// let func1 = test()
// func1()
// func1()
// func1()
// func1()
// func1()
// func1()
// func1()
// func1()
// func1()
// func1()
// func1()
// func1()

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];

// let [name, surname, department, position, salary] = ['John', 'Smit', 'development', 'programmer', 2000];

// console.log(name)
// console.log(surname)

// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000];
// }

// let arr = func();

// let [name, surname, department, position, salary] = func();

// console.log(name, surname, department, position, salary)


// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [, , department, position] = arr;
// console.log(department, position)

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, ...info] = arr;
// console.log(name, surname)
// console.log(info)


// let arr = ['John', 'Smit', 'development'];

// // let name       = arr[0];
// // let surname    = arr[1];
// // let department = arr[2];
// let [name, surname, department, position = 'trainee'] = arr;	

// console.log(name, surname, department, position)
// console.log(position)

// let arr = []
// function funcDay() {
// 	return (new Date).getDate();
// }
// function funcMonth() {
// 	return (new Date).getMonth() + 1;
// }	
// function funcYear() {
// 	return (new Date).getFullYear();
// }
// let [year = funcYear(), month = funcMonth(), day = funcDay()] = arr;
// console.log(year, month, day)

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color, width, height} = options;
// console.log(color, width, height)

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color:c, width:w, height:h} = options;
// console.log(c, w, h)


// let options = {
// 	width:  400,
// 	height: 500,
// };
// let {color: c = 'black', width:w, height:h} = options;
// console.log(c, w, h)

// function func([name, surname, department, position, salary]) {
// 	console.log(name, surname, department, position, salary)
// 	// let name       = employee[0];
// 	// let surname    = employee[1];
// 	// let department = employee[2];
// 	// let position   = employee[3];
// 	// let salary     = employee[4];
// }

// func( ['John', 'Smit', 'development', 'programmer', 2000] );

// function func([name, surname, info]) {	
// console.log(name)
// console.log(surname)
// console.log(info)
// 	// let name     = employee[0];
// 	// let surname  = employee[1];
// 	// let info     = employee[2];
// }

// func( ['John', 'Smit', 'development', 'programmer', 2000] );

// function func([name, surname, department, position = 'junior']) {
// 	console.log(name)
// 	console.log(surname)
// 	console.log(department)
// 	console.log(position)	
// }

// func( ['John', 'Smit', 'development'] );

// function func(department, [name, surname], [year, month, day]) {
// 	console.log(department)
// 	console.log(name)
// 	console.log(surname)
// 	console.log(year)
// 	console.log(month)
// 	console.log(day)
	
// }

// func( 'development', ['John', 'Smit'], [2018, 12, 31] );

// function func({color, width, height}) {

// 	console.log(color)
// 	console.log(width)
// 	console.log(height)
// }

// func( {color: 'red', width: 400, height: 500} );

// function func({color = 'black', width, height}) {
// 	console.log(color)
// 	console.log(width)
// 	console.log(height)
// }

// func( { width: 400, height: 500} );

// function func({color = 'black', width, height}) {
//     console.log(color)      // ← проверьте это
//     console.log(width)
//     console.log(height)
// }

// func({color: 'red', width: 400, height: 500})

// let date = new Date();

// console.log(date.getFullYear()); // год
// console.log(date.getMonth());    // месяц
// console.log(date.getDate());     // день

// console.log(date.getHours());    // часы
// console.log(date.getMinutes());  // минуты
// console.log(date.getSeconds());  // секунды


// let date = new Date();
// function addZero(num){
//     if(num > 0 && num < 9){
//         return '0' + num
//     }else{
//         return num
//     }
// }

// console.log(addZero(date.getHours()) + ':' +
// 	addZero(date.getMinutes()) + ':' +
// 	addZero(date.getSeconds()) + ' ' +
//     addZero(date.getDate()) + '.' +
//     addZero(date.getMonth() + 1) + '.' +
//     addZero(date.getFullYear()) 
// );

// let date = '2026-05-06'
// let res = date.split('-').reverse().join('.')
// console.log(res)


// let date = new Date()
// let day = date.getDay()
// if(day === 0 || day === 6){
//     console.log('выходной')
// }else{
//     console.log('рабочий день')
// }

// let day = new Date().getDay() // 0 = воскресенье, 1 = понедельник, ... 6 = суббота
// let daysToSunday = (7 - day) % 7
// console.log(daysToSunday)

// let date = new Date();
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);

// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// let month = new Date().getMonth();
// console.log(months[month])

// let date = new Date(1994, 4, 14).getDay()
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[date])

// let date = new Date(2026, 4, 1, 23, 59, 59);
// console.log(date.getTime());

// let now = new Date();
// let date = new Date(1994, 4, 14)
// let diff = now.getTime() - date.getTime()
// let days = (diff / (1000 * 60 * 60 * 24)).toFixed(0)
// console.log(days)
// let now  = new Date(2010, 1, 15);
// let date = new Date(2000, 8, 1);

// let diff = now - date; // вычитаем два объекта с датами друг от друга
// let days = (diff/(1000 * 60 * 60 * 24 * 365))     
// console.log(diff); 
// let date = new Date(2020, 3, 0);
// console.log(date.getDate());
// let arr = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
// function getDaysInMonth(month, year) {
//     let date = new Date(year, month, 0);
//     return arr[date.getDay()];
// }
// console.log(getDaysInMonth(5, 2025)) // 29


// function isLeapYear(year) {
//     let date = new Date(year, 2, 0)
//     if(date.getDate() === 29){
//         return console.log('високосный')
//     }else{
//         return console.log('невисокосный')
//     }
// }
// isLeapYear(2029)    

// let year  = 2025;
// let month = 0;
// let day   = 32;

// let date = new Date(year, month, day);

// if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
// 	console.log('true');
// } else {
// 	console.log('false');
// }

// function checkDate(year, month, day){
//     let date = new Date(year, month-1 , day);
//     if (date.getFullYear() == year && date.getMonth() == month - 1 && date.getDate() == day) {
//         console.log('true');
//     } else {
//         console.log('false');
//     }
// }
// checkDate(2025, 0, 32)

// let now = new Date();

// let date = new Date(now.getFullYear()-1, now.getMonth(), now.getDate());
// let arr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']; // получаем нашу дату
// console.log(arr[date.getDay()]);

// let newD = new Date();
// let date1 = new Date(newD.getFullYear(), newD.getMonth(), 20);
// let date2 = new Date(newD.getFullYear(), newD.getMonth()+1, 10);

// console.log((date1 - date2) / (1000 * 60 * 60 * 24)); // разность в днях




// let now = new Date();
// // Создаем дату на завтра (то же год и месяц, но день + 1) в 00:00:00
// let endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

// let diff = endOfDay - now; // Разница в миллисекундах
// let hoursLeft = diff / (1000 * 60 * 60);

// console.log(hoursLeft);

// let totalMinutes = Math.floor(diff / (1000 * 60));
// let h = Math.floor(totalMinutes / 60);
// let m = totalMinutes % 60;

// console.log(`До конца дня осталось: ${h} ч. ${m} мин.`);

// let now = new Date();
// let year = now.getFullYear();

// for (let month = 0; month <= 11; month++) {
//     // Ставим фиксированное число — 13
//     let date = new Date(year, month, 13);
    
//     // Проверяем, пятница ли это (5)
//     if (date.getDay() === 5) {
//         console.log(`Пятница 13-е: ${year}-${month + 1}-13`);
//     }
// }

// let now = new Date();
// let currentYear = now.getFullYear(); // 2024 (или текущий год на момент запуска)
// let count = 0;

// for (let year = 2000; year <= currentYear; year++) {
//     let date = new Date(year, 0, 1); // 0 — это январь
//     let day = date.getDay(); // Получаем день недели (0 - вс, 6 - сб)
    
//     if (day === 0 || day === 6) {
//         count++;
//         console.log(year + ' год: 1 января — выходной (' + (day === 0 ? 'вс' : 'сб') + ')');
//     }
// }

// console.log('---');
// console.log('Всего раз: ' + count);  
  

//Рассмотрите промежуток от 2000 года до текущего года. 
// Определите, сколько раз 1 января в этом промежутке 
// попадало на выходной день, то есть на субботу или на воскресенье.

// let birthYear = prompt('Введите ваш год рождения:'); // Просим пользователя ввести год
// let now = new Date();
// let currentYear = now.getFullYear(); // Получаем текущий год (например, 2026)

// let age = currentYear - birthYear;

// if (age >= 0) {
//     alert('Вам ' + age + ' лет!');
// } else {
//     alert('Вы еще не родились? :)');
// }

// let now = new Date(); // Время прямо сейчас
// // 1 января следующего года (0 — это январь, 1 — первое число)
// let newYear = new Date(now.getFullYear() + 1, 0, 1); 

// let diffInMilliseconds = newYear - now; // Разница в миллисекундах
// let diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)); // Переводим в дни

// console.log(diffInDays);
// console.log(newYear)
// console.log(now)


// let now = new Date()
// let threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate())
// console.log(threeMonthsAgo.getFullYear())

//Определите, какой день недели будет в последнем дне текущего месяца.
// let now = new Date();
// let lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[lastDayOfMonth.getDay()]);


//Напишите код, который будет определять, високосный ли текущий год.
// let now = new Date();
// let highYear = new Date(now.getFullYear(), 1, 29) // Февраль - это месяц 1
// if(highYear.getDate() === 29){
//     console.log('високосный')
// }else{
//     console.log('невисокосный')
// }   

// let currentYear = new Date().getFullYear();// Получаем текущий год


// for (let year = currentYear+1; year < 3000; year++) {//
//     let date = new Date(year, 1, 29); // Проверяем 29 февраля
    
//     if (date.getDate() === 29) {
//         console.log(`Следующий  високосный год: ${year}`);
//         break; // Нашли ближайший — останавливаем цикл!
//     }
// }

// let date = '08-20';

// if (date >= '01-01' && date <= '03-08') {
// 	console.log('1 промежуток');
// }

// if (date >= '03-09' && date <= '06-17') {
// 	console.log('2 промежуток');
// }

// if (date >= '06-18' && date <= '12-31') {
// 	console.log('3 промежуток');
// }
// let date1 = new Date(2020, 1, 1);
// console.log(date1.getDay())

// let now = new Date();   
// let number = new Date(now.getFullYear(), now.getMonth(), 15) // 15 число текущего месяца;

// if (now < number) {
//     console.log(' До 15 числа');
// } else {
//     console.log('После 15 числа');
// }



// задача 9 Дан инпут. В него вводится слово. По нажатию на 
// кнопку проверьте то, что это слово читается с начала и с 
// конца одинаково (например, мадам) !!!



// let links = document.querySelectorAll('a')
// let btn = document.querySelector('button')
// btn.addEventListener('click', function(){
// 	let linksHref = links.forEach(function(link){
// 		let hrefValue = link.getAttribute('href')
// 		if(hrefValue && hrefValue.startsWith('http://')){
// 			link.innerHTML+= ' &rarr;'
// 		}
// 	})
	
// })

// let inputs = document.querySelector('#elem')
// console.log(inputs.getAttribute('class')) - получить значение атрибута class


	//et numInps = inputs.value.split(',')
	//arrUpper.push(elem[0].toUpperCase() + elem.slice(1))
	//totalName.value = arrUpper.join(' ')
	//input.dataset.min

	let elem = document.querySelector('#elem')
	elem.addEventListener('click', function(){
	let price = elem.dataset.productPrice
	let amount = elem.dataset.productAmount
	console.log(price * amount)	

	})