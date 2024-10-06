import { useState, useEffect } from "react";
import axiosInstance from "../services/axiosInstance";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [forgotPasswordMessage, setForgotPasswordMessage] = useState("");

    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };

    useEffect(() => {
        if (forgotPasswordMessage) {
            const timeout = setTimeout(() => {
                setForgotPasswordMessage("");
            }, 3000);

            // Cleanup function to clear the timeout if the component unmounts
            return () => clearTimeout(timeout);
        }
    }, [forgotPasswordMessage]);

    const handleSendForgotPasswordEmail = async (event) => {
        event.preventDefault(); // Prevent form submission from refreshing the page

        try {
            if (!email) {
                console.log("Please fill in all fields");
                return;
            }

            const enrollResponse = await axiosInstance.post(`auth/sendforgotpasswordemail`, { email });

            if (enrollResponse.data.error) {
                console.log("Error: ", enrollResponse.data.message);
                setForgotPasswordMessage(enrollResponse.data.message); // Display error message
                return;
            }

            console.log("sendEmailResponse: ", enrollResponse.data.message);
            setForgotPasswordMessage(enrollResponse.data.message);
        } catch (error) {
            console.log("Error: ", error.response ? error.response.data : error.message);
            setForgotPasswordMessage("An error occurred while sending the email.");
        }
    };

    return (
        <div>
            <h1>Forgot Password</h1>
            <br />
            <br />
            <form onSubmit={handleSendForgotPasswordEmail}>
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
                    <button type="submit">Send Forgot Password Email</button>
                    {forgotPasswordMessage && <p>{forgotPasswordMessage}</p>}
                </div>
            </form>
        </div>
    );
}

export default ForgotPassword;
