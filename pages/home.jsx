//rafce

import splash_screen_logo from '../src/assets/splash_screen_logo.png';
import BarLoader from "react-spinners/BarLoader";
import './home.css';

const Home = () => {
    console.log('Home component rendered');

    return (
        <div className="homeMainContainer">
            <img className='splashScreenLogo' src={splash_screen_logo} alt="LinkedIn Notifyer Logo" />
            <BarLoader className='splashSpinner' color="#FFFFFF" width={135} />
        </div>
    );
}

export default Home;
