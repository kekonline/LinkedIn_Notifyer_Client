//rafce

import splash_screen_logo from '../src/assets/splash_screen_logo.png';
import BarLoader from "react-spinners/BarLoader";
// import axiosInstance from "../src/services/axiosInstance.js";
import { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        handleGetToken();

    }, []);

    const handleGetToken = async () => {
        try {

            // const getTokenRequest = await axiosInstance.get("/gettoken");
            // console.log("this is what i got", getTokenRequest.data);
            // localStorage.setItem("authToken", getTokenRequest.data.authToken);
            // console.log(getTokenRequest.data.authToken);

        } catch (error) {
            console.log(error);
        }


    }




    if (loading === true) {
        return (
            <div className="homeMainContainer">
                <img className='splashScreenLogo' src={splash_screen_logo} alt="LinkedIn Notifyer Logo" />
                <BarLoader className='splashSpinner' color="#FFFFFF" width={135} />
            </div>
        );
    } else {


        console.log('loadind', loading);

    }















}

export default Home;
