const textBoxInput= document.querySelector(".todo-input");
const buttonClick= document.querySelector(".todo-button");
const listItemstodo= document.querySelector(".todo-list");
buttonClick.addEventListener('click',addEventTodo)
listItemstodo.addEventListener('click',deleteEditButton)

function addEventTodo(event)
{
    event.preventDefault();
    if(textBoxInput.value===""){
        alert("Text-Box Should not be Empty")
    }
    else{
    const divTodo = document.createElement("div");
    divTodo.classList.add("todo");
    // 
    const newListTodo=document.createElement('li');
    newListTodo.innerText=textBoxInput.value;
    newListTodo.classList.add("todo-item");
    divTodo.appendChild(newListTodo);
    // 
    const editButton=document.createElement('button');
    editButton.innerHTML=  'Edit' ;
    editButton.classList.add("edit-btn");
    divTodo.appendChild(editButton);
    // 
    const deleteButton=document.createElement('button');
    deleteButton.innerHTML='Delete';
    deleteButton.classList.add("trash-btn");
    divTodo.appendChild(deleteButton);
    // 
    listItemstodo.appendChild(divTodo);
    textBoxInput.value="";
    }
    if(    
        textBoxInput.value===""){
        buttonClick.innerText='Save';
    }
}
    function deleteEditButton(e)
    {
        console.log(e.target);
        const selectedItem=e.target;
        if(selectedItem.classList[0]==='trash-btn'){
            const todo=selectedItem.parentElement;
            todo.remove();
        }
        if(selectedItem.classList[0]==='edit-btn'){
            const tag=selectedItem.parentElement
            const todo= selectedItem.previousElementSibling;
            if(textBoxInput.value==''){
            tag.remove();
            textBoxInput.value = todo.innerText;
            buttonClick.innerText='Update';
            }
            
        }
    
}
