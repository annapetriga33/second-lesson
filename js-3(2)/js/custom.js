var kilometers = prompt('Значение в км');
var feets = prompt('Значение в футах');
var howFeets = feets * 0.305;

if (kilometers > howFeets){
    alert('Значение в километрах ' + kilometers + ' будет больше чем в футах ' + howFeets);
}   else if (kilometers < howFeets){
    alert('Значение в футах ' + howFeets + ' будет больше чем в километрах ' + kilometers);
}   else {
    alert('Они равны');
}
