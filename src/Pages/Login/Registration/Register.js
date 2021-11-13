import { TextField, Typography,Button,  Alert, LinearProgress } from '@mui/material';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();
   

    const{user,registerUser, isLoading,authError}=useAuth();
    // console.log(user);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }



    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.passwordMatch){
            alert('password did not match ')
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name, history,location)
        e.preventDefault();
        
    }
    return (
        <Container className="border rounded border-danger w-50 mt-3">
                {isLoading && <LinearProgress color="secondary"/>}
        <Typography className="text-center text-danger fw-bolder pt-1" variant="h4" gutterBottom>Registration</Typography>
        {
         !isLoading &&<form onSubmit={handleLoginSubmit}>
            <TextField
                error
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label=" Name"
                name="name"
                onChange={handleOnChange}
                variant="standard" />
            <TextField
                error
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label=" Email"
                name="email"
                type="email"
                onChange={handleOnChange}
                variant="standard" />
            
            <TextField
                error
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label=" Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard" />
            <TextField
                error
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="Confirm  Password"
                type="password"
                name="passwordMatch"
                onChange={handleOnChange}
                variant="standard" />

            <Button color="error" sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
            <NavLink
                style={{ textDecoration: 'none' }}
                as={Link} to="/login">
                <Button color="error" variant="text">Already registered? Please login</Button>
            </NavLink>
        </form>
        }
    
    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
    {authError && <Alert severity="error">{authError}</Alert>}
</Container>
    );
};

export default Register;