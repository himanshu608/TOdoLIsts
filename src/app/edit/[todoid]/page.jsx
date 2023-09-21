"use client"
import TodoForm from '@/components/todoForm/TodoForm'
import React, { useEffect, useState } from 'react'

const Edit = ({params}) => {
    const [todo,setTodo] = useState(null);
    useEffect(()=>{
        fetch(`/api/todo?todoid=${params.todoid}`)
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