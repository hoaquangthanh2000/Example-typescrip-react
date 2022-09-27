
import { type } from "@testing-library/user-event/dist/type"
import { time } from "console"
import React, {  useEffect, useLayoutEffect, useState,useRef } from "react"

interface FileType extends File {
   
        preview?: string 
    
}
// interface Type extends Timer

function Content(){

    const [count,setCount] = useState(60)

    let timerId = useRef(setInterval(()=>{}))

    const handleStart= () => {
        timerId.current = setInterval(()=> {
            setCount(prevCount => prevCount - 1)
        },1000)
    }
    const handleStop= () => {
        clearInterval(timerId.current)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}
export default Content