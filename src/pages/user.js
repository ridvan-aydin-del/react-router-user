import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import { useState,useEffect } from "react"

function User() {
    const [user, setUser] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {



        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setUser(res.data))
        .finally(() => setisLoading(false))
    }, [id])
  return (
    <div>
        

        
        {
          !isLoading &&  <h1>Name: {user.name  } <br /> Email: {user.email} <br /> Phone: {user.phone}</h1>
            
        }
    </div>

  )
}

export default User