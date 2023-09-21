"use client"

import { useContext, useEffect, useState } from "react"
import TodoItem from "../todoItem/TodoItem";
import { TodoContext } from "@/provider/TodoContextProvider";
import LoadingSkeleton from "./LoadingSkeleton";
const TodoList = () => {
    const {todos,loading} = useContext(TodoContext);
  return (
    <div>
        {loading && (
          <>
            <LoadingSkeleton/>
            <LoadingSkeleton/>
            <LoadingSkeleton/>
            <LoadingSkeleton/>
          </>
        )}
        {todos?.map((todo) =>{
            return <TodoItem key={todo._id} todoId={todo._id} todoTitle={todo.title} todoDesc={todo.description} />
        })}
    </div>
  )
}

export default TodoList