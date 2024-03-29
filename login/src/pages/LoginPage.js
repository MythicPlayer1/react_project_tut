
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Components/UserContext';


import './LoginPage.css';
const LoginPage = () => {

    const navigate = useNavigate();

    const { User, setUser } = useContext(UserContext)
    const [newUsername, setUsername] = useState();
    const [newPassword, setPassword] = useState();

    const takevalue = () => {
        return (
            {
                username: newUsername,
                password: newPassword

            }
        )

    }

    const titilechanger = (event) => {
        setUsername(event.target.value)
    }

    const passwordchanger = (event) => {
        setPassword(event.target.value)
    }


    const submithandler = async (event) => {

        event.preventDefault()
        const Datas = takevalue();
        setUser(Datas)

        console.log(Datas)


        setPassword('')
        setUsername("")
        navigate('/home')

    }


    return (
        <div>
            <div className='main-container'>
                <div className='submain-container'>
                    <img src='img/cologo.png'></img>
                </div>
                <h1 style={{fontSize:"4vw", color:"white",fontWeight:"700", marginTop:"100px"}}>Login</h1>
                <p style={{color:"white",fontSize:"20px", wordSpacing:"2px", padding:"7px"}}>Sign in here to get started.</p>

                <div className="main">
                    <form className='form_feild' onSubmit={submithandler}>
                        <div className='text_feild'>
                            <label >Username</label>
                            <span></span>
                            <input type="text" onChange={titilechanger} value={newUsername}></input>

                        </div>
                        <div className='text_feild'>
                            <label>Password</label>
                            <span></span>
                            <input type="password" onChange={passwordchanger} value={newPassword} />
                        </div>
                        <div className='pass'>Forget The Password?</div>
                         <button className="sub"  type='submit'>Sign In</button>

                    </form>

                </div>
                <p style={{color:"white", marginTop:"400px"}}>Don't have an account?<a>Create an account</a></p>
            </div>
        </div>


    )
}

export default LoginPage;
