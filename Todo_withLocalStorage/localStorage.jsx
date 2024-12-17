export const getSavedTasks=()=>
    {
      const tasks=localStorage.getItem('tasks')
      return tasks ? JSON.parse(tasks):[];
    };
    export const savedToLocalStorage=(tasks)=>
    {
      localStorage.setItem('tasks',JSON.stringify(tasks));
    };
    