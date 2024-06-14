import { useContext, useEffect, useRef, useState } from "react";
import { ItemContext } from "./context/ItemContext";

export const AddTodo = () => {
    const [input, setInput] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const itemContext = useContext(ItemContext);
    
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if(input.length > 0){
            itemContext.dispatch({type: "add", payload : { input }});
            setInput("");
        }
    }

    return (
        <form className="input_box" onSubmit={ handleSubmit }>
            <input className="input" type="text" placeholder="enter todo" value={ input } onChange={ (e) => setInput(e.target.value) } ref={ inputRef }></input>
        </form>
    )
}