
//Задания на работу с кодом

//Задание 1
//Преобразовать строку 'js' в верхний регистр.

//Критерии оценки
//Работа будет оценена по следующим критериям Строка 'js' преобразована в верхний регистр с помощью метода 
//toUpperCase() и выведена.
//Результат работы загружен на GitHub и отправлена ссылка на pull request.//
const text = 'js';
textNew = text.toUpperCase();
console.log(textNew);

//Задание 2
//Создать функцию, которая принимает массив строк и строку.
// Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки.
// Регистр символов не влияет на результат.
function filter (arr, str) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i].toLowerCase().startsWith(str.toLowerCase())) {
        result.push(arr[i]);            
        }
    }
    return result;
}
console.log(filter(['dog','cat','big cat','rabbit'],'cat'));

//Задание 3
//Округлить число 32.58884:

//До меньшего целого.
//До большего целого.
//До ближайшего целого.

const num = 32.58884;
console.log(Math.floor(num));// до меньшего
console.log(Math.ceil(num)); //до большего
console.log(Math.round(num)); //до ближайшего целого




//Задание 4
//Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.
console.log(Math.min (52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32)); 





//Задание 5
//Создать функцию, которая выводит в консоль случайное число от 1 до 10.
function getRandomInt() {
    return Math.floor(Math.random() * 10) + 1
}

console.log(getRandomInt());


//Задание 6
//Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа.
//  Длина массива должна быть в два раза меньше переданного числа.
function getRandomNumber(number) {
return Array.from({length:Math.floor(number / 2)}, () => Math.floor(Math.random() * number));
}
console.log(getRandomNumber(6));



//Задание 7
//Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.
function num(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    
}
console.log(num(2, 6));



//Задание 8
//Вывести в консоль текущую дату.
console.log(new Date());


//Задание 9
//Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.
const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);


//Задание 10
//Написать функцию, которая принимает дату и возвращает ее в формате:
//Дата: [число] [месяц на русском] [год] — это [день недели на русском].
//Время: [часы]:[минуты]:[секунды]
function formatDate(date) {
    const days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    const year = date.getFullYear();
    const day = date.getDate();
    const dayWeek = days[date.getDay()];
    const month = date.getMonth();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return`
    Дата: ${day} ${months[month]} ${year} - ${dayWeek}.
    Время: ${hours}:${minutes}:${seconds}`;

   


}

console.log(formatDate(new Date()));

