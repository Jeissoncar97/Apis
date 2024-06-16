const tareaInput = document.querySelector('#tareaInput');
const btnAddtarea = document.querySelector('#btnTarea');

function leerTarea() {
    btnAddtarea.addEventListener('click', () => {
        createTarea(tareaInput.value)
        tareaInput.value = "";
        btnAddtarea.blur();
    });
}

leerTarea();

function createTarea (tarea){
    const contenedorTareas = document.querySelector('#contenedor-tareas')
    const tareaList = document.createElement("ul")
    contenedorTareas.append(tareaList)

    const tareaLi = document.createElement("li")
    tareaLi.textContent = tarea
    tareaList.append(tareaLi)

    const deleteTarea = document.createElement("button")
    deleteTarea.textContent = "X"
    tareaList.append(deleteTarea)

}
