const friccionSi = document.getElementById("friccionSi")
const friccionNo = document.getElementById("friccionNo")
const calcular = document.querySelector("#calcular")
const contenedorFriccion = document.querySelector(".contenedorFriccion")

friccionSi.addEventListener("click", (e) =>{
    e.preventDefault();
    mostrarFriccion();
})
friccionNo.addEventListener("click", (e) =>{
    e.preventDefault();
    noMostrarFriccion();
})

const mostrarFriccion = () =>{
    contenedorFriccion.style.display = "block"
}
const noMostrarFriccion = () =>{
    contenedorFriccion.style.display = "none"
}


const calcularTodo = () => {
    const masa = +(document.getElementById("masa")).value
    const fuerza = +(document.getElementById("fuerza")).value
    const friccion = document.getElementById("friccion").value

    let ue = 0
    let ud = 0
    const gravedad = 10
    const N = masa*gravedad
    const fre = ue * N

    switch(friccion){
        case("nada"):
            ue = 0;
            ud = 0;
            break;
        case("madera"):
            ue = 0.5;
            ud = 0.3;
            break;
        case("acheroHielo"):
            ue = 0.02;
            ud = 0.02;
            break;
        case("cauchoTeflon"):
            ue = 0.04;
            ud = 0.04;
            break;
        case("teflon"):
            ue = 1;
            ud = 0.8;
            break;
        case("vidrio"):
            ue = 0.9;
            ud = 0.4;
            break;
        case("esquiNieve"):
            ue = 0.1;
            ud = 0.05;
            break;
        case("maderaCuero"):
            ue = 0.5;
            ud = 0.4;
            break;
        case("aluminioAcero"):
            ue = 0.61;
            ud = 0.47;
            break;
        case("humano"):
            ue = 0.02;
            ud = 0.003;
            break;
    }

    if (fuerza > fre){
        console.log("se mueve")
        const frd = ud*N
        const a = (fuerza-frd)/masa
        console.log("La aceleracion es " + a + " m/s2")
        let res = "Se mueve. La aceleración es " + a + " m/s2"
        respuesta(res)
    } else {
        console.log("No se vence la friccion")
        console.log("La aceleracion es 0")
        let res = "No se vence la friccion y su aceleracion es 0"
        respuesta(res)
    }

}

calcular.addEventListener("click", (e) => {
    e.preventDefault();
    calcularTodo();
})

const respuesta = (res) => {
    limpiarRespuesta();
    const contenedorRespuesta = document.querySelector(".respuesta")
    const contenidoRespuesta = document.createElement("div")
    contenidoRespuesta.innerHTML = `<p>La respuesta es: ${res}</p>`
    contenedorRespuesta.appendChild(contenidoRespuesta)
}

const limpiarRespuesta = () => {
    const respuestas = document.querySelector("#idRespuestas")
    while (respuestas.firstChild){
        respuestas.removeChild(respuestas.firstChild)
    }
}