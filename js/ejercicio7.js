/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

const numero = parseInt(prompt('Digite un numero, entre 1 y 50 incluidos'));
if(numero >=1 && numero <=50){
    for(let i =numero; i>=0;i--){
        for(let k =1; k<=i;k++){
            document.write(i);
        }
        document.write('<br>');
    }
}
