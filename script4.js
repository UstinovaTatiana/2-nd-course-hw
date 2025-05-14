function getQuiz() {
    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["Красный", "Синий", "Зеленый"],
            correctAnswer: 2 // номер правильного ответа (1-based)
        },
        {
            question: "Сколько дней в неделе?",
            options: ["Шесть", "Семь", "Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["Четыре", "Пять", "Шесть"],
            correctAnswer: 2
        }
    ];

    let score = 0;
    let quit = false;
    

    for (let i = 0; i < quiz.length; i++) {
        if (quit) break; 
        const q = quiz[i];
        let questionText = `${q.question}\n`;
        for (let j = 0; j < q.options.length; j++) {
            questionText += `${j + 1}. ${q.options[j]}\n`;
        }

        let answer;
        do {
            answer = prompt(questionText + 'Введите номер правильного ответа (1, 2 или 3):');
            if (answer === null) {
                alert('Вы вышли из викторины.');
                quit = true; // устанавливаем флаг для выхода
                break;
            }
            answer = parseInt(answer);
        } while (isNaN(answer) || answer < 1 || answer > q.options.length);

        if (quit) break;

        if (answer === q.correctAnswer) {
            alert('Правильно!');
            score++;
        } else {
            alert(`Неправильно. Правильный ответ: ${q.correctAnswer}. ${q.options[q.correctAnswer - 1]}`);
        }
    }

    if (!quit) {
        alert(`Викторина завершена! Вы ответили правильно на ${score} из ${quiz.length} вопросов.`);
    }
}