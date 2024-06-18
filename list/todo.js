const tareaInput = document.querySelector('#tareaInput');
const btnAddtarea = document.querySelector('#btnTarea');

function leerTarea() {
    btnAddtarea.addEventListener('click', () => {
        btnAddtarea.blur();
        if(!tareaInput.value){
            notTareaInput()
            return
            
        }else{
            createTarea(tareaInput.value)
        }
        tareaInput.value = "";
    });
}

function createTarea (tarea){
    const contenedorTareas = document.querySelector('#contenedor-tareas')
    const tareaList = document.createElement("ul")
    contenedorTareas.append(tareaList)

    const tareaLi = document.createElement("li")
    tareaLi.textContent = tarea
    tareaList.append(tareaLi)

    const btnDeleteTarea = document.createElement("button")
    btnDeleteTarea.classList.add("btnDeleteTarea")
    btnDeleteTarea.textContent = "X"
    tareaList.append(btnDeleteTarea)
    
    btnDeleteTarea.addEventListener('click', ()=>{
        contenedorTareas.removeChild(tareaList)
    })

}

function notTareaInput(){
    const contenedorTareas = document.querySelector('body')
    const noTareaCont = document.createElement("div")
    noTareaCont.classList.add("noTarea")
    contenedorTareas.append(noTareaCont)

    const noTareaTitle = document.createElement("h2")
    noTareaTitle.textContent = "No ha ingresado una tarea valida"
    noTareaCont.append(noTareaTitle)
    setTimeout(()=>{
        contenedorTareas.removeChild(noTareaCont)
    },1000)
}

leerTarea();

