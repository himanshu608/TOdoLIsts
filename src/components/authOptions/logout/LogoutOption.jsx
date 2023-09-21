"use client"
import { signOut } from "next-auth/react"
import styles from './logout.module.css'
import {BiLogOutCircle} from 'react-icons/bi'

const handleLogout = ()=>{
  signOut();
}
const LogoutOption = () => {
  return (
    <div className={styles.container} onClick={handleLogout}>
        <BiLogOutCircle size={30}/>
        <section className={styles.item}>LogOut</section>
    </div>
  )
}

export default LogoutOption