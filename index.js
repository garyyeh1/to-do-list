document.getElementById("myForm").addEventListener("submit", addTask)
class CreateObject {
    constructor(newTask, newDate, newTime){
        this.TASK = newTask;
        this.DATE = newDate;
        this.TIME = newTime;
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

    let newEntry = new CreateObject (newTask, newDate, newTime)
    mylibrary.push(newEntry) //test
    console.table(mylibrary) //test
    
    localStorage.setItem("task", JSON.stringify(mylibrary));
    let display = JSON.parse(localStorage.getItem("task"))
    // console.log(display)

    renderTask(display)
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
            entryDiv.append(entryContent)
        })
        entry.append(entryDiv)
    }
}


//reset input fields
function reset(){
    let taskFields = document.getElementById("task")
    let dateFields = document.getElementById("date")
    let timeFields = document.getElementById("time")
    taskFields.value =""
    dateFields.value =""
    timeFields.value =""
}