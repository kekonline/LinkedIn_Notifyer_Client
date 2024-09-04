//rafce

import { useEffect } from "react"
import axiosInstance from "/src/services/axiosInstance"


const JobLinsting = () => {

    const getJobListings = async () => {
        const responseJobListings = await axiosInstance.get("job")
        console.log("responseJobListings", responseJobListings)
    };

    useEffect(() => {
        getJobListings();
    }, [])


    return (
        <div>joblinsting</div>
    )
}

export default JobLinsting