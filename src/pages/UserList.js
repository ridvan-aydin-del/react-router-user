import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function UserList() {
    const [loading, setLoading] = useState(true)
    const [ users, setUsers ] = useState([])

    useEffect(() =>{
        axios('https://jsonplaceholder.typicode.com/users')
        .then((res) => setUsers(res.data))
        .finally(()=> setLoading(false))
    },[])



  return (
    <div>
        Users Page
        {loading && <p>Loading...</p>}
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <Link to={`/User/${user.id}`}>{user.name}</Link>
                </li>
            ))} 
        </ul>

       
    </div>
  )
}

export default UserList
