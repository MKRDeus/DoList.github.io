//add task
const form = document.querySelector('#form');
const taskIn = document.querySelector('#add-in');

//list
const list = document.querySelector('#list');
const deleteButton = document.querySelector('#delete-button');
var numList = document.getElementsByTagName("li").length;

//iterators
const aTask = document.querySelector('#total-iterator');
const iComplete = document.querySelector('#complete-iterator');
const itIncomplete = document.querySelector('#incomplete-iterator');

//iterators
var it = 1;//incomplete iterator
var ic = 1;//confirm iterator
//add task
form.addEventListener('submit', e => {
    e.preventDefault();
    const item = document.createElement('li');
    const taskText = document.createElement('div');
    const buttonContainer = document.createElement('div');
    const deleteButton = document.createElement('button');
    const confirmButton = document.createElement('button');
    //add text to list
    taskText.innerHTML = taskIn.value;
//    taskText.append(taskIn.value);
    //add id
    taskText.setAttribute('id', 'task');
    buttonContainer.setAttribute('id', 'buttons-container');
    deleteButton.setAttribute('id', 'delete-button');
    confirmButton.setAttribute('id', 'confirm-button');
    //add text to button
    deleteButton.innerHTML = 'Delete';
    confirmButton.innerHTML = 'Done';
    //add buttons to container
    buttonContainer.append(deleteButton);
    buttonContainer.append(confirmButton);
    //add elements to list
    item.append(taskText);
    item.append(buttonContainer);
    //length of ul
    numList++;
    itIncomplete.innerHTML = numList;
    //total
    aTask.innerHTML = it++;

    item.classList.add('tasks');
    list.appendChild(item);

    //delete task
    deleteButton.addEventListener("click", function () {
        list.removeChild(item);
        numList--;
        itIncomplete.innerHTML = numList;
    })
    //function confirm task
    confirmButton.addEventListener("click", function () {
        list.removeChild(item);
        iComplete.innerHTML = ic++;
        numList--;
        itIncomplete.innerHTML = numList;
    })
})
// clean input
form.addEventListener('submit', e => {
    e.preventDefault();
    taskIn.value = '';
});
