function obtenerIniciales(nombreCompleto) {

    
    if (typeof nombreCompleto !== "string" || nombreCompleto.trim() === "") {
        return "Entrada inválida";
    }



    let palabras = nombreCompleto.trim().split(" ");
    let letras = palabras.map(palabra => palabra.charAt(0));
    return letras.join("").toUpperCase();




}
//pruebas exitosas
console.log(obtenerIniciales("ana maria lópez"));            
console.log(obtenerIniciales("juan perez"));                 
console.log(obtenerIniciales("  carlos   andres  gomez  ")); 

//errores
console.log(obtenerIniciales(""));   
console.log(obtenerIniciales(123));  




