var kilometers = prompt('Значение в км');
var feets = prompt('Значение в футах');
var howFeets = feets * 0.305;

if (kilometers > howFeets){
    alert('Значение в километрах будет больше');
}   else if (kilometers < howFeets){
    alert('Значение в футах будет больше');
}   else {
    alert('Они равны');
}