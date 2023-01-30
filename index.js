const checkearUsuario = () => {
    let usuarioLS = localStorage.getItem("usuario")
    let usuario = ""

    if (usuarioLS) {
        usuario = usuarioLS
    } else {
        usuario = prompt("Ingrese su nombre:");
        localStorage.setItem("usuario", usuario);
    }

    alert(`Hola ${usuario}. Te doy la bienvenida a mi proyecto`);

}

checkearUsuario()

const enviarDatos = document.querySelector("#botonEnviar")
const mensaje = []
const inputNombre = document.querySelector("#name");
const inputMail = document.querySelector("#mail");
const inputMensaje = document.querySelector("#msg");
const modalMensaje = document.getElementById("modalContainer");


enviarDatos.addEventListener("click", () => {
    mensaje.length = 0
    mensaje.push(inputNombre.value)
    mensaje.push(inputMail.value)
    mensaje.push(inputMensaje.value)
    localStorage.setItem("mensaje", JSON.stringify(mensaje))

    console.log(`Hola ${inputNombre.value}.
                 Gracias por tu mensaje:
                 "${inputMensaje.value}"
                 En breve nos contactaremos al siguiente mail:
                 ${inputMail.value}
                 Saludos cordiales`)

    modalMensaje.classList.remove("animado")
    setTimeout(() => modalMensaje.classList.add("animado"), 100)
    

    modalMensaje.innerHTML = `Hola ${inputNombre.value}.
                       Gracias por tu mensaje.
                       En breve nos contactaremos al siguiente mail:
                       ${inputMail.value}`
})

