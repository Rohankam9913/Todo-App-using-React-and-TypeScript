import React, { act, createContext, useReducer } from "react";
import { Action, TodoItems } from "../TypeStorage";
import { add_items } from "../utils";

export const ItemContext = createContext<ContextProps>({} as ContextProps);

type ItemContextProviderProps = {
    children: React.ReactNode;
}

type ContextProps = {
    todos: TodoItems[];
    dispatch: React.Dispatch<Action>;
}

function reducer(state: TodoItems[], action: Action): TodoItems[] {
    switch (action.type) {
        case "add":
            return [...state, add_items(action.payload.input)];

        case "delete":
            return state.filter(todo => todo.task_id !== action.payload.input);

        case "update":
            return state.map((todo)=>{
                if(todo.task_id === action.payload.input){
                    return {...todo, task_status : !todo.task_status};
                }
                return todo;
            })
        
        case "edit":
            return state.map((todo)=>{
                if(todo.task_id === action.payload.input){
                    let individual_todo = {...todo, key : action.payload.value};
                    individual_todo.task_name = action.payload.value;
                    return individual_todo;
                }

                return todo;
            }) 
            
        default:
            return state;
    }
}

export default function ItemContextProvide({ children }: ItemContextProviderProps) {
    const [todos, dispatch] = useReducer(reducer, []);

    return (
        <ItemContext.Provider value={ { todos, dispatch } }>
            { children }
        </ItemContext.Provider>
    )
}