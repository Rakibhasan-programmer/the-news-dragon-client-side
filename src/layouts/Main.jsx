import React from 'react';
import Header from '../pages/shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';

const Main = () => {
    return (
        <>
           <Header />
           <Outlet />
           <Footer /> 
        </>
    );
};

export default Main;