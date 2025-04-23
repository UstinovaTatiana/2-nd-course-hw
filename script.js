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
