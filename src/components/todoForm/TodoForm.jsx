"use client"
import { useContext, useEffect, useState } from "react"
import styles from "./todoForm.module.css"
import { useRouter } from 'next/navigation';
import { TodoContext } from "@/provider/TodoContextProvider";
import { handleSubmit } from "./utilFunctions";
const TodoForm = ({todoTitle,todoDesc,save,todoId}) => {
  const [title,setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const {setUpdate} = useContext(TodoContext);
  useEffect(()=>{
    setTitle(todoTitle||"");
    setDescription(todoDesc||"");
  },[])

  return (
    <div className={styles.container}>
        <div className={styles.inputform}>
            <input 
              type="text" 
              placeholder="Title" 
              value={title} 
              onChange={(e)=>setTitle(e.target.value)}
              />

            <textarea 
              type="description" 
              placeholder="Description" 
              value={description} 
              onChange={(e)=>setDescription(e.target.value)}  
              />
        </div>
        <div className={styles.submitButton}>
            <button 
              onClick={()=>handleSubmit(todoId,title,description,save,router,setUpdate)}
            >
              Save
            </button>
        </div>
    </div>
  )
}

export default TodoForm