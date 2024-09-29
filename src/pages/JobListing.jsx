//rafce

import { useEffect, useState } from "react";
import DOMPurify from 'dompurify';
import axiosInstance from "/src/services/axiosInstance"


const JobLinsting = (props) => {
    const { page } = props
    const [jobListingsList, setJobListingsList] = useState([]);

    const getJobListings = async () => {
        const responseJobListings = await axiosInstance.get("job/" + page);
        // console.log("responseJobListings", responseJobListings.data)
        setJobListingsList(responseJobListings.data)
    };

    useEffect(() => {
        getJobListings();
    }, [page])

    const handleMarkAs = async (_id, markAs) => {
        event.preventDefault();

        try {
            await axiosInstance.put(`job/${_id}`, {
                markAs
            });
            await getJobListings();
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <h1>Job Listings</h1>
            {jobListingsList.map((job) => (
                <li key={job._id}>
                    <h2> Company - {job.company}</h2>
                    <br />
                    <h2>  Title - {job.title}</h2>
                    <br />
                    Job Description - <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job.description) }} />
                    <br />
                    URL - <a href={job.jobURL}>Go To Job</a>
                    <br />
                    <div>
                        <button onClick={() => handleMarkAs(job._id, "seen")}>Mark As Seen</button>
                        <button onClick={() => handleMarkAs(job._id, "starred")}>Mark As Starred</button>
                    </div>
                    <br />
                    <hr />
                </li>
            ))}
        </div>
    )
}

export default JobLinsting