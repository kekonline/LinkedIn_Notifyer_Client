import splash_screen_logo from '/src/assets/splash_screen_logo.png';
import { AuthContext } from "../context/authorization.jsx";
import BarLoader from "react-spinners/BarLoader";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import './Home.css';

const Home = () => {
    const { userId } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            if (userId !== null) {
                setLoading(false);
            }
        }, 2000)
    }, [userId]);

    if (loading) {
        return (
            <div className="homeMainContainer">
                <img className='splashScreenLogo' src={splash_screen_logo} alt="Logo" />
                <BarLoader className='splashSpinner' color="#FFFFFF" width={135} />
            </div>
        );
    } else {

        navigate('/joblisting');
        return null;


    }
}

export default Home;
