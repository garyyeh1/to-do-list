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
    mylibrary.push(newEntry) //test
    console.table(mylibrary) //test
    
    localStorage.setItem("task", JSON.stringify(newEntry));
    let display = JSON.parse(localStorage.getItem("task"))

    let entry = document.querySelector('#entry')
    let entryDiv = document.createElement("div")
    entryDiv.setAttribute("id",'task1')

    //displaying entries dynamically
    let data = Object.entries(display)
    for(i = 0; i<data.length; i++){
        let entryContent = document.createElement("p")
        entryContent.setAttribute("class", data[i][0])
        entryContent.textContent += data[i][1]
        entryDiv.append(entryContent)
    }
    
    
    entry.append(entryDiv)


    console.log(data[0][1])
    
    //why localStorage gets replaced everytime?
    //when refresh the data should be saved


    //need to use localStorage.key() later to loop through different task entries
}