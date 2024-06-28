import React from 'react';
import './LoginRegister.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoginRegister = () => {
    return(
        <div className='wrapper'>
            <div className="form-box login">
                <form action="">
                    <h1 className='login'>Login</h1>
                    <div className="input-box">
                        <input type="text" 
                        placeholder='username' required / >
                        <FaUser className='icon' />    
                    </div>
                    <div className="input-box">
                        <input type="password" 
                        placeholder='password' required / >
                        <FaLock className='icon'/>
                    </div>
                    <Link to='/Home'>
                        <button type="submit">Login</button>
                    </Link>
                </form>
            </div>

        </div>
    );
};

export default LoginRegister