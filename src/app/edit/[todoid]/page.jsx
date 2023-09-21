"use client"
import TodoForm from '@/components/todoForm/TodoForm'
import { TodoContext } from '@/provider/TodoContextProvider';
import React, { useContext, useEffect, useState } from 'react'

const Edit = ({params}) => {
    const [todo,setTodo] = useState(null);
    useEffect(()=>{
        fetch(`http://localhost:3000/api/todo?todoid=${params.todoid}`)
        .then((res)=> res.json())
        .then((data) => setTodo(data));
    },[])
  return (
    <div>
        {todo && <TodoForm todoDesc={todo?.description} todoTitle={todo?.title} save={false} todoId={todo._id}/>}
    </div>
  )
}

export default Edit