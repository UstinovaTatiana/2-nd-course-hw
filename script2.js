function getUserAnswer(randomOperation, num1, num2) {
    
    let input = prompt(`Попробуйте решить ${num1} ${randomOperation} ${num2}`);
    if (input === null) {
        return null;
    }
    let userAnswer = parseFloat(input);
    if (isNaN(userAnswer) || !Number.isFinite(userAnswer)) {
        alert('Пожалуйста, введите ответ.');
        return getUserAnswer(randomOperation, num1, num2);
    }
    return userAnswer;
}


function calculate(Operation, num1, num2) {
    switch (Operation) {
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

function guessOperation() {
    const operation = ['+', '-', '*', '/']; 
    const randomOperation = operation[Math.floor(Math.random() * operation.length)];
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10); 
    
    while (true) {
        let userAnswer = getUserAnswer(randomOperation, num1, num2);

        if (userAnswer === null) {
            break;
        }
        const result = calculate(randomOperation, num1, num2);
        if (userAnswer === result) {
            alert(`Верно`);
            break;
        }
        else {
            alert('Не верно');
        }

    }

}
