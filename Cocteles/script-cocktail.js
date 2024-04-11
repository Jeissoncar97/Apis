const contenedorporNombre = document.querySelectorAll(".contenedor-general.porNombre");
const contenedorporLetra = document.querySelectorAll(".contenedor-general.porLetra");
const liPorLetra = document.querySelector("#por-letra");
const liPorNombre = document.querySelector("#por-nombre");

liPorLetra.addEventListener("click", () => { 
    contenedorporLetra.forEach(element => {
        element.classList.add("active");
    });

    contenedorporNombre.forEach(element => {
        element.classList.remove("active");
    });
});

liPorNombre.addEventListener("click", () => {
    contenedorporNombre.forEach(element => {
        element.classList.add("active");
    });
    
    contenedorporLetra.forEach(element => {
        element.classList.remove("active");
    });
});



const url1 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
const letraInput = document.querySelector(".letra-coctel");
const btn1 = document.querySelector(".btn1");
const resultadosContainer1 = document.querySelector(".resultado1");
let contador = 1

btn1.addEventListener("click", ()=> {obtenerCocteles1(url1)});
letraInput.addEventListener("keydown", function(event){
   if (event.key === "Enter") {
    obtenerCocteles1(url1);
   } 
});

function obtenerCocteles1(url1){
    const letra = letraInput.value; // Obtener el valor del input keyup
    fetch(url1 + letra)
        .then(response => response.json())
        .then(data => {
            
            const cocteles = data.drinks;
            let html = '';
            resultadosContainer1.innerHTML = '';
            
            cocteles.forEach(coctel => {
                let instructions
                if (coctel.strInstructionsES != undefined)
                {
                    instructions = coctel.strInstructionsES
                }else {
                    instructions = coctel.strInstructions
                }
                html += `
                    <div class="resultado">
                        <h2>${contador}. ${coctel.strDrink}</h2>
                        <p><strong>Categoría: </strong>${coctel.strCategory}</p>
                        <p><strong>Instrucciones: </strong>${instructions}</p>
                        <img src="${coctel.strDrinkThumb}" alt="coctel">
                        
                    </div>
                `;
                contador++
            });
            resultadosContainer1.innerHTML = html;
            contador = 0

        })
        .catch(error => {
            let html = '';
            resultadosContainer.innerHTML = '';
            html += `
                <p>Error Puebe con otra letra</p>
            `;
        });
}

const url2 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const nombreInput = document.querySelector(".nombre-coctel");
const btn2 = document.querySelector(".btn2");
const resultadosContainer2 = document.querySelector(".resultado2");


btn2.addEventListener("click", ()=> {obtenerCocteles2(url2)});
nombreInput.addEventListener("keydown", function(event){
   if (event.key === "Enter") {
    obtenerCocteles2(url2);
   } 
});

function obtenerCocteles2(url2){
    contador = 1
    const nombre = nombreInput.value; // Obtener el valor del input keyup
    console.log(url2+nombre);
    fetch(url2 + nombre)
        .then(response => response.json())
        .then(data => {
            
            const cocteles = data.drinks;
            console.log(cocteles)
            let html = '';
            resultadosContainer2.innerHTML = '';
            
            cocteles.forEach(coctel => {
                let instructions
                if (coctel.strInstructionsES != undefined)
                {
                    instructions = coctel.strInstructionsES
                }else {
                    instructions = coctel.strInstructions
                }
                html += `
                    <div class="resultado">
                        <h2>${contador}. ${coctel.strDrink}</h2>
                        <p><strong>Categoría: </strong>${coctel.strCategory}</p>
                        <p><strong>Instrucciones: </strong>${instructions}</p>
                        <img src="${coctel.strDrinkThumb}" alt="coctel">
                        
                    </div>
                `;
                contador++
               
            });

            resultadosContainer2.innerHTML = html;
        })
        .catch(error => {
            let html = '';
            resultadosContainer2.innerHTML = '';
            html += `
                <p>Error Puebe con otra letra</p>
            `;
        
            
        });
}