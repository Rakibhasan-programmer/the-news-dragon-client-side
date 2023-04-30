import React from 'react';
import NavigationBar from '../pages/shared/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <>
           <NavigationBar />
           <Outlet /> 
        </>
    );
};

export default LoginLayout;