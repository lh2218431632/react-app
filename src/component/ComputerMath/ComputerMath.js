import  './ComputerMath.js.css'
import {useState} from "react";
const ComputerMath = () => {
    const [counter, setCounter] = useState(0);
    const addHandler = () => {
        setCounter(1)
        console.log(counter);
        setCounter(2)
        console.log(counter);
        setCounter(3)
        console.log(counter);
        setCounter(4)
        console.log(counter);
        setCounter(5)
        console.log(counter);
        setCounter(6)
        console.log(counter);
    }
    const  subHandler = () => {
        setCounter(counter-1)
    }
    return (
        <div className="computerMath">
            <h1>{counter}</h1>
            <button className="btn" onClick={addHandler}>+</button>
            <button className="btn" onClick={subHandler}>-</button>
        </div>
    )
}

export  default  ComputerMath;