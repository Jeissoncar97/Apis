const contenedorporNombre = document.querySelectorAll(".contenedor-general.porNombre");
const contenedorporLetra = document.querySelectorAll(".contenedor-general.porLetra");
const contenedoraleatorio = document.querySelectorAll(".contenedor-general.aleatorio");
const contenedorConAlcohol = document.querySelectorAll(".contenedor-general.conAlcohol");
const liPorLetra = document.querySelector("#por-letra");
const liPorNombre = document.querySelector("#por-nombre");
const liAleatorio = document.querySelector("#aleatorio");
const liConAlcohol = document.querySelector("#con-alcohol");
const liPL = document.querySelector("#por-letra li");
const liPN = document.querySelector("#por-nombre li");
const liA = document.querySelector("#aleatorio li");
const liCA = document.querySelector("#con-alcohol li");
const url1 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
const url2 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const url3 = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
const url4 = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
const letraInput = document.querySelector(".letra-coctel");
const nombreInput = document.querySelector(".nombre-coctel");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const resultadosContainer1 = document.querySelector(".resultado1");
const resultadosContainer2 = document.querySelector(".resultado2");
const resultadosContainer3 = document.querySelector(".resultado3");
const resultadosContainer4 = document.querySelector(".resultado4");
let contador = 1


liPorLetra.addEventListener("click", () => { 
    contenedorporLetra.forEach(element => {
        element.classList.add("active");
        liPL.classList.add("active-a");
        liPN.classList.remove("active-a");
        liCA.classList.remove("active-a");
        liA.classList.remove("active-a");
    });

    contenedorporNombre.forEach(element => {
        element.classList.remove("active");
    });
    contenedoraleatorio.forEach(element => {
        element.classList.remove("active");
    });
    contenedorConAlcohol.forEach(element => {
        element.classList.remove("active");
    })
});

liPorNombre.addEventListener("click", () => {
    contenedorporNombre.forEach(element => {
        element.classList.add("active");
        liPN.classList.add("active-a");
        liPL.classList.remove("active-a");
        liA.classList.remove("active-a");
        liCA.classList.remove("active-a");
    });
    
    contenedorporLetra.forEach(element => {
        element.classList.remove("active");
    });
    contenedoraleatorio.forEach(element => {
        element.classList.remove("active");
    });
    contenedorConAlcohol.forEach(element => {
        element.classList.remove("active");
    }

)});
liAleatorio.addEventListener("click", () => {
    contenedoraleatorio.forEach(element => {
        element.classList.add("active");
        liA.classList.add("active-a");
        liPL.classList.remove("active-a");
        liPN.classList.remove("active-a");
        liCA.classList.remove("active-a");
    });
    
    contenedorporLetra.forEach(element => {
        element.classList.remove("active");

    });
    contenedorporNombre.forEach(element => {
        element.classList.remove("active");
    });
    contenedorConAlcohol.forEach(element => {
        element.classList.remove("active");
    })
    
});
liConAlcohol.addEventListener("click", () => {
    contenedorConAlcohol.forEach(element => {
        element.classList.add("active");
        liCA.classList.add("active-a");
        liA.classList.remove("active-a");
        liPL.classList.remove("active-a");
        liPN.classList.remove("active-a");
    });
    
    contenedorporLetra.forEach(element => {
        element.classList.remove("active");

    });
    contenedorporNombre.forEach(element => {
        element.classList.remove("active");
    });
    contenedoraleatorio.forEach(element =>{
        element.classList.remove("active");
    })
    
});
btn1.addEventListener("click", ()=> {obtenerCocteles(url1,letraInput,resultadosContainer1)});
letraInput.addEventListener("keydown", function(event){
   if (event.key === "Enter") {
    obtenerCocteles(url1,letraInput,resultadosContainer1);
   } 
});
btn2.addEventListener("click", ()=> {obtenerCocteles(url2,nombreInput,resultadosContainer2)});
nombreInput.addEventListener("keydown", function(event){
   if (event.key === "Enter") {
    obtenerCocteles(url2,nombreInput,resultadosContainer2);
    console.log(typeof nombreInput);
   } 
});
liA.addEventListener("click", ()=> {
    obtenerCoctelesAleatorio(url3, resultadosContainer3)
});
btn3.addEventListener("click", ()=> {
    obtenerCoctelesAleatorio(url3, resultadosContainer3)
});
liCA.addEventListener("click", () => {
    obtenerCoctelesConsinAlcohol(url4, resultadosContainer4);
});
function obtenerCocteles(url2,input,resultadosContainer){
    const nombre = input.value;     
    fetch(url2 + nombre)
        .then(response => response.json())
        .then(data => {
            
            const cocteles = data.drinks;
            let html = '';
            resultadosContainer.innerHTML = '';
            
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
                        <h2>${coctel.strDrink}</h2>
                        <p><strong>Categoría: </strong>${coctel.strCategory}</p>
                        <p><strong>Instrucciones: </strong>${instructions}</p>
                        <img src="${coctel.strDrinkThumb}" alt="coctel">
                        
                    </div>
                `;
               
            });

            resultadosContainer.innerHTML = html;
        })
        .catch(error => {
            console.log(error);
        });
}


function obtenerCoctelesAleatorio(url, resultadosContainer){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const cocteles = data.drinks;
        let html = '';
        resultadosContainer.innerHTML = '';
        
        cocteles.forEach(coctel => {
            if (coctel.strInstructionsES != undefined)
            {
                instructions = coctel.strInstructionsES
            }else {
                instructions = coctel.strInstructions
            }
            html += `
                <div class="resultado">
                    <h2>${coctel.strDrink}</h2>
                    <p><strong>Categoría: </strong>${coctel.strCategory}</p>
                    <p><strong>Instrucciones: </strong>${instructions}</p>
                    <img src="${coctel.strDrinkThumb}" alt="coctel">
                    
                </div>
            `;

        });
        resultadosContainer.innerHTML = html;
    })
}

function obtenerCoctelesConsinAlcohol(url, resultadosContainer){
    fetch(url)
    .then(respose =>respose.json())
    .then(data => {
        const cocteles = data.drinks;
        console.log(cocteles)
        let html = '';
        resultadosContainer.innerHTML = '';
        
        cocteles.forEach(coctel => {
            html += `
                <div class="resultado">
                    <h2>${coctel.strDrink}</h2>
                    <img src="${coctel.strDrinkThumb}" alt="coctel">
                    
                </div>
            `;
        })
        resultadosContainer.innerHTML = html;

    })
}