
import { useEffect, useState } from "react"

const tabs = ['comments','posts','albums']
function Content(){
    const [title,setTitle] = useState('')
    const [todos,setTodos] = useState<{userId:number,id:number,title:string,completed:boolean}[]>([])
    const [type,setType] = useState('posts')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(items => {
                setTodos(items)
            })
    },[type])


    return (
        <div>
            {tabs.map((tab) => (
                <button 
                    key={tab}
                    style={ type === tab ? {
                        color:'#fff',
                        backgroundColor:'#333'
                    }:{}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <ul>
                {todos.map((item,index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default Content