import { TextField, Typography,Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
   

    const{user,registerUser, isLoading,authError}=useAuth();
    // console.log(user);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }



    const handleLoginSubmit = e=>{
        if(loginData.password !== loginData.passwordMatch){
            alert('password did not match ')
            return
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <Container className="border w-75">
                
        <Typography className="text-center" variant="body1" gutterBottom>Registration</Typography>
        {
         !isLoading &&<form onSubmit={handleLoginSubmit}>
            <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
                onChange={handleOnChange}
                variant="standard" />
            
            <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard" />
            <TextField
                sx={{ width: '75%', m: 1 }}
                id="standard-basic"
                label="Confirm Your Password"
                type="password"
                name="passwordMatch"
                onChange={handleOnChange}
                variant="standard" />

            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
            <NavLink
                style={{ textDecoration: 'none' }}
                as={Link} to="/login">
                <Button variant="text">Already registered? Please login</Button>
            </NavLink>
        </form>
        }
    {isLoading && <CircularProgress/>}
    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
    {authError && <Alert severity="error">{authError}</Alert>}
</Container>
    );
};

export default Register;