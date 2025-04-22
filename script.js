let randomInt = Math.floor(Math.random() * 100) + 1;

function guessNumber() {
    while (true) {
        let input = Number(prompt("Попробуй угадать число от 1 до 100"));

        if (input === null) {
            alert('Попробуй еще раз');
            return;
        }
        if (input === randomInt) {
            alert(`Вы угадали число ${randomInt}`);
            break;
        }
        else if (input < randomInt) {
            alert('Число должно быть больше');

        }
        else {
            alert('Число должно быть меньше');
        }
    }
};
