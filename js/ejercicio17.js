/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:



Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1


*/
texto = prompt("Ingrese un texto");
let encontrada = false;
let i=0;
let vocalEntontrada ="";
while(!encontrada){
    if (/[aeiou]/.test(texto.charAt(i))) {
        vocalEntontrada = texto.charAt(i);
        encontrada=true
    }
    i++;
}
document.write(`la vocal ${vocalEntontrada} se encuentra en la posición ${i-1}`);