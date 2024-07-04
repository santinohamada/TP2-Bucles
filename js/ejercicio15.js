/*15- Realiza un script que cuente el número de vocales que tiene un texto.
*/

texto = prompt("Ingrese un texto");
let contador = 0;
for (let i = 0; i < texto.length; i++) {

    if (/[aeiou]/.test(texto.charAt(i))) {
        contador++
    }

}
document.write(`El texto tiene ${contador} vocales`);