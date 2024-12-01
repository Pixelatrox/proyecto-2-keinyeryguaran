let librosColeccion=[
{
"nombre":" una divina comedia",
"cantidadDePaginas":113,
"autor":"Dante Alighieri",
"genero":["poesia"],
"disponible":false
},
{
"nombre":" el caballero de armadura oxidada",
"cantidadDePaginas":108,
"autor":" Robert Fisher",
"genero":"ficcion",
"disponible":true
}]
function informacionLibro (libro){
    let mensaje ="el libro"+  libro.nombre + " tiene " + libro.cantidadDePaginas+ " paginas , fue escrito por " + libro.autor + " y es del genero " + libro.genero ;
    if (libro.disponible === true){ mensaje += " y esta disonible"}
    else{mensaje += " y no esta disonible"}    
            console.log(mensaje)

    
        
}
function imprimirLibros(libros) {
for (let i = 0; i < libros.length; i++) {
    informacionLibro(libros[i]) 
    
}
}
let nuevoLibro = {
    nombre: " Cien años de soledad",
    cantidadDePaginas: 417,
    autor: "Gabriel García Márquez",
    genero: ["ficcion", "realismo mágico"],
    disponible: true
};

informacionLibro(nuevoLibro);

function agregarLibro(libros, nuevoLibro) {
    libros.push(nuevoLibro);
}
    agregarLibro(librosColeccion, nuevoLibro);
imprimirLibros(librosColeccion);


      


