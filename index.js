let tareas = []; //array donde se guardaran las tareas

document.getElementById("agregarTarea").addEventListener("click", function () {
    let nuevaTarea = {
        titulo: prompt("Nombre tarea"),
        descripcion: prompt("Descripcion de la tarea"),
        fecha: prompt("Fecha"),
        estado: "pendiente"
    };
    tareas.push(nuevaTarea);
    console.log("Tarea agregada exitosamente.")
}); //Funcion que permite agregar una tarea al array tarea

// document.getElementById("mostrarTarea").addEventListener("click", function () {
//     let titulo = prompt("Ingrese el titulo de la tarea que desea encontrar:");
//     let tareaEncontrada = encontrarTareaPorTitulo(titulo);

//     if (tareaEncontrada) {
//         console.log("Tarea encontrada:", tareaEncontrada);
//     } else {
//         console.log("Tarea no encontrada.");
//     }
// });//funcion que permite buscar tarea por titulo

document.getElementById("marcarComoCompletada").addEventListener("click", function () {
    let index = parseInt(prompt("Ingrese el numero de la tarea que desea marcar"));
    if (index > 0 && index <= tareas.length) {
        tareas[index - 1].estado = "completada";
    } else {
        console.log("Tarea no encontrada");
    }
});//funcion que permite cambiar el estatus de una tarea a completado

// function listarTareas() {
//     console.log("Tareas: ");
//     tareas.forEach((tarea, index) => {
//         console.log(`${index + 1}. ${tarea.titulo} - ${tarea.estado}`);
//     });
// }
document.getElementById("mostrarLista").addEventListener("click", function () {
    console.log("Tareas: ", tareas);
    tareas.forEach((tareas, index) => {
        console.log(`${index + 1}. ${tareas.titulo} - ${tareas.estado}`);
    })
});

function encontrarTareaPorTitulo(titulo) {
    return tareas.find(tarea => tarea.titulo === titulo);
}


document.getElementById("encontrarTarea").addEventListener("click", function () {
    let titulo = prompt("Ingrese el título de la tarea que desea encontrar:");
    let tareaEncontrada = tareas.find(tarea => tarea.titulo === titulo);

    if (tareaEncontrada) {
        console.log("Tarea encontrada:", tareaEncontrada);
    } else {
        console.log("Tarea no encontrada.");
    }
});


let tareaEncontrada = encontrarTareaPorTitulo("");
if (tareaEncontrada) {
    console.log("Tarea encontrada:", tareaEncontrada);
} else {
    console.log("Tarea no encontrada.")
}

function obtenerTareasPendientes() {
    return tareas.filter(tarea => tarea.estado === "pendiente");
}

