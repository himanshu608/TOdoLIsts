import Link from "next/link"
import styles from "./navbar.module.css"
import ThemeToggle from "../themeToggle/ThemeToggle"
import LogoutOption from "../authOptions/logout/LogoutOption"
const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.toggle}>
          <ThemeToggle/>
        </div>
        <div className={styles.logout}>
          <LogoutOption/>
        </div>
        <div className={styles.logo}>
        <Link href={"/"} alt="home" style={{color:"var(--black)"}}>TOdoLIsts</Link>
        </div>
        <div className={styles.links}>
            <Link href={"/create"} alt="add-new" style={{color:"var(--black)"}}>Add New</Link>
         </div>
    </div>
  )
}

export default Navbar