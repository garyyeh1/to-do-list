document.getElementById("myForm").addEventListener("submit", addTask)
let mylibrary =[]
class CreateObject {
    constructor(newTask, newDate, newTime){
        this.TASK = newTask;
        this.DATE = newDate;
        this.TIME = newTime;
    }
}

function addTask(e){
    e.preventDefault();
    let newTask = document.getElementById("task").value
    let newDate = document.getElementById("date").value
    let newTime = document.getElementById("time").value

    let newEntry = new CreateObject (newTask, newDate, newTime)
    mylibrary.push(newEntry)
    console.table(mylibrary)
    let user = localStorage.setItem("task", JSON.stringify(newEntry));
    console.log(user)
}