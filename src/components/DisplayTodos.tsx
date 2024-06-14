import { useContext, useState } from "react";
import { TodoItems } from "./TypeStorage";
import { delete_todo, edit_todo, update_status } from "./utils";
import { ItemContext } from "./context/ItemContext";

type ShowTodosProps = {
    todos: TodoItems[];
}

export default function DisplayTodos(props: ShowTodosProps) {
    const itemContext = useContext(ItemContext);
    const [show, setShow] = useState(0);
    const [value, setValue] = useState("");

    return (
        <>
            {
                props.todos.map((todo) =>
                    <div className="todo_items_container" key={ todo.task_id }>
                        {
                            show === todo.task_id ? <input type="text" autoFocus value={ value.length > 0 ? value : todo.task_name } onChange={ (e) => setValue(e.target.value) } className="task_update"></input> : <p className="task__heading">{ todo.task_name }</p>
                        }
                    
                        <div className="task_btn_group">
                            <div className="task_status">
                                <p onClick={ () => update_status(todo.task_id, itemContext.dispatch) }>{ todo.task_status === false ? <span className="incomplete">Task Incomplete</span> : <span className="complete">Task Completed</span> }</p>
                            </div>

                            <div className="btn_group">
                                <button className="btn" onClick={ () => edit_todo(value, setShow, todo.task_id, itemContext.dispatch, setValue) }>{ (show) === 0 ? "Edit" : "Update" }</button>
                                <button className="btn" onClick={ () => delete_todo(todo.task_id, itemContext.dispatch) }>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
