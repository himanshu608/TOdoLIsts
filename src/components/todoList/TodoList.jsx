"use client"
import styles from './todolist.module.css'
import { useContext, useEffect, useState } from "react"
import TodoItem from "../todoItem/TodoItem";
import { TodoContext } from "@/provider/TodoContextProvider";
import LoadingSkeleton from "./LoadingSkeleton";
import { useSession } from "next-auth/react";
const TodoList = () => {
    const {todos,loading} = useContext(TodoContext);
    const { data: session } = useSession()
  return (
    <div>
      <div className={styles.name}>
        Welcome <section className={styles.user}>
        {session?.user?.name}
        </section>
      </div>
        {loading ? (
          <>
            <LoadingSkeleton/>
            <LoadingSkeleton/>
            <LoadingSkeleton/>
            <LoadingSkeleton/>
          </>
        ):(
          todos?.map((todo) =>{
            return <TodoItem key={todo._id} todoId={todo._id} todoTitle={todo.title} todoDesc={todo.description} />
          })
        )}
        
    </div>
  )
}

export default TodoList