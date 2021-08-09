var firstNumber = prompt('Первое число');
var secondNumber = prompt('Второе число');

if (firstNumber > secondNumber){
    alert('Первое число ' + firstNumber + ' больше второго числа ' + secondNumber);
}   else if (firstNumber < secondNumber){
    alert('Второе число ' + secondNumber + ' больше первого числа ' + firstNumber);
}   else {
    alert('Они равны');
}

