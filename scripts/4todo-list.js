const todoList = [{
    name:'make dinner',
    dueDate:'2024-08-07'
},
{
    name:'wash dishes',
    dueDate:'2024-08-09'
}
];

renderTodoList();

function renderTodoList(){ //used regular function as easier to read
    //make it global
    let todoListHTML = '';

    //use foreach method intead of for loop
    // todoList.forEach(function(todoObject , index){
        todoList.forEach((todoObject , index)=>{ //use arrow funtion 
        const {name,dueDate} = todoObject; //shortcut
        //create some HTML code for each todoObject
        const html= `
        <div> ${name} </div>
        <div> ${dueDate} </div>
        <button
        //  onclick="
        //         // used to remove the content from the array list
        //         todoList.splice(${index},1);
        //         renderTodoList();
        // "
         class="delete-todo-button js-todo-delete-button"> Delete </button> 
        `;
        //Now put the HTML on webpage (use accumulator pattern)
        todoListHTML+=html;
    });

    // //loop through the array
    // for(let i=0; i<todoList.length; i++){
    //     const todoObject = todoList[i];
    //     // const name = todoObject.name;
    //     // const dueDate = todoObject.dueDate;
    //     const {name,dueDate} = todoObject; //shortcut
    //     //create some HTML code for each todoObject
    //     const html= `
    //     <div> ${name} </div>
    //     <div> ${dueDate} </div>
    //     <button onclick="
    //             // used to remove the content from the array list
    //             todoList.splice(${i},1);
    //             renderTodoList();
    //     " class="delete-todo-button"> Delete </button> 
    //     `;
    //     //Now put the HTML on webpage (use accumulator pattern)
    //     todoListHTML+=html;
    // }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML=todoListHTML;

    document.querySelectorAll('.js-todo-delete-button') // get a list of all delete buttons on the page
        .forEach((deleteButton , index) => {  //then loop through the list using foreach
            deleteButton.addEventListener('click',() => { //and for each delete button add a event listner
                // used to remove the content from the array list
                todoList.splice(index,1);
                renderTodoList();
            })
        });
}

document.querySelector('.js-add-todo-button').addEventListener('click',() => {
    addTodo();
})

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    todoList.push({
        // name:name,
        // dueDate:dueDate
        name,
        dueDate
    })

    inputElement.value=''; //this will make the text box empty 
    // thus it will reset the text in a text box
    dateInputElement.value='';
    
    renderTodoList();
}