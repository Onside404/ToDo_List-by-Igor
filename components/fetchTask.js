const fetchTask = async () => {
    try {
        const todos = await fetch('https://jsonplaceholder.typicode.com/todos');
        return await todos.json();

    } catch (error) {
        console.log(error);
    }
}

export const renderTask = async (taskBody, taskStub) => {
    const tasks = await fetchTask();
    console.log(tasks.length)

    const taskList = document.querySelector('#todo_body');

    tasks.forEach(task => {
        const taskItem = document.createElement('div')
        taskItem.id = task.id
        function completedTask() {
            return task.completed ? 'todo_list-item--done' : 'todo_list-item'
        }
        taskItem.classList.add('todo_list-item', completedTask())


        taskItem.innerHTML= `
            <div class="todo_list-content_wrap">
                <strong>${task.id}</strong>
                <span class="todo_list-text">${task.title}</span>
            </div> 
 
            <div class="todo_list_button-wrap">
                <button class="todo_list-done" data-action="done">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 12L12 17L22 7M2 12L7 17M12 12L17 7" stroke="#29B650" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <button class="todo_list-remove" data-action="remove">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
        `;

        taskList.appendChild(taskItem)
    })

    if (taskBody.children.length > 1) {
         taskStub.classList.add('todo_body_text--none');
    }
}


// export const renderTask = async (taskBody, taskStub) => {
//     const tasks = await fetchTask();
//     console.log(tasks.length)
//
//     tasks.forEach(task => {
//     const { id, title, completed } = task;
//
//     const taskHTML = `
//         <div id="task-${id}" class="todo_list-item ${ completed ? 'todo_list-item--done' : '' }">
//             <div class="todo_list-content_wrap">
//                 <p>${id}</p>
//                 <span class="todo_list-text ">${title}</span>
//             </div>
//             <div class="todo_list_button-wrap">
//                 <button class="todo_list-done" data-action="done">
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M7 12L12 17L22 7M2 12L7 17M12 12L17 7" stroke="#29B650" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </button>
//                 <button class="todo_list-remove" data-action="remove">
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     `;
//         taskBody.insertAdjacentHTML('beforeend', taskHTML);
//     });
//
//     if (taskBody.children.length > 1) {
//         taskStub.classList.add('todo_body_text--none');
//     }
// }