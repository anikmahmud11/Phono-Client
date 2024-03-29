import React, { useState } from 'react';
import {Button, Container,  LinearProgress,  TextField, Typography} from '@mui/material'
import { Alert, NavLink } from 'react-bootstrap';
import { Link , useLocation,useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const{user, loginUser, isLoading, authError}=useAuth();

    const location = useLocation();
    const history = useHistory();



    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }



    const handleLoginSubmit = e=>{
        loginUser(loginData.email, loginData.password,location,history)
        e.preventDefault();
    }
    return (
       
            <Container className="border border-danger w-50 mt-3">
                
                {isLoading && <LinearProgress color="secondary"/>}
                
                    <Typography className="text-center text-danger fw-bolder" variant="h4" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            error
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            error
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />

                        <Button color="error" sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            as={Link} to="/register">
                            <Button color="error" variant="text">New User? Please Register</Button>
                        </NavLink>
                       
    {user?.email && <Alert  severity="success">User login successfully!</Alert>}
    {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                
            </Container>
       
    );
};

export default Login;