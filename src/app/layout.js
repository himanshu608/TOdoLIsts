import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import TodoContextProvider from '@/provider/TodoContextProvider'
import ThemeWrapper from '@/wrapper/ThemeWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo',
  description: 'Todo App with MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <TodoContextProvider>

      <ThemeWrapper>
      <div className="container">
            <Navbar/>
            {children}
        </div>
      </ThemeWrapper>
      </TodoContextProvider>
      </body>
    </html>
  )
}
