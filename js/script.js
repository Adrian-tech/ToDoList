let $taskInput;
let $taskAddBtn;
let $alertInfo;
let $taskList;
let $tools;
let $listElemnt;
let $completeBtn;
let $editBtn;
let $deleteBtn;

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
};

const prepereDOMEvents = () => {
    $taskAddBtn.addEventListener('click', addNewTask)
};

//Adding new task to list
const addNewTask = () => {
    if ($taskInput.value != 0) {
        const taskContent = $taskInput.value;
        $listElemnt = document.createElement('li');
        $listElemnt.innerText = taskContent;
        $taskList.appendChild($listElemnt);
        $alertInfo.innerText = '';
        $taskInput.value = '';

        addTools();
    }else{
        $alertInfo.innerText = 'Podaj terść zadania.';
    }
};

const addTools = () => {
    $tools = document.createElement('div');
    $tools.classList.add('tools');
    $listElemnt.appendChild($tools);
    
    $completeBtn = document.createElement('button');
    $completeBtn.classList.add('complete');
    $completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    $editBtn = document.createElement('button');
    $editBtn.classList.add('edit');
    $editBtn.innerHTML = 'edit';
    $deleteBtn = document.createElement('button');
    $deleteBtn.classList.add('delete');
    $deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    $tools.appendChild($completeBtn);
    $tools.appendChild($editBtn);
    $tools.appendChild($deleteBtn);
};

document.addEventListener('DOMContentLoaded', main)