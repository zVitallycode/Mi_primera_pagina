/* const select = document.getElementById("gustos");
const imagen = document.getElementById("imagen-gusto");

const imagenes = {
    seleccione: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3lpqWXaBA54EJ7Msfg3oG_ogt0OCPOgR09Q-_WUE4w&s=10",
    peliculas: "https://m.media-amazon.com/images/M/MV5BYmE0NWE5MDYtZTZhZi00Y2JiLTgyNzctOWQxZTgzZTQ4MDhiXkEyXkFqcGc@._V1_.jpg",
    futbol: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmx5uA7aRB0H7W7JNWeyZcxb8s-8OjRgp3tmNjE2UXuRYDsHIMLO4hgrcP&s=10",
    musica: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8jOCVbGkU7VZjRtuv0EzIWjOPIxg15vGw3WRgokALMm5pU3aCKJe7RbQ&s=10"
} */

const select = document.getElementById("gustos");
const imagen = document.getElementById("imagen-gusto");
const textoGusto = document.getElementById("texto-gusto");

const imagenes = {
    seleccione: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3lpqWXaBA54EJ7Msfg3oG_ogt0OCPOgR09Q-_WUE4w&s=10",
    peliculas: "https://m.media-amazon.com/images/M/MV5BYmE0NWE5MDYtZTZhZi00Y2JiLTgyNzctOWQxZTgzZTQ4MDhiXkEyXkFqcGc@._V1_.jpg",
    futbol: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmx5uA7aRB0H7W7JNWeyZcxb8s-8OjRgp3tmNjE2UXuRYDsHIMLO4hgrcP&s=10",
    musica: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8jOCVbGkU7VZjRtuv0EzIWjOPIxg15vGw3WRgokALMm5pU3aCKJe7RbQ&s=10"
};

const textos = {
    seleccione: "",
    peliculas: "Mi película favorita es Réquiem por un sueño. Me gusta por su intensidad y la forma tan fuerte en que cuenta su historia.",
    futbol: "El fútbol es mi deporte favorito y mi equipo es el Atlético Nacional. Me encanta ver los partidos y la pasión de la hinchada.",
    musica: "Me gusta mucho la música y mi artista favorito es Dei V."
};

select.addEventListener("change", function () {
    imagen.src = imagenes[select.value];
    textoGusto.textContent = textos[select.value];
});

select.addEventListener("change", function () {
    imagen.src = imagenes[select.value];
});

const NUMERO_SECRETO = 55;

const inputNumero = document.getElementById("adivinar");
/* const botonAdivinar = document.getElementById("btn-adivinar"); */
const mensaje = document.getElementById("mensaje");



inputNumero.addEventListener("input", function () {
    if (Number(inputNumero.value) > 100) {
        inputNumero.value = 100;
    }
});


inputNumero.addEventListener("input", function () {
    const intento = Number(inputNumero.value);

    if (inputNumero.value === "" || intento < 1 || intento > 100) {
        mensaje.textContent = "Escribe un número entre 1 y 100.";
        return;
    }

    if (intento === NUMERO_SECRETO) {
        mensaje.textContent = "¡Correcto! Mi número favorito es el 55 ";
    } else if (intento < NUMERO_SECRETO) {
        mensaje.textContent = "Más alto ⬆️";
    } else {
        mensaje.textContent = "Más bajo ⬇️";
    }

});


/* botonAdivinar.addEventListener("click", adivinar); */

/* inputNumero.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        adivinar();
    }
}); */

let botonProf = document.getElementById("boton")

botonProf.onclick = function (){
    alert("Profe dejenos salir mas temprano al final de la clase")
}