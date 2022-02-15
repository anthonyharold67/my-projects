let taskBox = document.querySelector(".tasks");
let addInput = document.querySelector("input");
let addButton = document.querySelector("span");
let clearTaskButton = document.querySelectorAll(".fa-times");
let clearButton = document.querySelector("#reset");
clearButton.addEventListener("click", deleteElement);
addButton.addEventListener("click", addElement); 
function addElement(){
    if(addInput.value == ""){
        alert("Please enter a task.")
    }else{ 
        let taskElem = document.createElement("LI");
        
        let newSpan = document.createElement("SPAN");
        let newSmall = document.createElement("SMALL");
        let newInput = document.createElement("INPUT");
        newInput.setAttribute("type", "checkbox");
        newInput.setAttribute("value", "x");

        let date = new Date().toLocaleDateString('en-ca');
        let now = date
        let addTime = document.createTextNode(now);
        let itemVal = document.createTextNode(addInput.value);

        
        newSmall.appendChild(addTime);
        newSpan.appendChild(itemVal);
        newSpan.appendChild(newSmall);
        let i = document.createElement("i");
            
        i.classList = "fas fa-times";
        
        taskElem.appendChild(i);
        
    
        taskElem.appendChild(newInput);
        taskElem.appendChild(newSpan);
        document.getElementsByClassName("taskItems")[0].appendChild(taskElem);
        clearTaskButton = document.querySelectorAll(".fa-times");
    
        for (let i = 0; i < clearTaskButton.length; i++) {
            clearTaskButton[i].addEventListener("click", clearTask);
        }   
    }
    document.querySelector("input").value = "";
}
function clearTask() {
    let choices = confirm("Are you sure?");
    if (choices == true) {
        let deleteTask = this.parentElement;
        deleteTask.remove();
    }
}   
function deleteElement() {
    let choices = confirm("Are you sure?");
    if (choices == true) {
        let deleteTasks = document.querySelectorAll("li");
        for (let j = 0;j<deleteTasks.length;j++){
            deleteTasks[j].remove();
        }
    }
}

