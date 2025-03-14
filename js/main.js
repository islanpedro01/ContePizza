const nameInput = document.getElementById("nome")
const nameInputButton = nameInput.button
const contadoresContainer = document.getElementById("contadores")

function addContador(){
  contadoresContainer.innerHTML += `<div class ="mt-10 flex flex-row justify-center h-12"> <label class="font-semibold self-center text-center w-32 overflow-hidden">`+ nameInput.value +`</label> <div class="relative ml-2 h-full"> <button class="absolute"><i class="fa-solid fa-circle-minus"></i></button> <input type="text" value="0" class="block h-full w-24 text-center text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" readonly/> <button class="absolute end-5"><i class="fa-solid fa-circle-plus"></i></button> </div> </div>`


}