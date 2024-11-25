const AboutDetail = async({params}) => {
    const {id} = await params
    console.log(id)
  return (
    <div>
      aboutdetailpage : ID {id}
    </div>
  )
}

export default AboutDetail
