/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/
const nombre1 = prompt("ingrese el primer nombre: ");
const edad1 = parseInt(prompt("Digite la primera edad: "));
const nombre2 = prompt("ingrese el segundo nombre: ");
const edad2 = parseInt(prompt("Digite la segunda edad: "));
const nombre3 = prompt("ingrese el tercer nombre: ");
const edad3 = parseInt(prompt("Digite la tercera edad: "));
if (edad1 === edad2 && edad3 === edad1) {
    document.write("Los 3 tienen la misma edad");
}
else {
    switch (Math.max(edad1, edad2, edad3)) {
        case edad1:
            document.write(`El mayor es: ${nombre1}`);
            break;
        case edad2:
            document.write(`El mayor es: ${nombre2}`);
            break;
        case edad3:
            document.write(`El mayor es: ${nombre3}`);
            break;

        default:
            document.write("No ingresó valores validos");
            break;
    }
}