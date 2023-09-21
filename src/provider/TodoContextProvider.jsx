"use client"

import { createContext, useEffect, useState } from "react"

export const TodoContext = createContext();

const TodoContextProvider = ({children}) => {
    const [todos,setTodos] = useState([]);
    const [update,setUpdate] = useState(true);
    const [theme,setTheme] = useState("light");
    const [loading,setLoading] = useState(true);
    const fetTodos = async ()=>{
        fetch("http://localhost:3000/api/todo",{
          next: { revalidate: 5 }, 
        })
        .then(res=>res.json())
        .then((data)=>
        {
          setTodos(data);
          setLoading(false);
      }

        );
    }
    useEffect(()=>{
      setLoading(true);
      fetTodos();
    },[update])

    const toggle = ()=>{
      setTheme(theme==="light"?"dark":"light");
    }
  return (
    <TodoContext.Provider value={{todos,setUpdate,theme,toggle,loading}}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider