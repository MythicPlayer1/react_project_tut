import { useContext } from "react";
import { UserContext } from "../components/UserContext";



const Contact = () => {
    const {user, setUser} = useContext(UserContext)
    return (
        <div>

            <div>{JSON.stringify(user,null,2)}</div>
           
        </div>

    )
}

export default Contact;

