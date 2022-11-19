import "./App.css";
import {useEffect, useLayoutEffect, useRef, useState} from "react";

function App() {
    const [text, setText] = useState("1");
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.value = "hello";
        console.log(inputRef.current.value)
    }, []);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []);

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleFocus = () => {
        setText("")
    }
    return (
        <div>
            <input
                ref={inputRef}
                value={text}
                onChange={handleChange}
                onFocus={handleFocus}
            ></input>
        </div>
    );
}

export default App;