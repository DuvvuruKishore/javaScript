/*//selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteTodo);

//functions

function addTodo(e){
e.preventDefault();

const todoDiv=document.createElement('div');
todoDiv.classList.add('todo');

const newTodo=document.createElement('li');
newTodo.innerText=todoInput.value
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);

//complete button
const completeButton=document.createElement('button');
completeButton.innerText="complete";
completeButton.classList.add('complete-button');
todoDiv.appendChild(completeButton);


//trash button
const trashButton=document.createElement('button');
trashButton.innerText='trash'
trashButton.classList.add('trash-button');
todoDiv.appendChild(trashButton);

todoList.appendChild(todoDiv);

//clear todoInput
todoInput.value="";
}

function deleteTodo(e){
    const item=e.target;
    if(item.classList[0]==="trash-button"){
        const todo=item.parentElement;
        todo.remove();
    }
if(item.classList[0]==="complete-button"){
    const todo=item.parentElement;
    todo.classList.toggle('completed');
}

}*/


const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');


todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteTodo);

function addTodo(e){
    e.preventDefault();

    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo');

    const todoInfo=document.createElement('li');
    todoInfo.innerText=todoInput.value;
    todoInfo.classList.add('todo-item');
    todoDiv.appendChild(todoInfo);

    const completeButton=document.createElement('button');
    completeButton.innerText="complete";
    completeButton.classList.add('complete-button');
    todoDiv.appendChild(completeButton);

    const trashButton=document.createElement('button');
    trashButton.innerText='delete';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);

     todoList.appendChild(todoDiv);
}

function deleteTodo(e){
    const item=e.target;
    if(item.classList[0]==="trash-button"){
        const value=item.parentElement;
        value.remove();
    }
    if(item.classList[0]==="complete-button"){
        const value=item.parentElement;
        value.classList.toggle('completed')
    }
    
}























