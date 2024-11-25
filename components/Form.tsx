'use client'
import { createCamps } from "@/utils/actions"
import { useActionState } from "react"
import {  useFormStatus } from "react-dom"

const SubmitButton = ()=>{
    const {pending} = useFormStatus()
    return <button type="submit" disabled={pending}>
        {pending ? 'Loading...' : 'Submit'}
    </button>
}
const Form = () => {
//[ข้อความที่ได้กลับมาจาก server,จะให้ฟังชั่นทำอะไร]
    const [message,formAction] = useActionState(createCamps,null)

  return (
   <div>
    {message && <p>{message}</p>}
    <form className="flex flex-col gap-4" action={formAction}>
    Form
    <input 
     className="border-2 border-red-500" 
     type="text" placeholder="Camping Name" name="title" defaultValue="BKK"/>

    <input 
        className="border-2 border-red-500" 
        type="text" placeholder="Location" name="location" defaultValue="Ladprao"/>

    <SubmitButton/>
   </form>
   </div>
  )
}

export default Form
