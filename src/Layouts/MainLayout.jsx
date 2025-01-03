import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <section><Navbar></Navbar></section>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;