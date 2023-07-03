import { useEffect,useState } from "react"
import { NavLink,Outlet, useLocation } from "react-router-dom"
import axios from "axios"


function Users() {
    const [users, setUsers] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const slugText = (text) => {
        return text.toLowerCase().replace(/ /g, "-");
      };
    const location = useLocation()
    console.log(location)
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then(res => setUsers(res.data))
        .finally(() => setisLoading(false))

    },[])
  return (
    <div>
        <h1>Users</h1>
        {isLoading && <h2>Loading...</h2> }
        
        <ul className="users">
            
        {
            users.map(user => 
                <li key={user.id}>
                    <NavLink  to={`/users/user/${slugText(user.name)}/${user.id}`} >{user.name}</NavLink>
                    
                </li>
                   
            )
            
            
        }
        
        <h1>Select a User !</h1>
        </ul>
        <Outlet/>
    </div>
    
  )
}

export default Users