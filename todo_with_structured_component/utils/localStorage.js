export const getSavedTasks=()=>
{
    const tasks=localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks): [];
}
export const saveTasksToLocalStorage=()=>
{
    localStorage.setItem('tasks',JSON.stringify(tasks));
};

//getItem=> only one parameter 
//setItem=> two parameters one is key second one is value
