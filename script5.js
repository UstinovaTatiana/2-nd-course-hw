
function getGame() {
    const options = ["камень", "ножницы", "бумага"];

    const userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();

    if (!options.includes(userChoice)) {
        alert("Некорректный выбор. Пожалуйста, попробуйте снова.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * options.length);
    const computerChoice = options[randomIndex];

    alert(`Вы выбрали: ${userChoice}\nКомпьютер выбрал: ${computerChoice}`);

    let result = "";

    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Вы проиграли!";
    }

    alert(result);
}