import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop.jsx";
import { Navbar } from "../components/Navbar.jsx";
import { Footer } from "../components/Footer.jsx";

import { loadPeople, loadPlanets, loadVehicles } from "../store.js";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Layout = () => {

    const { dispatch } = useGlobalReducer();

    useEffect(() => {
        loadPeople(dispatch);
        loadPlanets(dispatch);
        loadVehicles(dispatch);
    }, []);

    return (
        <ScrollToTop>
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </ScrollToTop>
    );
};