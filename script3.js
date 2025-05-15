function getUserText() {
    let input = prompt("Введите любой текст");
    input = input.split('');
    input.reverse();
    input = input.join('');

     alert (input);
}
