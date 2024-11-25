import { fetchCamp } from "@/utils/actions"

const CampList = async() => {


    const camps = await fetchCamp()
    console.log(camps)
  return (
   
     <div>
        {camps.map((item,index)=>{
            return (
                <ul key={index}>
                    <li >{item.id}</li>
                <li >{item.title}</li>
                <li >{item.location}</li>
                </ul>
            )
        })}
     </div>
   
  )
}

export default CampList
