import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import TodoContextProvider from '@/provider/TodoContextProvider'
import ThemeWrapper from '@/wrapper/ThemeWrapper'
import UserSessionProvider from '@/provider/UserSessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo',
  description: 'Todo App with MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <UserSessionProvider>
            <TodoContextProvider>

      <ThemeWrapper>
      <div className="container">
            <Navbar/>
            {children}
        </div>
      </ThemeWrapper>
      </TodoContextProvider>
      </UserSessionProvider>
      </body>
    </html>
  )
}
