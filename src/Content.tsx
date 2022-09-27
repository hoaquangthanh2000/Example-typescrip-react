
import { useEffect, useState } from "react"

function Content(){
    const [title,setTitle] = useState('')
    const [todos,setTodos] = useState<{userId:number,id:number,title:string,completed:boolean}[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(todos => {
                setTodos(todos)
            })
    },[])


    return (
        <div>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <ul>
                {todos.map((todo,index) => (
                    <li key={index}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default Content