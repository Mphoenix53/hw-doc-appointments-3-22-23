import { useState, useEffect } from "react"
import axios from "axios"
import useAxiosOnMount from "../hooks/useAxoisOnMount"

const Doctors = ()=> {
  const {response, loading, error} = useAxiosOnMount('/api/doctors')

  const [doctors, setDoctors] = useState([])


  useEffect(()=> {
    if(response){
    setDoctors(response.data)
    }
  },[response])

  const addDoctor = ()=> {
    setDoctors([...doctors,{id:4, name:'Dr Katie'}])
  }

  if(loading) return <p>loading</p>
  if(error) return <p>Error</p>
  return (
    <div>
        <h1>Response</h1>
        <p>{JSON.stringify(response)}</p>
        <h1>Doctors from Response</h1>
        <p>{JSON.stringify(response.data)}</p>
        <h1>Doctors from doctors state</h1>
        <p>{JSON.stringify(doctors)}</p>
        <p onClick={addDoctor}>ADD</p>
    </div>
  )
}

export default Doctors