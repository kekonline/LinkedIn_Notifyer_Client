import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axiosInstance from "/src/services/axiosInstance";


function ChangePassword() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPassword2, setNewPassword2] = useState("");
    const navigate = useNavigate();


    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };

    const handleSaveChangePassword = async (event) => {
        event.preventDefault();

        // Validate not null and that values are not already in the array
        if (!oldPassword || !newPassword || !newPassword2) {
            console.log("Please fill in all fields");
            return;
        }

        if (newPassword !== newPassword2) {
            console.log("Passwords do not match");
            return;
        }

        try {
            const changePasswordResponse = await axiosInstance.put("auth/newpassword", {
                oldPassword: oldPassword,
                newPassword: newPassword,
            });

            if (changePasswordResponse.data.error) {
                console.log(changePasswordResponse.data.message);
                return;
            }

            console.log("changePasswordResponse: ", changePasswordResponse.data.message);

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <div>
            <h1>ChangePassword</h1>
            Here you can change you password!
            <form>
                <div>
                    <label htmlFor="oldPassword">Old Password: </label>
                    <input
                        id="oldpassword"
                        type="password"
                        value={oldPassword}
                        onChange={(event) => handleInputChange(event, setOldPassword)}
                    />
                </div>
                <div>
                    <label htmlFor="oldPassword">New Password: </label>
                    <input
                        id="newpassword"
                        type="password"
                        value={newPassword}
                        onChange={(event) => handleInputChange(event, setNewPassword)}
                    />
                </div>
                <div>
                    <label htmlFor="oldPassword">New Password: </label>
                    <input
                        id="newpassword2"
                        type="password"
                        value={newPassword2}
                        onChange={(event) => handleInputChange(event, setNewPassword2)}
                    />
                </div>
                <div>
                    <button onClick={handleSaveChangePassword}>Save</button>
                </div>
                <div>
                    <button onClick={() => navigate("/account/user")}>Back</button>
                </div>
            </form>



        </div>
    )
}

export default ChangePassword