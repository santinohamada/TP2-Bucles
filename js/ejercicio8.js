/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
*/
const numero = parseInt(prompt('Digite un numero, entre 1 y 50 incluidos'));
if(numero >=1 && numero <=50){
    for(let i =1; i<=numero;i++){
        for(let k =1; k<=i;k++){
            document.write(k);
        }
        document.write('<br>');
    }
}