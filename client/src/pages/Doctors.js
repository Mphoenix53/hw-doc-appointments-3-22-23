import { useState, useEffect } from "react"
import axios from "axios"

const Doctors = ()=> {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  


  useEffect(()=>{
    getDoctors()
  },[])

  const getDoctors = async()=>{
    setError(null)
    try{
        let res = await axios.get('/api/doctors')
                  setDoctors(res.data)
                  setLoading(false)
    }catch (error) {
      setError(error)
      setLoading(false)

    }
  }


  if(loading) return <p>loading</p>
  if(error) return <p>Error</p>
  return (
    <div>
      <h1>Doctors</h1>
        <p>{JSON.stringify(doctors)}</p>
    </div>
  )
}

export default Doctors