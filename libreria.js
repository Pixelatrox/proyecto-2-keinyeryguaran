let librosColeccion=[
{
"nombre":" una divina comedia",
"cantidadDePaginas":113,
"auntor":"Dante Alighieri",
"genero":["posia"],
"disponible":true
},
{
"nombre":"el caballero de armadura oxidada",
"cantidadDePaginas":108,
"autor":" Robert Fisher",
"genero":"ficcion",
"disponible":true
}]
function informacionLibro (libro){
console.log("el libro"+  libro.nombre + " tiene " + libro.cantidadDePaginas+ " paginas, fue escrito por" + librosColeccion.auntor )

}

informacionLibro(librosColeccion[0])
