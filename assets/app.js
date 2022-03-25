/* * 
  ? Ejercicio individual 2
  TODO: dado un arreglo de diferentes palabras, ordena alfabeticamente las palabras y muestralas en consola en orden.
  * palabraEnOrden(['naranja','fresa','sandia','uvas','cerezas','manzana']); (bubbleSort())

  ! NOTA. Sin utilizar el método sort()
  
*/


const lista = ['naranja','fresa','sandia','uvas','cerezas','manzana'];

/* *
 ? Ordenamiento burbuja
 * Compara de 2 en 2 las posiciones del arreglo, de modo que en cada iteración envia el elemento mas grande hacia una posicion más hacia el final, y asi sucesivamente hasta que llegue al final. Luego se vuelve a repetir para encontrar otro elemento mal acomodado y enviarlo a su posicion correcta. Por lo que utiliza 2 for anidados  limitando el búcle por la longitud del arreglo.
 */
function ordenamientoBurbuja(array){
    for(let i = 0; i < array.length - 1; i++){// ? primera iteracion o general para encontrar el elemento mas grande tantas veces como elementos tenga el arreglo
    
        for(let k = 0; k < array.length - 1; k++){ // ? Iteracion anidada para empezar a mover el elemento mas grande hacia el final.

            
            if(array[k] > array[k+1]){ // ? comprobación que invierte el elemento mayor por el menor para ir moviendolo hacia el final. (Esta es la que hace el trabajo)
                let aux = array[k];
                array[k] = array[k+1];
                array[k+1] = aux;
            }

            
        }
    }

    return array;
}

console.log('Lista original: ', lista);
console.log('Lista ordenada: ', ordenamientoBurbuja(lista));
    