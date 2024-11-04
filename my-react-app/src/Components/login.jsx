import React, { useState } from 'react';
import Home from './home';
import './login.css';
import Header from './header';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="Wholepage">
            <div className='bghome'><Home />
                <div className="container">

                    <form className="login-form" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="form-group">
                            <label >Email ID</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Enter Email id'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            /><br></br>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder='Enter Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Login</button>
                        <div className="LabelStyle">
                            <p>-------------OR------------</p>
                            <p>Continue With Google</p>
                            <p>Don't have an account?Sign up</p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login
