let container = document.querySelector(".container");
let userInput = document.getElementById('user').value;
console.log(userInput);

function gridCreater(){
    for(let i=0; i<256; i++){
        let newDiv = document.createElement("div");
        newDiv.style.width = "2rem";
        newDiv.style.height= "2rem";
        newDiv.style.border = "2px solid";
        newDiv.style.margin = "3px"
        container.appendChild(newDiv);
        newDiv.addEventListener("mouseover",()=>{
            newDiv.style.backgroundColor = "red";
        })
        newDiv.addEventListener("click",()=>{
            newDiv.style.backgroundColor= "white";
        })
        newDiv.classList.add("btn")

    }
}


function removeColors(){
    let button = document.querySelectorAll(".btn");
    button.forEach(remove => {
        remove.style.backgroundColor = "white";
    })
}

gridCreater()
let removeButton = document.querySelector(".remove-btn");
removeButton.addEventListener("click",()=>{
    removeColors();
})




