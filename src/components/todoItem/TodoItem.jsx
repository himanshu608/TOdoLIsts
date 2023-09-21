"use client"
import Link from "next/link"
import styles from "./todoItem.module.css"
import {BiSolidEdit} from 'react-icons/bi'
import {MdOutlineDelete} from 'react-icons/md'
import { useContext } from "react"
import { TodoContext } from "@/provider/TodoContextProvider"
const TodoItem = ({todoId,todoTitle,todoDesc}) => {
    const {setUpdate} = useContext(TodoContext);

    const deleteTodo = async ()=>{
        const data = await fetch("/api/todo",{
          method: "DELETE",
          body: JSON.stringify({
            _id:todoId,
          }),
        })
        const todos = await data.json();
        // setTodos(data)
        setUpdate(todos)
      }
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.title}>
                {todoTitle}
            </div>
            <div className={styles.desc}>
                {todoDesc}
            </div>
        </div>
        <div className={styles.icons}>
            <Link href={`/edit/${todoId}`} alt="edit">
            <BiSolidEdit size={35} style={{color:"var(--editIcon)"}}/>
            </Link>
            <MdOutlineDelete size={35} style={{color:"var(--deleteIcon)",cursor:"pointer"}} onClick={deleteTodo} />
        </div>
    </div>
  )
}

export default TodoItem