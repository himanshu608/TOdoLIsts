"use client"

import { TodoContext } from "@/provider/TodoContextProvider"
import { useContext } from "react"

const ThemeWrapper = ({children}) => {
    const {theme} = useContext(TodoContext);
  return (
        <div className={`${theme} topContainer`}>
            {children}
        </div>
    )
}

export default ThemeWrapper