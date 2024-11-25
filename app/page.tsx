import React from 'react'

const page = async() => {
  await new Promise((resolve) => setInterval(resolve, 1000))
  return (
    <div>
      
    </div>
  )
}

export default page



