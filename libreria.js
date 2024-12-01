let librosColeccion=[
{
"nombre":" una divina comedia",
"cantidadDePaginas":113,
"autor":"Dante Alighieri",
"genero":["poesia"],
"disponible":false
},
{
"nombre":"el caballero de armadura oxidada",
"cantidadDePaginas":108,
"autor":" Robert Fisher",
"genero":"ficcion",
"disponible":false
}]
function informacionLibro (libro){
    console.log("el libro"+  libro.nombre + " tiene " + libro.cantidadDePaginas+ " paginas , fue escrito por " + libro.autor + " y es del genero " + libro.genero  )

}

 
for (let i = 0; i < librosColeccion.length; i++) {
    informacionLibro(librosColeccion[i]) }




