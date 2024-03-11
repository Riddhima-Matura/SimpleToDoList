let input = document.getElementById("task")
let list = document.getElementById("newlist")

function Add(){
    if(input.value == ""){
        alert("Please Enter Your Task");
    }
else{
    let items = document.createElement("li");
    items.innerHTML = ` ${input.value} <i class="fa-solid fa-trash"></i> `;
    list.appendChild(items);
    input.value = "";
    items.querySelector("i").addEventListener("click", remove)
    function remove(){
        items.remove()
    }
}
}