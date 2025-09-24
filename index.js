document.getElementById("myForm").addEventListener("submit", addTask)
class CreateObject {
    constructor(newTask, newDate, newTime, completed =false){
        this.TASK = newTask;
        this.DATE = newDate;
        this.TIME = newTime;
        this.COMPLETED = completed;
    }
}
let mylibrary = JSON.parse(localStorage.getItem('task'))

//so that display does not reset after page is refreshed
window.addEventListener("DOMContentLoaded", pageLoad)
function pageLoad(){

    let displayOLD = localStorage.getItem("task") 
    ? JSON.parse(localStorage.getItem("task")) 
    : [];
    renderTask(displayOLD)
    mylibrary = displayOLD;
}

//button to add new task
function addTask(e){
    e.preventDefault();
    let newTask = document.getElementById("task").value
    let newDate = document.getElementById("date").value
    let newTime = document.getElementById("time").value
    let completed = document.getElementById("completed").checked


    let newEntry = new CreateObject (newTask, newDate, newTime, completed)
    mylibrary.push(newEntry) //test
    console.table(mylibrary) //test
    
    localStorage.setItem("task", JSON.stringify(mylibrary));
    renderTask(mylibrary)
    reset()

    }   
function renderTask(display){
    let entry = document.querySelector('#entry')
    
    entry.innerHTML = ""; // prevents duplication

    //displaying entries dynamically
    for(let i = 0; i<display.length; i++){
        let entryDiv = document.createElement("div")
        entryDiv.setAttribute("class",'task')
        let data = Object.entries(display[i])
        data.forEach(([key,value])=>{
            let entryContent = document.createElement("p")
            entryContent.setAttribute("class", key)
            entryContent.textContent = value
            if (key === "COMPLETED") {
                entryContent.textContent = value ? "Task Completed" : "Task Incompleted";
                completedParagraph = entryContent // Save reference 
            }

            entryDiv.append(entryContent)

        })


        let removeTask = document.createElement('button')
        removeTask.addEventListener("click", remove)
        removeTask.textContent = "Delete task"
        entryDiv.append(removeTask)

        toggleCompleted(i, entryDiv, completedParagraph, display[i])




        function remove(){
        
            mylibrary.splice(i,1)
            localStorage.setItem("task", JSON.stringify(mylibrary));
        
            renderTask(display)
        }

        entry.append(entryDiv)

    }

    

}



//reset input fields
function reset(){
    let taskFields = document.getElementById("task")
    let dateFields = document.getElementById("date")
    let timeFields = document.getElementById("time")
    let completed = document.getElementById("completed")

    taskFields.value =""
    dateFields.value =""
    timeFields.value =""
    completed.checked = false
}


function toggleCompleted(i, entryDiv, completedParagraph, task){
    let toggleButtonDiv = document.createElement("div")
    let toggleButton = document.createElement("input")
    toggleButton.setAttribute("type", "checkbox")
    toggleButton.setAttribute("id", `toggle-${i}`)

    toggleButtonDiv.append(toggleButton)
    entryDiv.append(toggleButtonDiv)  
    
    let getToggle = JSON.parse(localStorage.getItem("task"));
    toggleButton.checked = task.COMPLETED;
    toggleButton.addEventListener("click", activate)

    function activate(){
        let completed = toggleButton.checked
        // console.log(completed) initial state
        // let getToggle = JSON.parse(localStorage.getItem("task"))
        // console.log(getToggle[i].COMPLETED)
        
        //update UI
        if (completedParagraph) {
            completedParagraph.textContent = "Task Completed";
        }

        //update localStorage
        if (completed){           
            getToggle[i].COMPLETED = true
            localStorage.setItem("task", JSON.stringify(getToggle));

            //test
            console.log(getToggle[i].COMPLETED) 
            console.log("task completed")
        }else{
            getToggle[i].COMPLETED = false
            localStorage.setItem("task", JSON.stringify(getToggle));
            completedParagraph.textContent = "Task Incomplete";

            //test
            console.log("unchecked")
        }
    }
}