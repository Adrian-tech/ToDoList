let $taskInput; //Enetr task conntent
let $taskAddBtn; //Adding new task
let $alertInfo; //Information
let $taskList; //Ul list of task
let $listElemnt; //New task list element
let $allElemnts; //Checks list length
let $popup; //Editor body
let $editedToDo;
let $popupInfo; //Editor Information
let $popupInput; //Task content
let $popupAccept; //Commits changes
let $popupCancle; //Closing editor 
let $taskId = 0;

const main = () => {
    prepereDOMElements();
    prepereDOMEvents();
}

//Download items
const prepereDOMElements = () => {
    $taskInput = document.querySelector('.todo-input');
    $taskAddBtn = document.querySelector('.add-btn');
    $taskList = document.querySelector('ul');
    $alertInfo = document.querySelector('.alert-info');
    //popup elemnts
    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popup-info');
    $popupInput = document.querySelector('.popup-input');
    $popupAccept = document.querySelector('.accept');
    $popupCancle = document.querySelector('.cancle');
    $allElemnts = $taskList.getElementsByTagName('li');
};

//Check Events
const prepereDOMEvents = () => {
    $taskAddBtn.addEventListener('click', addNewTask);
    $taskList.addEventListener('click', checkClick);
    $popupAccept.addEventListener('click', changeToDO);
    $popupCancle.addEventListener('click', closePopup);
    $taskInput.addEventListener('keyup', enterCheck);
};

//Adding new task to list
const addNewTask = () => {
    if ($taskInput.value != 0) {
        $taskId++;
        const taskContent = $taskInput.value;
        $listElemnt = document.createElement('li');
        $listElemnt.innerText = taskContent;
        $listElemnt.setAttribute('id', `task-num${$taskId}`);
        $taskList.appendChild($listElemnt);

        $alertInfo.innerText = '';
        $taskInput.value = '';

        addTools();
    }else{
        $alertInfo.innerText = 'Podaj terść zadania.';
    }
};

//Chceking enter click and evokes addNewTask function
const enterCheck = () => {
    if (event.keyCode === 13) {
        addNewTask();
    };
};

//Adding task tools
const addTools = () => {
    const tools = document.createElement('div');
    tools.classList.add('tools');
    $listElemnt.appendChild(tools);
    
    $completeBtn = document.createElement('button');
    $completeBtn.classList.add('complete');
    $completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    $editBtn = document.createElement('button');
    $editBtn.classList.add('edit');
    $editBtn.innerHTML = 'edit';
    $deleteBtn = document.createElement('button');
    $deleteBtn.classList.add('delete');
    $deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    tools.appendChild($completeBtn);
    tools.appendChild($editBtn);
    tools.appendChild($deleteBtn);
};

//Chcecking which one tool was cliced
const checkClick = (event) => {
    if (event.target.closest('button').classList.contains('complete')) {
        event.target.closest('li').classList.toggle('completed');
        event.target.closest('button').classList.toggle('completed');
    } else if (event.target.closest('button').classList.contains('edit')){
        editTask();
    } else if(event.target.closest('button').classList.contains('delete')){
        deleteTask();
    };
};

//Opening task editor
const editTask = () => {
    const oldTask = event.target.closest('li').id;
    $editedToDo = document.getElementById(oldTask);
    $popupInput.value = $editedToDo.firstChild.textContent;
    $popup.style.display = 'block';
};

//Change task content
const changeToDO = () => {
    if ($popupInput.value != 0) {
        $editedToDo.firstChild.textContent = $popupInput.value;
        closePopup();
    }else{
        $popupInfo.innerText = 'Zadanie musi zawietrać jakąś treść.'
    }
};

//Closing editor
const closePopup = () => {
    $popupInfo.innerText = '';
    $popup.removeAttribute('style');
}

//Removing task 
const deleteTask = () => {
    event.target.closest('li').remove();
    if ($allElemnts.length === 0) {
        $alertInfo.innerText = 'Brak zdań na liście.';
    };
}; 

document.addEventListener('DOMContentLoaded', main)