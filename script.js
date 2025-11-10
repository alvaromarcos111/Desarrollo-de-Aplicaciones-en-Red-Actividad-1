window.addEventListener("scroll", function(){
    const button = document.querySelector("#volver");
    // Mostrar el botón solo si el usuario ha llegado al final de la página
    if((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        button.style.display = "flex";
    }else {
        button.style.display = "none";
    }
});

// Evento click para que al hacer clic el botón haga scroll hacia arriba
button.addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: "smooth"});
});


