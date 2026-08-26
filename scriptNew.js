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

// 	let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	let self = this
// 	setInterval(function() {
// 		self.value = Number(self.value) + 1;
// 	}, 1000);
// });

// let input = document.querySelector('input')
// let btn = document.querySelector('button')
// let p = document.querySelector('p')
// let timer = null
// btn.addEventListener('click', function(){

// 	clearInterval(timer)
// 	let count = Number(input.value)
// 	p.textContent = count
// 	timer = setInterval(function(){

// 	count--
// 	p.textContent = count
		
// 		if(p.textContent <= 0){
// 			clearInterval(timer)
// 		}
// 	}, 1000)
// })


// let elems = document.querySelector('#elem')
// let btn = document.querySelector('#button')
// btn.addEventListener('click', function(){
// let li = document.createElement('li')
// li.textContent = 'item'
// li.addEventListener('click', function(){
// 	this.textContent+= '!'
// })
// elems.appendChild(li)
// })


// let parent = document.querySelector('#parent')
// let btn = document.querySelector('#button')
// btn.addEventListener('click', function(){
// 	let lastItem = parent.lastElementChild
// 	if(lastItem){
// 		lastItem.remove()
// 	}else {
// 		console.log('Элементов больше нет!');
// 	}
// })

// let elem = document.querySelector('#elem')
// elem.insertAdjacentHTML('beforebegin', '<div class="www"><p>text</p><p>text</p><input></div>')

// let input = document.querySelector('input')
// let btn = document.querySelector('button')
// btn.addEventListener('click', function(){
// 	let clone = input.cloneNode(true)
// 	document.body.append(clone)

// })



// let elem = document.querySelector('p')
// if (elem.matches('p')) {
// 	console.log('Да, это абзац!');
// }

// let parent = document.querySelector('#parent');

// let arr = [1, 2, 3, 4, 5];

// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
	
// 	p.addEventListener('click', function() {
// 		this.textContent = Number(this.textContent) + 1;
// 	})
	
// 	parent.appendChild(p);
// }
//______________________
// изучить как работаут table, tr, td, th, thead, tbody, tfoot
//______________________

// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');

// remove.addEventListener('click', function() {
// 	elem.remove();
// });

// let elems = document.querySelectorAll('#parent p');

// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);
	
// 	remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});
// }



// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function func() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
	
// 	elem.textContent = '';
// 	elem.appendChild(input);
	
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		elem.addEventListener('click', func); // повесим событие обратно
// 	});
	
// 	elem.removeEventListener('click', func);
// });

// let parent = document.querySelectorAll('#parent p');

// parent.forEach(function(span) {
// span.innerHTML = `<span>${span.textContent}</span>`

// span.addEventListener('click', function() {
// 	let input = document.createElement('input')
// 	input.value = this.textContent
// 	this.textContent = ''
// 	this.appendChild(input)
// 	input.focus()

// 	input.addEventListener('blur', function() {
// 		this.parentNode.textContent = this.value
// 	})
// })
// })


// let texts = document.querySelectorAll('p')
// 	for(let p of texts){
// 		p.innerHTML = '<span> ' + p.textContent + ' </span>'
// 		let link = document.createElement('a')
// 		link.href = ''
// 		link.textContent = 'line'
// 		p.appendChild(link)
// 		link.addEventListener('click', function(event){
// 			let span = this.previousElementSibling
// 			span.style.textDecoration = 'line-through'
// 			event.preventDefault()
// 			if('click'){
// 				link.remove()
// 			}
// 		})	
// 	}


// let elem = document.querySelector('#elem');
// //let show = document.querySelector('#hide');
// let hide = document.querySelector('#hide');

// hide.addEventListener('click', function() {
// 	 elem.classList.toggle('hidden');
// });
// // hide.addEventListener('click', function() {
// // 	elem.classList.remove('hidden');
// // });







// 1. Исправлена опечатка 'let' и добавлен базовый чек на существование ul
// let list = document.querySelectorAll('ul');
// let arr = ['item1', 'item2', 'item3', 'item4', 'item5'];

// let underInput = document.createElement('input');
// underInput.type = 'text';
// underInput.placeholder = 'Введите текст';
// document.body.appendChild(underInput);

// // Функция для создания полноценного LI со всей логикой внутри
// function createListItem(text) {
//     let li = document.createElement('li');
    
//     // 1. Создаем текст внутри span
//     let span = document.createElement('span');
//     span.textContent = text;
//     li.appendChild(span);
    
//     // 2. Создаем ссылку удаления
//     let link = document.createElement('a');
//     link.href = '#';
//     link.textContent = ' remove';
//     link.style.marginLeft = '10px'; // Небольшой отступ для красоты
//     li.appendChild(link);
    
//     // Логика удаления
//     link.addEventListener('click', function(event) {
//         event.preventDefault();
//         //нужно перечеркнуть span, а не удалять li
// 		span.style.textDecoration = 'line-through';
// 		link.remove(); // Убираем ссылку после нажатия
//     });
    
//     // Навешиваем редактирование ТОЛЬКО на span, чтобы не трогать ссылку
//     initEditElement(span);
    
//     return li;
// }

// underInput.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter' && this.value.trim() !== '') {
//         // Используем единую функцию создания для новых элементов
//         let newLi = createListItem(this.value);
//         list[0].appendChild(newLi);
//         this.value = '';
//     }
// });

// function initEditElement(span) {
//     span.addEventListener('click', function handler() {
//         let input = document.createElement('input');
//         input.value = this.textContent;
//         this.textContent = '';
//         this.appendChild(input);
//         input.focus();

//         input.addEventListener('blur', function() {
//             // Возвращаем текст обратно в span
//             span.textContent = this.value;
//             span.addEventListener('click', handler); 
//         });

//         input.addEventListener('keypress', function(event) {
//             if (event.key === 'Enter') {
//                 this.blur(); 
//             }
//         });

//         span.removeEventListener('click', handler);
//     });
// }

// // Заполнение начального списка через нашу функцию
// for (let i = 0; i < arr.length; i++) {
//     let li = createListItem(arr[i]);
//     list[0].appendChild(li);
// }


// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let table = document.querySelector('table');

// // 1. Создаем заголовок таблицы
// let thead = document.createElement('thead');
// let headerRow = document.createElement('tr');
// ['Name', 'Age', 'Salary', 'Actions'].forEach(text => {
//     let th = document.createElement('th');
//     th.textContent = text;
//     headerRow.appendChild(th);
// });
// thead.appendChild(headerRow);
// table.appendChild(thead);   

// // 2. Создаем тело таблицы
// let tbody = document.createElement('tbody');
// table.appendChild(tbody);

// // Функция для создания ОДНОЙ строки таблицы со всей логикой
// function createRow(name, age, salary) {
//     let row = document.createElement('tr');
    
//     // Массив с данными для удобного перебора
//     let data = [name, age, salary];
    
//     // Создаем ячейки с данными и включаем редактирование
//     data.forEach(value => {
//         let td = document.createElement('td');
//         td.textContent = value;
//         initEditCell(td); // Подключаем редактирование по клику
//         row.appendChild(td);
//     });
    
//     // Создаем ячейку для кнопки удаления
//     let deleteTd = document.createElement('td');
//     let deleteLink = document.createElement('a');
//     deleteLink.href = '#';
//     deleteLink.textContent = 'Delete';
    
//     deleteLink.addEventListener('click', function(event) {
//         event.preventDefault();
//         row.remove();
//     });
    
//     deleteTd.appendChild(deleteLink);
//     row.appendChild(deleteTd);
    
//     return row;
// }

// // Заполняем таблицу начальными данными
// employees.forEach(employee => {
//     let row = createRow(employee.name, employee.age, employee.salary);
//     tbody.appendChild(row);
// });

// // 3. Создаем форму добавления под таблицей
// let formContainer = document.createElement('div');
// formContainer.style.marginTop = '20px';

// let nameInput = document.createElement('input');
// nameInput.placeholder = 'Name';

// let ageInput = document.createElement('input');
// ageInput.placeholder = 'Age';
// ageInput.type = 'number';

// let salaryInput = document.createElement('input');
// salaryInput.placeholder = 'Salary';
// salaryInput.type = 'number';

// let addButton = document.createElement('button');
// addButton.textContent = 'Add Employee';

// // Собираем элементы формы вместе
// formContainer.appendChild(nameInput);
// formContainer.appendChild(ageInput);
// formContainer.appendChild(salaryInput);
// formContainer.appendChild(addButton);
// document.body.appendChild(formContainer);

// // Логика добавления нового работника
// addButton.addEventListener('click', function() {
//     let name = nameInput.value.trim();
//     let age = ageInput.value.trim();
//     let salary = salaryInput.value.trim();
    
//     // Простая валидация: проверяем, что все поля заполнены
//     if (name === '' || age === '' || salary === '') {
//         alert('Пожалуйста, заполните все поля!');
//         return;
//     }
    
//     // Создаем новую строку и добавляем ее в тело таблицы
//     let newRow = createRow(name, age, salary);
//     tbody.appendChild(newRow);
    
//     // Очищаем поля ввода для следующего добавления
//     nameInput.value = '';
//     ageInput.value = '';
//     salaryInput.value = '';
// });

// // Функция для редактирования ячеек
// function initEditCell(td) {
//     td.addEventListener('click', function handler() {
//         let input = document.createElement('input');
//         input.style.width = '100%';
//         input.style.boxSizing = 'border-box';
        
//         input.value = this.textContent;
//         this.textContent = '';
//         this.appendChild(input);
//         input.focus();

//         input.addEventListener('blur', function() {
//             td.textContent = this.value;
//             td.addEventListener('click', handler); 
//         });

//         input.addEventListener('keypress', function(event) {
//             if (event.key === 'Enter') {
//                 this.blur(); 
//             }
//         });

//         td.removeEventListener('click', handler);
//     });
// }


// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let ul = document.querySelector('ul');

// // Функция-конструктор для создания одного полноценного LI со всей логикой
// function createListItem(name, age, salary) {
//     let li = document.createElement('li');
//     let data = [name, age, salary];
    
//     // Создаем отдельные спаны для каждого свойства
//     data.forEach((value, index) => {
//         let span = document.createElement('span');
//         span.textContent = value;
        
//         initEditSpan(span); // Включаем редактирование
//         li.appendChild(span);
        
//         // Разделитель между спанами
//         if (index < data.length - 1) {
//             let textNode = document.createTextNode(', ');
//             li.appendChild(textNode);
//         }
//     });
    
//     // Создаем ссылку на удаление
//     let deleteLink = document.createElement('a');
//     deleteLink.href = '#';
//     deleteLink.textContent = ' remove';
//     deleteLink.style.marginLeft = '15px';
    
//     deleteLink.addEventListener('click', function(event) {
//         event.preventDefault();
//         li.remove();
//     });
    
//     li.appendChild(deleteLink);
//     return li;
// }

// // Заполняем список начальными данными
// for (let elem of employees) {
//     let li = createListItem(elem.name, elem.age, elem.salary);
//     ul.appendChild(li);
// }

// // --- СОЗДАНИЕ ФОРМЫ ПОД СПИСКОМ ---

// let formContainer = document.createElement('div');
// formContainer.style.marginTop = '20px';

// let nameInput = document.createElement('input');
// nameInput.placeholder = 'Name';

// let ageInput = document.createElement('input');
// ageInput.placeholder = 'Age';
// ageInput.type = 'number';

// let salaryInput = document.createElement('input');
// salaryInput.placeholder = 'Salary';
// salaryInput.type = 'number';

// let addButton = document.createElement('button');
// addButton.textContent = 'Add Employee';

// // Собираем форму в документ
// formContainer.appendChild(nameInput);
// formContainer.appendChild(ageInput);
// formContainer.appendChild(salaryInput);
// formContainer.appendChild(addButton);
// document.body.appendChild(formContainer);

// // Логика кнопки добавления
// addButton.addEventListener('click', function() {
//     let name = nameInput.value.trim();
//     let age = ageInput.value.trim();
//     let salary = salaryInput.value.trim();
    
//     // Проверка заполненности полей
//     if (name === '' || age === '' || salary === '') {
//         alert('Пожалуйста, заполните все поля!');
//         return;
//     }
    
//     // Создаем новый LI и крепим в UL
//     let newLi = createListItem(name, age, salary);
//     ul.appendChild(newLi);
    
//     // Очищаем форму
//     nameInput.value = '';
//     ageInput.value = '';
//     salaryInput.value = '';
// });

// // Функция редактирования конкретного span (осталась без изменений)
// function initEditSpan(span) {
//     span.addEventListener('click', function handler() {
//         let input = document.createElement('input');
//         input.value = this.textContent;
//         this.textContent = '';
//         this.appendChild(input);
//         input.focus();

//         input.addEventListener('blur', function() {
//             span.textContent = this.value;
//             span.addEventListener('click', handler); 
//         });

//         input.addEventListener('keypress', function(event) {
//             if (event.key === 'Enter') {
//                 this.blur(); 
//             }
//         });

//         span.removeEventListener('click', handler);
//     });
// }


//С чего начать прямо сейчас?Попробуйте сделать перерыв 
// от этой большой таблицы. Откройте чистый файл и 
// попробуйте самостоятельно с нуля по памяти или по 
// своему плану написать самую первую задачу:Создать 
// один инпут.
// По нажатию Enter создавать простой <li> внутри <ul>.
// Как только у вас это получится без подглядывания — вы 
// почувствуете уверенность, и мы сможем пойти дальше. 
// Хотите, мы прямо сейчас разберем пошаговый алгоритм для 
// тренировки какого-нибудь маленького кусочка?

// Находим наши главные элементы на странице

// let table = document.querySelector('table');
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];


// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');
// let tr = document.createElement('tr');
// for(let key in employees[0]){
//     let th = document.createElement('th');
//     th.textContent = key;
//     tr.appendChild(th);
// }
// let actionTh = document.createElement('th');
// actionTh.textContent = 'Actions';
// tr.appendChild(actionTh);

// thead.appendChild(tr);


// table.appendChild(thead);
// table.appendChild(tbody);
// for(let value of employees){
    
//     let tr = document.createElement('tr');
//     let td = document.createElement('td');
    
//     td.textContent = value.name;
//     initEdit(td)
//     tr.appendChild(td);

//     td = document.createElement('td');
//     td.textContent = value.age;
//     initEdit(td)
//     tr.appendChild(td);
//     td = document.createElement('td');
//     td.textContent = value.salary;
//     initEdit(td)
//     tr.appendChild(td);
//     tbody.appendChild(tr)
//     // 1. Создаем ячейку для кнопки удаления
//     let deleteTd = document.createElement('td');
    
//     // 2. Создаем саму ссылку (ваш код)
//     let deletetr = document.createElement('a');
//     deletetr.href = '#';
//     deletetr.textContent = 'remove';
    
//     deletetr.addEventListener('click', function(event){
//         event.preventDefault();
//         tr.remove();
//     });
    
//     // 3. Кладем ссылку ВНУТРЬ ячейки td
//     deleteTd.appendChild(deletetr);
    
//     // 4. И уже ячейку td добавляем в строку tr
//     tr.appendChild(deleteTd);
    
//     // Добавление строки в tbody (перенесите в самый конец итерации цикла)
//     tbody.appendChild(tr);
// }

// function initEdit(td){
//     td.addEventListener('click', function handler(){
//         let input = document.createElement('input');
//         input.value = this.textContent;
//         this.textContent = '';
//         this.appendChild(input);
//         input.focus();
        
//         // Отключаем клик по ячейке во время редактирования
//         td.removeEventListener('click', handler);

//         input.addEventListener('blur', function() {
//             td.textContent = this.value;
//             td.addEventListener('click', handler); // Возвращаем клик при потере фокуса
//         });

//         input.addEventListener('keypress', function(event) {
//             if (event.key === 'Enter') {
//                 this.blur(); 
//             }
//         }); // Вот так правильно закрывается keypress
//     }); // Вот так правильно закрывается handler (клик)
// } // Вот так закрывается сама функция initEdit


// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// let table = document.querySelector('table')
// let tbody = document.createElement('tbody')
// let thead = document.createElement('thead')
// let tr = document.createElement('tr')

// for(let key in employees[0]){
// 	let th = document.createElement('th')
// 	th.textContent = key
// 	tr.appendChild(th)
// }

// let actionTh = document.createElement('th')
// actionTh.textContent = 'Action'
// tr.appendChild(actionTh)
// thead.appendChild(tr)
// table.appendChild(thead)
// table.appendChild(tbody)

// for(let emploe of employees){
// 	let tr = document.createElement('tr')
// 	let td = document.createElement('td')
// 	td.textContent = emploe.name
// 	initEdit(td)
// 	tr.appendChild(td)

// 	td = document.createElement('td');
// 	td.textContent = emploe.age
// 	initEdit(td)
// 	tr.appendChild(td)
	
// 	td = document.createElement('td');
// 	td.textContent = emploe.salary
// 	initEdit(td)
// 	tr.appendChild(td)
// 	td = document.createElement('td')
// 	let remove = document.createElement('a')
// 	remove.href = '#'
// 	remove.textContent = 'Remove'
// 	remove.addEventListener('click', function(event){
// 		event.preventDefault()
// 		tr.remove()

// 	})
// 	td.appendChild(remove)
// 	tr.appendChild(td)
// 	tbody.appendChild(tr)

// }

// function initEdit(td){
// 	td.addEventListener('click', function handler(){
// 		let input = document.createElement('input')
// 		input.value = this.textContent
// 		this.textContent = ''
// 		this.appendChild(input);
// 		input.focus()

// 		td.removeEventListener('click', handler);

// 		input.addEventListener('blur', function(){
// 			td.textContent = this.value
// 			td.addEventListener('click', handler)
// 		})
// 		 input.addEventListener('keypress', function(event) {
//             if (event.key === 'Enter') {
//                this.blur(); 
//           }})
// 	})
// }

// let div1 = document.querySelector('#elem1');
// let p = document.querySelector('#elem')

// function createTable(rows, cols) {
	
// 	let table = document.createElement('table');
	
// 	// тут создадим таблицу с rows рядами и cols колонками
// 	for (let i = 1; i <= rows; i++) {
// 		let tr = document.createElement('tr')
		
// 		for (let j = 1; j <= cols; j++) {
// 		let td = document.createElement('td')
		
// 		// td.textContent = `${i}-${j}`

// 		tr.appendChild(td);
// 		}
// 		table.appendChild(tr)
// 	}
// 	return table;
// }

// let tableee = createTable(3, 4);
// p.appendChild(tableee)

// ;(function() {
// 	let elem = document.querySelector('#div1'); // первый див
	
// 	function func(num) {
// 		return num * num; // возведем в квадрат
// 	}
	
// 	elem.addEventListener('click', function() {
// 		this.textContent = func(elem.textContent);
// 	});
// })();





// ;(function() {
// 	let module = {};
	
// 	module.func1 = function() {
// 		alert('module funcion');
// 	}
// 	module.func2 = function() {
// 		alert('module funcion');
// 	}
// 	module.func3 = function() {
// 		alert('module funcion');
// 	}
	
// 	window.module = module;
// })();
// console.log(module)
// ;(function(){
// function avg1(arr) {
// 	return sum(arr, 1) / arr.length;
// }

// function avg2(arr) {
// 	return sum(arr, 2) / arr.length;
// }

// function avg3(arr) {
// 	return sum(arr, 3) / arr.length;
// }

// // вспомогательная функция
// function sum(arr, pow) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem ** pow;
// 	}
	
// 	return res;
// }
// window.math = {avg1, avg2, avg3, sum}
// })()
// console.log(math)

// const employees = [
//   { name: 'Ivan', department: 'IT' },
//   { name: 'Anna', department: 'HR' },
//   { name: 'Petr', department: 'IT' }
// ];

// // Группировка сотрудников по отделам
// const grouped = _.groupBy(employees, 'department');


	// console.log(elem.clientWidth);  // ширина
	// console.log(elem.clientHeight); // высота
	// console.log(elem.offsetWidth - elem.clientWidth);  // ширина
// console.log(elem.offsetHeight); // высота
// console.log(elem.scrollWidth);  // ширина
// console.log(elem.offsetHeight - elem.scrollHeight); // высота
// console.log(elem.scrollTop);  // сверху
// console.log(elem.scrollLeft); // слева
// console.log(elem.scrollHeight - elem.scrollTop); // высота
//console.log((elem.offsetHeight + elem.offsetTop) - elem.scrollHeight); // высота

// const button = document.getElementById('scrollBtn');
// const box = document.getElementById('myBox');

// Вешаем обработчик клика на кнопку
// button.addEventListener('click', () => {
//   box.scrollTo({
//     top: 0,      // Прокрутка по вертикали
//     left: 50,      // Прокрутка по горизонтали
//     behavior: 'smooth' // Плавная анимация (уберите эту строку, если нужна мгновенная прокрутка)
//   });
// //box.scrollTop = box.scrollHeight - box.clientHeight
// });


// button.addEventListener('click', () => {
//   // Вычисляем максимальную возможную прокрутку
//   const isEnd = box.scrollHeight - box.scrollTop === box.clientHeight;

//   if (isEnd) {
//     console.log('Элемент прокручен до самого конца!');
//   } else {
//     console.log('Элемент еще НЕ прокручен до конца.');
//   }
// });

// button.addEventListener('click', () => {
//   // Устанавливаем высоту элемента равной полной высоте его контента
//   box.style.height = box.scrollHeight + 'px';
// });

// let btn = document.querySelector('#btn')
// btn.addEventListener('click', () => {
// //   let w = document.documentElement.clientWidth;  // ширина
// // let h = document.documentElement.clientHeight; // высота

// // let h = window.innerHeight; // высота
// // let w = window.innerWidth;  // ширина
// // console.log( w);
// let scrollHeight = Math.max(
// 	document.body.scrollHeight, document.documentElement.scrollHeight,
// 	document.body.offsetHeight, document.documentElement.offsetHeight,
// 	document.body.clientHeight, document.documentElement.clientHeight
// );


// let scrollWidth = Math.max(
// 	document.body.scrollWidth, document.documentElement.scrollWidth,
// 	document.body.offsetWidth, document.documentElement.offsetWidth,
// 	document.body.clientWidth, document.documentElement.clientWidth
// );

// console.log(scrollWidth);
// })

// let map = new Map;
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];
// let obj1 = {a: 1};
// let obj2 = {b: 2};
// let obj3 = {c: 3};
// map.set(obj1, arr1);
// map.set(obj2, arr2);
// map.set(obj3, arr3);
// for (let key of map) {
// 	console.log(key);
// }
// console.log(map.entries())

// let keysMap = map.keys();
// for (let key of keysMap) {
// 	console.log(key);
// }
// let valuesMap = map.values();
// for (let value of valuesMap) {
// 	console.log(value);
// }
// console.log(map.get(obj1));
// console.log(map.get(obj2));
// console.log(map.get(obj3));
// console.log(map.size);

// let inputs = document.querySelectorAll('input');
// let map = new Map;

// let i = 1;

// for (let elem of inputs) {
// 	map.set(elem, i++);
// }

// for (let elem of inputs) {
// 	elem.addEventListener('click', function() {
// 		this.value += map.get(this);
// 	});
// }

// let obj = {a: 1, b: 2, c: 3};

// let sym = Symbol();

// obj[sym] = function() {
// 	console.log(this); // {a: 1, b: 2, c: 3}
// };

// obj[sym] = function() {
// 	let sum = 0;
	
// 	for (let key in this) {
// 		sum += this[key];
// 	}
	
// 	return sum;
// };

// let sum = obj[sym]();

// console.log(sum); // выведет 6

// let arr = [1, 2, 3];
// arr.push(4, 5);
// let sym = Symbol()
// arr[sym] = function() {
// 	console.log(this); // [1, 2, 3]
// }
// arr[sym] = function() {
// 	let sum = 0;
	
// 	for (let elem of this) {
// 		sum += elem;
// 	}
	
// 	return sum;
// }
// let sum = arr[sym]();
// console.log(sum); // выведет 6

//усть у вас есть несколько объектов. 
// Добавьте каждому из них ключ в виде символа с именем 'sum'. 
// Сделайте в этом ключе функцию, которая будет возвращать 
// сумму элементов объекта.
// let obj1 = {a: 1, b: 2, c: 3};
// let obj2 = {x: 10, y: 20, z: 30};

// let sumSymbol = Symbol('sum');

// obj1[sumSymbol] = function() {
// 	let sum = 0;
// 	for (let key in this) {
// 		if (typeof this[key] === 'number') {
// 			sum += this[key];
// 		}
// 	}
// 	return sum;
// };

// obj2[sumSymbol] = function() {
// 	let sum = 0;
// 	for (let key in this) {
// 		if (typeof this[key] === 'number') {
// 			sum += this[key];
// 		}
// 	}
// 	return sum;
// };

// // Проверка
// console.log(obj1[sumSymbol]()); // выведет 6
// console.log(obj2[sumSymbol]()); // выведет 60

// let sym1 = Symbol.for('test1');
// let sym2 = Symbol.for('test2');
// let key = Symbol.keyFor(sym1);
// console.log(key); // выведет 'test1'
// let key2 = Symbol.keyFor(sym2);
// console.log(key2); // выведет 'test2'

// let arr = [1, 2, 3];
// let func = arr[Symbol.iterator];
// console.log(func);
// //Сделайте коллекцию Map. Проверьте, есть ли у нее ключ Symbol.iterator.
// let map = new Map();
// console.log(map.has(Symbol.iterator)); // выведет false

// //Сделайте коллекцию Set. Проверьте, есть ли у нее ключ Symbol.iterator.
// let set = new Set();
// console.log(set.has(Symbol.iterator)); // выведет false

// let arr = '[1, 2, 3, "a", "b", "c"]';

// let obj = '{"a": 1, "b": 2, "c": "eee", "d": true}';

// let obj = '{ "a": ["a", "b", "c",], "b": "111", "c": "eee"}';

// let json = '[1, 2, 3, 4, 5, "a", "b"]';
// let arr = JSON.parse(json);
// console.log(arr); // выведет [1, 2, 3, 4, 5, "a", "b"]

// let json = '[1,2,3,4,5]'
// let arr = JSON.parse(json)
// let sum = 0
// for(let elem of arr){
// 	sum+= elem
// }
// console.log(sum)

// let json = `{
// 	"data1": [1,2,3],
// 	"data2": [4,5,6],
// 	"data3": [7,8,9]
// }`;
// let sum = 0
// let obj = JSON.parse(json);
// for(let key in obj){
// 	for(let elem of obj[key]){
// 		sum += elem
// 	}	
// }
// console.log(sum)

// let json = '["user1","user2","user3","user4","user5"]';
//  let ul = document.querySelector('ul');
//  let arr = JSON.parse(json);
//  for(let elem of arr){
// 	let li = document.createElement('li')
// 	li.textContent = elem
// 	ul.appendChild(li)
//  }

// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`; 
// let arr = JSON.parse(json);
// let table = document.querySelector('table');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');
// let tr = document.createElement('tr');

// for(let key in arr[0]){
// 	let th = document.createElement('th');
// 	th.textContent = key;
// 	tr.appendChild(th);
// }
// thead.appendChild(tr);
// table.appendChild(thead);
// table.appendChild(tbody);

// for(let obj of arr){
// 	let tr = document.createElement('tr');
// 	for(let key in obj){
// 		let td = document.createElement('td');
// 		td.textContent = obj[key];
// 		tr.appendChild(td);
// 	}
// 	tbody.appendChild(tr);
// }

// let arr = [1, 2, 3, 4, 5, 'a', 'b'];
// let json = JSON.stringify(arr);
// console.log(json)

// let ul = document.querySelectorAll('ul li');
// let arr = [];

// 	for(let elem of ul){
// 		arr.push(elem.textContent)
// 	}
	
// let json = JSON.stringify(arr);
// console.log(json)

// let table = document.querySelector('table');
// for(let elem of table.rows){
// 	let obj = {}
// 	for(let i = 0; i < elem.cells.length; i++){
// 		let td = elem.cells[i]
// 		obj[td.cellIndex] = td.textContent
// 	}
// 	let json = JSON.stringify(obj)
// 	console.log(json)
// }

// let json = '["user1","user2","user3","user4","user5"]';

// let arr = JSON.parse(json);
// arr.push('user6');
// let newJson = JSON.stringify(arr);
// console.log(newJson);

// let json = '["user1","user2","user3","user4","user5"]';
// let arr = JSON.parse(json);
// for(let i = 0; i < arr.length; i++){
// 	arr[1] = 'user' + '_updated';

// }
// let newJson = JSON.stringify(arr);
// console.log(newJson);

// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;



// let arr = JSON.parse(json);
// arr.push({
// 	"name": "user4", 
// 	"age": 28, 
// 	"salary": 4000
// });

// // Проверяем результат
// console.log(arr);

// let arr = [1, 2, 3];
// let func = arr[Symbol.iterator];
// console.log(func); // функция

// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// let iterator = map[Symbol.iterator]();
// console.log(iterator.next()); // { value: ['a', 1], done: false }
// console.log(iterator.next()); // { value: ['b', 2], done: false }
// console.log(iterator.next()); // { value: ['c', 3], done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

// let json = '["user1","user2","user3","user4","user5"]'
// let arr = JSON.parse(json);
// let iterator = arr[Symbol.iterator]();
// console.log(iterator.next()); // { value: 'user1', done: false }
// console.log(iterator.next()); // { value: 'user2', done: false }
// console.log(iterator.next()); // { value: 'user3', done: false }
// console.log(iterator.next()); // { value: 'user4', done: false }
// console.log(iterator.next()); // { value: 'user5', done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

// let elems = document.querySelectorAll('p')
// let iterator = elems[Symbol.iterator]();
// console.log(iterator.next()); // { value: <p>...</p>, done: false }
// console.log(iterator.next()); // { value: <p>...</p>, done: false }
// console.log(iterator.next()); // { value: <p>...</p>, done: false }
// console.log(iterator.next()); // { value: <p>...</p>, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

// function *func() {
// 	yield 5;
// 	yield 4;
// 	yield 3;
// 	yield 2;
// 	yield 1;
// }
// let iter = func();
// console.log(iter.next()); // { value: 5, done: false }
// console.log(iter.next()); // { value: 4, done: false }
// console.log(iter.next()); // { value: 3, done: false }
// console.log(iter.next()); // { value: 2, done: false }
// console.log(iter.next()); // { value: 1, done: false }
// console.log(iter.next()); // { value: undefined, done: true }

// function *func() {
// 	for (let i = 10; i >= 0; i--) {
// 		yield i;
// 	}
// }
// let iter = func();
// console.log(iter.next()); // { value: 10, done: false }
// console.log(iter.next()); // { value: 9, done: false }
// console.log(iter.next()); // { value: 8, done: false }
// console.log(iter.next()); // { value: 7, done: false }
// console.log(iter.next()); // { value: 6, done: false }
// console.log(iter.next()); // { value: 5, done: false }
// console.log(iter.next()); // { value: 4, done: false }
// console.log(iter.next()); // { value: 3, done: false }
// console.log(iter.next()); // { value: 2, done: false }
// console.log(iter.next()); // { value: 1, done: false }
// console.log(iter.next()); // { value: 0, done: false }
// console.log(iter.next()); // { value: undefined, done: true }

// function *func(num) {
// 	for(let i = num; i >= 0; i-=2){
// 		yield i;
// 		if(i === 0){
// 			return;
// 		}
// 	}	
// }
// let iter = func(5);
// console.log(iter.next()); // { value: 5, done: false }
// console.log(iter.next()); // { value: 4, done: false }
// console.log(iter.next()); // { value: 3, done: false }
// console.log(iter.next()); // { value: 2, done: false }
// console.log(iter.next()); // { value: 1, done: false }
// console.log(iter.next()); // { value: 0, done: false }
// console.log(iter.next()); // { value: undefined, done: true }

// function *func() {
// 	for (let i = 1; i <= 3; i++) {
// 		yield i;
// 	}
// }

// let elems1 = func();


// for (let elem of elems1) {
// 	console.log(elem);
// }
// let elems2 = func();
// for (let elem of elems2) {
// 	console.log(elem);
// }

// function *func(obj) {
// 	for (let key in obj) {
// 		yield  [key, obj[key]]
// 	}
// }
// let iter = func({a: 1, b: 2, c: 3});
// for (let elem of iter) {
// 	console.log(elem); // 'a: 1', 'b: 2', 'c: 3'
// }

// let obj = {a: 1, b: 2, c: 3,[Symbol.iterator]: function *() {
// 	for (let key in this) {
// 		yield {key: key, value: this[key]};
// 	}
// }}





// for (let elem of obj) {
// 	console.log(elem);
// }
// let arr = [1, 2, 3, 4, 5];
// let map = new Map;
//  map.set(arr, 'array');
// // map.set('a', 1);
// // map.set('b', 2);
// // map.set('c', 3)

// let iter = map.values();

// for (let elem of iter) {
// 	console.log(elem); // 'array'
// }

//Пусть даны 3 объекта и 3 массива. Создайте коллекцию Map, 
// сделайте ключами коллекции объекты, а значениями - соответствующие массивы.


// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// let obj1 = {a: 1};
// let obj2 = {b: 2};
// let obj3 = {c: 3};

// let map = new Map();
// map.set(obj1, arr1);
// map.set(obj2, arr2);
// map.set(obj3, arr3);
// let iter = map.keys()

// for(let elems of iter)(
// 	console.log(elems)
// )

// // let arr = ['a', 'b', 'c'];
// let iter = map.entries();
// for (let entry of iter) {
// 	console.log(entry); // [0, 'a'], [1, 'b'], [2, 'c']
// }
// for(let [key, value] of iter){
// 	console.log(key)
// 	console.log(value)
	
// }


// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// 	[Symbol.iterator]: function *(){
// 		for (let key in this){
// 			yield this[key];
// 		}
// 	}
// };

// let newObj = {...obj};
// console.log(newObj)

// let str = '12345';

// for(let elem of str){
// 	console.log(elem)
// }

// let num = 12
// let arr = [...String(num)]
// let sum = 0
// for(let elem of arr){
// 	sum+= +elem
// }
// console.log(sum)

let elems = document.querySelectorAll('p');

// for (let entry of elems.entries()) {
// 	console.log(entry);
// }

// for (let [num, elem] of elems.entries()) {
// 	console.log(num, elem);
// }

for (let [num, elem] of elems.entries()) {
	elem.textContent += num;
}


