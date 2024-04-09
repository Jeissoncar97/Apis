const temaOscuro = ()=>{
    body = document.querySelector('body')
    body.setAttribute("data-bs-theme", "dark")
    body.classList.remove("back")
    navbar = document.querySelector('.navbar')
    navbar.classList.remove("back2")
    navbar.classList.add("backdark")

    document.querySelector('#dl-icon').setAttribute("class", "bi bi-sun-fill sun")
}
const temaClaro = ()=>{
    document.querySelector('body').setAttribute("data-bs-theme", "light")
    document.querySelector('#dl-icon').setAttribute("class", "bi bi-moon-fill moon")
    body.classList.add("back")
    navbar.classList.add("back2")
    navbar.classList.remove("backdark")

    
}
const cambiarTema = ()=>{
    document.querySelector('body').getAttribute("data-bs-theme") === "dark"?
    temaClaro() : temaOscuro()
}