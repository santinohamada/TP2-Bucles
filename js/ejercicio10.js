/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/

const fila = parseInt(prompt("Ingresa la cantidad de filas: "));
const columnas = parseInt(prompt("Ingresa la cantidad de columnas: "));
let numerosTotales = fila * columnas;
document.write("<table >");
for(let i = 1;i<=fila;i++){
    document.write("<tr>")
    for(let j = 1; j<=columnas;j++){
        document.write("<td>")
        document.write(numerosTotales + " ");
        numerosTotales--;
    }
    document.write("<br>");
} 
document.write("</table>");