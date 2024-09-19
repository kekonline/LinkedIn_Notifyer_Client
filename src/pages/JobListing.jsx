//rafce

import { useEffect, useState } from "react";
import DOMPurify from 'dompurify';
import axiosInstance from "/src/services/axiosInstance"


const JobLinsting = () => {
    const [jobListingsList, setJobListingsList] = useState([]);

    const getJobListings = async () => {
        const responseJobListings = await axiosInstance.get("job?section=unseen")
        // console.log("responseJobListings", responseJobListings.data)
        setJobListingsList(responseJobListings.data)
    };

    useEffect(() => {
        getJobListings();
    }, [])

    const handleMarkAsSeen = async (_id) => {
        event.preventDefault();

        try {
            await axiosInstance.delete("searchterm/" + _id);
            // await getSearchTerms();
        } catch (error) {
            console.log(error);
        }
    };
    const handleMarAsStared = async (_id) => {
        event.preventDefault();

        try {
            await axiosInstance.delete("searchterm/" + _id);
            // await getSearchTerms();
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
                        <button onClick={() => handleMarkAsSeen(job._id)}>Mark As Seen</button>
                        <button onClick={() => handleMarAsStared(job._id)}>Mark As Stared</button>
                    </div>
                    <br />
                    <hr />
                </li>
            ))}
        </div>
    )
}

export default JobLinsting