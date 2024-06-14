import { useContext, useRef, useState } from "react";
import { ItemContext } from "./context/ItemContext";
import DisplayTodos from "./DisplayTodos";
import { TodoItems } from "./TypeStorage";


export const ShowTodos = () => {
    const itemContext = useContext(ItemContext);
    const todoRef = useRef<TodoItems[]>({} as TodoItems[]);

    let get_item = window.localStorage.getItem("todos");
    if (get_item) {
        todoRef.current = JSON.parse(get_item);
    }

    return (
        <>
            {
                itemContext.todos.length ?
                    <DisplayTodos todos={ itemContext.todos } />
                : todoRef.current.length > 0 ?
                    <DisplayTodos todos={todoRef.current}/>
                :
                    <div className="display_todos">
                        <h2 className="show_todos_heading">You don't have anything to do</h2>
                    </div>
                    
                        
            }

        </>

    )
}