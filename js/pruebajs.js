function prueba(){
    const frutas = ["manzana", "pera", "mango"]; //se declara un array como constante

    frutas.unshift("uva");//Agrega al inicio del array

     const frutaEliminada = frutas.pop(); //Elimina al final del array

    console.log("Array actualizado: " + frutas); //imprime en consola el array
    console.log(frutas); //imprime en consola el array
    console.log("Eliminado: " + frutaEliminada);// imprime en consola valores eliminados del array
    console.log(frutas[0]); //imprime en consola el valor del array segun el indice indicado entre [ ]

}

