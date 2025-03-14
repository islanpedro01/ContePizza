const nameInput = document.getElementById("nome")
const nameInputButton = nameInput.button
const contadoresContainer = document.getElementById("contadores")

var i = 0;


function addContador() {

i += 1;
console.log(i)



  contadoresContainer.innerHTML += `<div class="mt-10 flex flex-row justify-center h-12"> 
                <div class="ml-2 h-full flex "> 
                    <input type="text" value="`+ nameInput.value + `"class="font-semibold  text-[1rem] self-center text-center w-32 overflow-hidden block h-full w-24 text-center text-sm text-gray-900 border border-gray-400 active:border-none bg-gray-50"readonly/>
                           <span class="relative overflow-hidden"> 
                            <button onclick="removerFatia()" class="botao`+i+` absolute start-0 -top-1.5 text-xl bg-blue-600 text-white rounded-md py-4 px-2.5 cursor-pointer">
                                <i class="fa-solid fa-minus pointer-events-none"></i>
                            </button>
                            <input type="text" value="0"
                        class="botao`+i+` block h-full w-42 text-center text-2xl text-gray-900 border border-gray-400 rounded-lg bg-gray-50"
                        readonly /> <button onclick="addfatia()" class="botao`+i+` absolute end-0 -top-1.5 text-xl bg-blue-600 text-white rounded-md py-4 px-2.5 cursor-pointer"><i class="fa-solid fa-plus pointer-events-none"></i></button> </span></div>`
  nameInput.value = ""

}

function addfatia(){
  event.target.previousElementSibling.value++

}

function removerFatia(){
  if (event.target.nextElementSibling.value > 0){
    event.target.nextElementSibling.value--
  }
  
}