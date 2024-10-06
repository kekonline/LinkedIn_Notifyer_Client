import splash_screen_logo from '/src/assets/splash_screen_logo.png';
import { AuthContext } from "../context/authorization.js";
import BarLoader from "react-spinners/BarLoader";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import './Home.css';

const Home = () => {
    const { userCheckedIn } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (userCheckedIn !== false) {
                setLoading(false);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, [userCheckedIn]);

    useEffect(() => {
        if (!loading && userCheckedIn !== false) {
            navigate('/joblisting/new');
        }
    }, [loading, userCheckedIn, navigate]);

    if (loading) {
        return (
            <div className="homeMainContainer">
                <img className='splashScreenLogo' src={splash_screen_logo} alt="Logo" />
                <BarLoader className='splashSpinner' color="#FFFFFF" width={135} />
            </div>
        );
    }

    return null;
}

export default Home;
