
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useContext } from "react";
import { UserContext } from "../Components/UserContext";

const Home = () => {
  
    const {User, setUser}=useContext(UserContext)
    console.log(User)
    return (
        
        <div>
            <Header></Header>
            <div className="alert alert-secondary" role="alert">
                Welcome to Homepage
            </div>
            <div><h1>Also we have message from the usecontext</h1>
           
            {/* <p>{User}</p>
            <button onClick={()=>{setUser("yes i change it")}}>click</button> */}
           </div>
            <Footer></Footer>
            
        </div>

    )
}

export default Home;