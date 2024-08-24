const input = document.querySelector('input');
const listContainer = document.querySelector('#listContainer')
const button = document.querySelector("button")

button.addEventListener('click', (e) => {
    addTask();
})

function addTask() {
    if (input.value === '') {
        alert("You must write something")
    }
    else {
        let list = document.createElement('li');
        list.innerHTML = input.value;
        listContainer.appendChild(list);
        let remove = document.createElement('span');
        remove.innerHTML = "remove"
        list.appendChild(remove)
    }
    input.value = '';
    saveData();
}


listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === 'SPAN')
    {
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showTask()
