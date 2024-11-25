import React from 'react'
const url = "https://jsonplaceholder.typicode.com/todos";
const fetchTodo = async () => {
    await new Promise((resolve) => setInterval(resolve, 1000))
    const res = await fetch(url)
    const data = await res.json()
    return data
}
type Data  = {
  id:string;
  title:string;
  completed:string;
  userId:string;

}
const AboutPage = async() => {
    const data:Data[] = await fetchTodo()
    
    console.log(data)
  return (
    <div>
        
      <h1>about</h1>
      {data.map((item,index)=>{
        return <li key={index}>{item.title}</li>
      })}
    </div>
  )
}

export default AboutPage
