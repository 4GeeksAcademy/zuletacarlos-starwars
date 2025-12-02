import React, { useEffect } from "react"; 
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { loadPeople, loadPlanets, loadVehicles } from "../store";
import useGlobalReducer from "../hooks/useGlobalReducer";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
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
            <Outlet />
            <Footer />
        </ScrollToTop>
    );
};