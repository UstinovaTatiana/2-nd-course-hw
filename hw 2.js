//Создайте переменную «пароль» и присвойте ей произвольный текст-пароль.
//(let password = 'пароль';)
//Создайте вторую переменную и с помощью prompt()
// спросить у пользователя «Введите пароль».
//Добавьте проверку: если пользователь вводит верный пароль, вывести на экран «Пароль введен верно».
//Добавьте проверку: если пользователь вводит неверный пароль, вывести на экран "Пароль введен неправильно".//

let password = 'пароль';
let user = prompt('Введите пароль');
if (password === user) { console.log(`Пароль введен верно`);
    
} else {console.log(`Пароль введен неправильно`);
    
}

//Задание 2 Создайте переменную с и запишите в нее любое число. 
//Если с больше 0 и меньше 10, то выведите в консоль «Верно», иначе выведите «Неверно».
//Проверьте работу скрипта при значении переменной c, равной 0, 10, −3, 2.//

let c =10;
if (c > 0 && c < 10) { console.log('Верно');
    
} else {console.log('Неверно');
    
}

//Задание 3 Создайте две переменные — d и e, запишите в них любые числа.
//Если одна из переменных больше 100, выведите в консоль «Верно», иначе выведите «Неверно».//

let d = 5;
let e = 105;
if (d > 100 || e > 100) {console.log('Верно');
    
} else {console.log('Неверно');
    
}

//Задание 4 Исправьте код с помощью преобразования типов, чтобы на экран выводилось число 
//5, а не строка '23'.
//let a = '2';
//let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
//alert(a + b);

let a = '2';
let b = '3';
alert (+a + +b);

//Задание 5 Напишите программу, которая определяет по номеру месяца в году,
// к какому сезону этот месяц принадлежит.
//Например, 1-й месяц (он же январь) принадлежит к сезону «зима».
//Для написания программы используйте оператор switch. Для обозначения номера месяца используйте переменную 
//monthNumber, которая равна 12. Пропишите условие, при котором программа не будет выполняться (номер месяца больше 13).

let monthNumber = prompt('Введите номер месяца');

switch (monthNumber) {
    case '1': 
        console.log('Январь');
        break;

    case '2': 
        console.log('Февраль');
        break;
    case '3': 
        console.log('Март');
        break;
    case '4': 
        console.log('Апрель');
        break;
    case '5': 
        console.log('Май');
        break;
    case '6': 
        console.log('Июнь');
        break;
    case '7': 
        console.log('Июль');
        break;
    case '8': 
        console.log('Август');
        break;
    case '9': 
        console.log('Сентябрь');
        break;
    case '10': 
        console.log('Октябрь');
        break;
    case '11': 
        console.log('Ноябрь');
        break;
    case '12': 
        console.log('Декабрь');
        break;        
    default:
        console.log('Такого месяца нет');
        break;
}
