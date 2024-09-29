import { useState, useContext } from "react";
import axiosInstance from "/src/services/axiosInstance";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/authorization.jsx";

function Enroll() {
    const { verifyToken } = useContext(AuthContext);
    const [enrollType, setEnrollType] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const navigate = useNavigate();

    const handleEnrollType = () => {
        setEnrollType(enrollType === "login" ? "register" : "login");
    };

    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };

    const handleEnroll = async (event) => {
        event.preventDefault();

        if ((enrollType === "login" && (!email || !password)) || (enrollType === "register" && (!email || !password || !password2))) {
            console.log("Please fill in all fields");
            return;
        }

        try {
            const enrollResponse = await axiosInstance.post(`auth/${enrollType}`, {
                email,
                password,
            });

            if (enrollResponse.data.error) {
                return;
            }

            if (enrollType === "login") {
                const authToken = enrollResponse.data.authToken;
                localStorage.setItem("authToken", authToken);
            }

            verifyToken();
            navigate('/account/user');
        } catch (error) {
            console.log(error);
        }
    };

    const renderForm = () => {
        if (enrollType === "login") {
            return (
                <>
                    <h1>Login</h1>
                    <form onSubmit={handleEnroll}>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input
                                id="email"
                                type="text"
                                value={email}
                                onChange={(event) => handleInputChange(event, setEmail)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(event) => handleInputChange(event, setPassword)}
                            />
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                    <div>
                        Need To: <button onClick={handleEnrollType}>Register?</button>
                    </div>
                    <div>
                        <button onClick={() => navigate("/account/forgotpassword")}>
                            Forgot your password?
                        </button>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <h1>Register</h1>
                    <form onSubmit={handleEnroll}>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input
                                id="email"
                                type="text"
                                value={email}
                                onChange={(event) => handleInputChange(event, setEmail)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(event) => handleInputChange(event, setPassword)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password2">Confirm Password: </label>
                            <input
                                id="password2"
                                type="password"
                                value={password2}
                                onChange={(event) => handleInputChange(event, setPassword2)}
                            />
                        </div>
                        <div>
                            <button type="submit">Register</button>
                        </div>
                    </form>
                    <div>
                        Need To: <button onClick={handleEnrollType}>Login?</button>
                    </div>
                </>
            );
        }
    };

    return (
        <div>
            {renderForm()}
        </div>
    );
}

export default Enroll;
