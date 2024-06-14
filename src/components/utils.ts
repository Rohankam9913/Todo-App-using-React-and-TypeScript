import { Action, TodoItems } from "./TypeStorage";

export const add_items = (input: string) => {
    let todo: TodoItems = { task_id: Date.now(), task_name: input, task_status: false };
    let get_item = localStorage.getItem("todos");

    if (get_item) {
        let arr: TodoItems[] = JSON.parse(get_item);
        arr.push(todo);
        localStorage.setItem("todos", JSON.stringify(arr));
    }
    else {
        localStorage.setItem("todos", JSON.stringify([todo]));
    }

    return todo;
}

export const edit_todo = (value: string , setShow: React.Dispatch<React.SetStateAction<number>>, input: number, dispatch: React.Dispatch<Action>, setValue: React.Dispatch<string>) => {
    setShow(input);

    if (value?.length > 0) {
        dispatch({ type: "edit", payload: { input, value } });
        setShow(0);
        setValue("");
    }

    let get_item = localStorage.getItem("todos");
    if (get_item) {
        let arr: TodoItems[] = JSON.parse(get_item);

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].task_id === input) {
                arr[i].task_name = value;
            }
        }

        localStorage.setItem("todos", JSON.stringify(arr));
    }
}

export const delete_todo = (input: number, dispatch: React.Dispatch<Action>) => {
    let get_item = localStorage.getItem("todos");

    if (get_item) {
        let items: TodoItems[] = JSON.parse(get_item);
        items = items.filter((item) => item.task_id !== input);
        localStorage.setItem("todos", JSON.stringify(items));
    }

    dispatch({ type: "delete", payload: { input } });
}

export const update_status = (input: number, dispatch: React.Dispatch<Action>) => {
    let get_item = localStorage.getItem("todos");

    if (get_item) {
        let items: TodoItems[] = JSON.parse(get_item);

        for (let i = 0; i < items.length; i++) {
            if (items[i].task_id === input) {
                items[i].task_status = !items[i].task_status;
            }
        }
        localStorage.setItem("todos", JSON.stringify(items));
    }

    dispatch({ type: "update", payload: { input } });
}
