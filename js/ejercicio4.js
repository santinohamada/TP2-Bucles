/*Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/
let numeros=0;
let testeo;
do{
    testeo = prompt("Ingrese un numero");
    if(!(/[a-zA-Z]/.test(testeo))){
        numeros +=parseInt(testeo);
    }
    else{
        alert("no ingresó numeros validos");
    }
}
while(
    confirm("Desea seguir ingresando numeros?") == true
)
document.write(numeros);