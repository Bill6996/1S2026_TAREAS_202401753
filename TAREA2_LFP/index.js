
//require es como el using de c#
const fs = require('fs');
//readline es como el scanner de java
const readline = require('readline');

// es para leer tanto lo que escribo como lo que sale es como el Console.Readlne de c#
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// la funcion es como el void que no me retorna nada y lo codifica
//mi try y catch como java para levantarme de algun error
function leerArchivo() {
    try {
        const contenido = fs.readFileSync('inventario.inv', 'utf8');
        //console log es lo mismo que Console.WriteLine o System.out.print de java
        console.log("******** CONTENIDO DEL INVENTARIO *******");
        console.log("Producto        Cantidad  Precio  Ubicacion");
        console.log("--------------------------------------------");
        const lineas = contenido.split('\n'); //me corta el texto y pasa a la siguiente linea
        //foreach recorre cada linea de la lista y el trim elimina espacion en blanco
        lineas.forEach(linea => {
            if (linea.trim() !== '') {
                console.log(linea);
            }
        });

    } catch (error) {
        console.log("No se encontro el archivo inventario.inv");
    }
    mostrarMenu();
}

// Función del menú
function mostrarMenu() {
    console.log("\n===== MENU PRINCIPAL =====");
    console.log("1. Leer archivo .inv e imprimir contenido");
    console.log("2. Salir");
    console.log("==========================");
    //rl.question muestra el menu y interactua depende de lo que se elija y ya esa respuesta entra en opcion a alguna de sus variantes
    rl.question("Elige una opcion: ", function(opcion) {
        if (opcion === '1') {  //igual que java solo acepta el tipo de dato, se utiliza pero tres ===
            leerArchivo();
        } else if (opcion === '2') {
            console.log("Se termino el programa");
            rl.close();
        } else {
            console.log("Opcion no valida, escoja entre 1 y 2.");
            mostrarMenu();
        }
    });
}

// Iniciar el programa
mostrarMenu();
