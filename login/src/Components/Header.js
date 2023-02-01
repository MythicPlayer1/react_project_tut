
import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
//import logo from './logo192.png'

const Header = () => {
    const {User, setUser}=useContext(UserContext)
    const navigate=useNavigate()


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="img/logo192.png"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <Link to="/home" className="nav-link active">Home</Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link active">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active">About</Link>
                            </li>

                           
                            {/* {
                                !auth.user &&(
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link active">Login</Link>
                                     </li>
                                )
                            }  */}


                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success"  onClick={()=>{setUser(null); navigate('/')
                            }}>Logout</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header;