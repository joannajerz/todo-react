let nextToDoID=0;

export const addTodo =text =>(
    {
        type: 'ADD_TODO',
        id: nextToDoID ++,
        complete: false,
        text
    }
)