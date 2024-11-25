//รวบรวมฟังชั่นต่างๆที่ติดต่อกับ prisma
'use server';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createCamps = async(prevState:any,formData:FormData)=>{
  await new Promise((resolve) => setInterval(resolve, 1000))

    // const title = formData.get('title')
    // const location = formData.get('location')
    const rawData = Object.fromEntries(formData)
    console.log(rawData)
    //ทำงานเสร็จแล้ว revalidatepath กดปุ๊บ อัพเดทปั๊บ
    // revalidatePath('/camp')
    //เมื่อทำงานเสร็จแล้วจะให้ไปไหนต่อ redirect
    // redirect('/')
    return 'create camp success'
}

export const fetchCamp = async()=>{
    //prisma.camp0.findMany()
    const camps =[
        {
            id:1,title:"camp1",location:"Ladprao"
        },
        {
            id:2,title:"camp2",location:"bkk"
        },
        {
            id:3,title:"camp3",location:"chokchai"
        },
    ]
    return camps
}