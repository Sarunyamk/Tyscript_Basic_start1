import Navbar from "@/components/Navbar"
import './globals.css'
//sco metadata
import  { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Camp NextJS',
  description: 'Camp NextJS Pictures',
  keywords: 'Camping, Thailand,NextJS,ReactJS,TailwindCSS',
}

const layout = ({children}:{children:React.ReactNode}) => {
  return (
   <html>
    <body>
    <Navbar/>
     {children}
    </body>
   </html>
  )
}

export default layout
