const temaOscuro = ()=>{
    document.querySelector('body').setAttribute("data-bs-theme", "dark")
    document.querySelector('#dl-icon').setAttribute("class", "bi bi-sun-fill sun")
}
const temaClaro = ()=>{
    document.querySelector('body').setAttribute("data-bs-theme", "light")
    document.querySelector('#dl-icon').setAttribute("class", "bi bi-moon-fill moon")
}
const cambiarTema = ()=>{
    document.querySelector('body').getAttribute("data-bs-theme") === "dark"?
    temaClaro() : temaOscuro()
}