import React from 'react';
import Header from "@components/Header.tsx";
import Footer from "@components/Footer.tsx";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Layout;
