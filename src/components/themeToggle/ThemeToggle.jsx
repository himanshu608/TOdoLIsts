"use client"

import { TodoContext } from "@/provider/TodoContextProvider"
import { useContext } from "react"
import styles from "./themeToggle.module.css"
import Image from "next/image"
const ThemeToggle = () => {
    const {theme , toggle} = useContext(TodoContext);
  return (
    <div className={styles.container}
         onClick={toggle}>
        <Image src={"/moon.png"} alt="" width={20} height={20}/>
        <div className={styles.ball} style={{left:theme==="light"?"28px":"2px"}}>
        </div>
        <Image src={"/sun.png"} alt="" width={20} height={20}/>
    </div>
  )
}

export default ThemeToggle