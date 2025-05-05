function getUserNumber() {
    let input = prompt("Попробуй угадать число от 1 до 100");
    if (input === null) {
        return null;
    }
    let userNumber = parseFloat(input);
    if (isNaN(userNumber) || !Number.isFinite(userNumber)) {
        alert('Пожалуйста, введите число.');
        return getUserNumber();
    }
    return userNumber;
}
function guessNumber() {
    while (true) {
        let userNumber = getUserNumber();

        if (userNumber === null) {
            break;
        }
        if (userNumber === randomInt) {
            alert(`Вы угадали число ${randomInt}`);
            break;
        }
        else if (userNumber < randomInt) {
            alert('Число должно быть больше');
        }
        else {
            alert('Число должно быть меньше');
        }

    }
}
let randomInt = Math.floor(Math.random() * 100) + 1;




function getUserAnswer() {
    let input = prompt(`Попробуйте решить ${num1} ${randomOperation} ${num2}`);
    if (input === null) {
        return null;
    }
    let userAnswer = parseFloat(input);
    if (isNaN(userAnswer) || !Number.isFinite(userAnswer)) {
        alert('Пожалуйста, введите ответ.');
        return getUserAnswer();
    }
    return userAnswer;
}

const operation = ['+', '-', '*', '/'];
const randomOperation = operation[Math.floor(Math.random() * operation.length)];
/*console.log(randomOperation);*/
let num1 = Math.floor(Math.random() * 20);
let num2 = Math.floor(Math.random() * 20);
/*console.log(num1);
console.log(num2);*/

function calculate(operation, num1, num2) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;

        default:
            return 'invalid operation';
    }


}
/*console.log(calculate(randomOperation, num1, num2));*/

function guessOperation() {
    while (true) {
        let userAnswer = getUserAnswer();

        if (userAnswer === null) {
            break;
        }
        if (userAnswer === result) {
            alert(`Верно`);
            return;
        }
        else {
            alert('Не верно');
        }

    }
}
let result = calculate(randomOperation, num1, num2);

/*console.log(result);*/


