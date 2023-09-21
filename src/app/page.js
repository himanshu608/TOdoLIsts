import styles from "./page.module.css"
import TodoList from "@/components/todoList/TodoList"
export default function Home() {

  return (
     <div className={styles.dark}>
      <TodoList/>
     </div>
  )
}
