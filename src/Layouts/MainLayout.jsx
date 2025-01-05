import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
    return (
      <div>
        <section>
          <Navbar></Navbar>
        </section>
        <Outlet></Outlet>
        <section>
          <Footer></Footer>
        </section>
      </div>
    );
};

export default MainLayout;