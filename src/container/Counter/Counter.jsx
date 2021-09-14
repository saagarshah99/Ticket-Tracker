import React, {useState} from 'react'
import "./Counter.scss"

const Counter = () => {

    const [counter, setCounter] = useState(0)
    const handleIncrement = () => {
        setCounter(counter + 1);
    }
    const handleDecrement = () => {
        if(counter !== 0){
            setCounter(counter - 1);
        }
    }

    return (
        <>
            <div className="counter">
                <button className="counter__button" onClick = {handleDecrement}>-</button>
                <div className="counter__p">
                    <p >{counter}</p>
                </div>
                <button className="counter__button" onClick = {handleIncrement}>+</button>
            </div>
        </>
    )
}

export default Counter
