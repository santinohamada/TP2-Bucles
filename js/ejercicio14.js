/*Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/
const frase = prompt("Ingresa una frase: ");
for(let i =0; i<frase.length;i++){
    if(i+1 === frase.length){
        document.write(frase.charAt(i));
        continue;
    }
    document.write(frase.charAt(i) +"-");
    
}