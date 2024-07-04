/*Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/
let texto = prompt("Ingrese la cadena de texto: ");
for(let i =texto.length;i>=0;i--){
    document.write(texto.charAt(i));
}