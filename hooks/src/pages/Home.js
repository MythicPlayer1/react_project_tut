
import { UserContext } from "../components/UserContext"
import { useContext, useReducer } from "react"
import { Navigate } from "react-router-dom"


const login=async()=>{
    return{
        id:1,
        username:'ashish rai',
        email:'ashishraiofficial@gmail,com'
    }
    
}
export const Home = () => {
    const {user, setUser} = useContext(UserContext)
    const  changehandler= async ()=>{
        const user = await login();
        setUser(user)}
        console.log(user)
    
  
    
    return (
        <div>
            <div>hello </div>
           {user?<button onClick={()=>{setUser(null)}}>Logout</button>: <button onClick={changehandler} >Login </button>}
        </div>
    )
}