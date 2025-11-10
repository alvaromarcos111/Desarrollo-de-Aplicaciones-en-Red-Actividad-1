window.addEventListener("scroll", function(){
    const boton = document.querySelector("#volver");
    // Mostrar el botón solo si el usuario ha llegado al final de la página
    if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        boton.style.display = "flex";
    }else {
        boton.style.display = "none";
    }
});

// Evento click para que al hacer clic el botón haga scroll hacia arriba
botonvolver = document.querySelector(".button");
botonvolver.addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: "smooth"});
});


