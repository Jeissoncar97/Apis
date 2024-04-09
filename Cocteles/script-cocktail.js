const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
const letraInput = document.querySelector(".letra-coctel");
const btn = document.querySelector(".btn-letra");
const resultadosContainer = document.querySelector(".resultados");
let contador = 1

btn.addEventListener("click", obtenerCocteles);
letraInput.addEventListener("keydown", function(event){
   if (event.key === "Enter") {
    obtenerCocteles();
   } 
});

function obtenerCocteles(){
    const letra = letraInput.value; // Obtener el valor del input keyup
    fetch(url + letra)
        .then(response => response.json())
        .then(data => {
            
            const cocteles = data.drinks;
            let html = '';
            traduccionInstric = cocteles.strInstructions
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
                    <div>
                        <h2>${contador}. ${coctel.strDrink}</h2>
                        <p>Categoría: ${coctel.strCategory}</p>
                        <p>Instrucciones: ${instructions}</p>
                        <img src="${coctel.strDrinkThumb}" alt="coctel">
                        
                    </div>
                `;
                contador++
            });

            // Agregar el HTML acumulado al contenedor de resultados
            resultadosContainer.innerHTML = html;
        })
        .catch(error => {
            let html = '';
            resultadosContainer.innerHTML = '';
            html += `
                <p>Error Puebe con otra letra</p>
            `;
        });
}


const url2 = "https://es.libretranslate.com/translate"


