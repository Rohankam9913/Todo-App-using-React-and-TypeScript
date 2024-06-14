import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { ShowTodos } from "./components/ShowTodos";
import ItemContextProvide from "./components/context/ItemContext";

export default function App() {
    return (
        <div className="container">
            <h1 className="heading">Todoer</h1>

            <ItemContextProvide>
                <AddTodo /> 
                <ShowTodos />
             </ItemContextProvide> 
        </div>
    )
}