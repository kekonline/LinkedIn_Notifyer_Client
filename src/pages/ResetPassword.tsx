import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axiosInstance from "../services/axiosInstance";

function ResetPassword() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const { token } = useParams();
    const [resetPasswordMessage, setResetPasswordMessage] = useState(null);

    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };

    useEffect(() => {
        if (resetPasswordMessage) {
            setTimeout(() => {
                setResetPasswordMessage("");
            }, 3000);
        }
    }, [resetPasswordMessage]);

    const handleResetPassword = async (event) => {
        event.preventDefault();

        if (!email || !password || !password2) {
            console.log("Please fill in all fields");
            return;
        }

        if (password !== password2) {
            console.log("Passwords do not match");
            return;
        }

        try {
            const resetPasswordResponse = await axiosInstance.post(`auth/resetpassword`, {
                email,
                password,
                token
            });

            // if (resetPasswordResponse.data.error) {
            //     console.log("Error: ", resetPasswordResponse.data.message);
            //     return;
            // }

            console.log("resetPasswordResponse: ", resetPasswordResponse.data.message);
            setResetPasswordMessage(resetPasswordResponse.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Reset Password</h1>
            <br />
            <br />

            <form onSubmit={handleResetPassword}>
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
                    <button type="submit">Reset Password</button>
                    {resetPasswordMessage && <p>{resetPasswordMessage}</p>}
                </div>
            </form>
        </div>
    )
}

export default ResetPassword