/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/
let i=0
let cadena =[]
do{
    cadena[i] = prompt("Ingrese una cadena de texto");
    i++;
}
while (confirm("ingrese un texto") == true)

document.write(cadena.join('-'));