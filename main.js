const usuarios = [
    {nombre: "Antonio", edad: 34},
    {nombre: "Miguel", edad: 24},
    {nombre: "Sofia", edad: 27},
    {nombre: "Josefa", edad: 22},
];

function validacionEdad(usuario) {
    if  (usuario.edad < 0){
        console.log("La edad no puede ser negativa");
        return false;
    }
    return true;
}

function calcularPromedioEdad(usuarios) {
    let totalEdades = 0;
    let contador = 0;
    for (let i = 0; i < usuarios.length; i++){
        if (validacionEdad(usuarios[i])){
            totalEdades += usuarios[i].edad;
            contador++;
        }
    }
    return totalEdades / contador;
}

function usuarioNuevo() {
    const nombre = prompt("Ingrese su nombre");
    const edadString = prompt("Ingrese su edad");
    const edad = parseInt(edadString);

    if (isNaN(edad) || edad < 0){
        alert("La edad no puede ser negativa");
        return;
    }
    usuarios.push({nombre, edad});
    alert("Usuario agregado con éxito");
    console.log("Usuario agregado con éxito"); 
}

usuarioNuevo();

const nuevoPromedio = calcularPromedioEdad(usuarios);
const promedio = calcularPromedioEdad(usuarios);
console.log("Promedio de edad: " + promedio);
alert("Promedio de edad: " + promedio)
