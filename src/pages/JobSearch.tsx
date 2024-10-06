import { useEffect, useState } from "react";
import axiosInstance from "/src/services/axiosInstance";

function JobSearch() {
    const [jobType, setJobType] = useState('');
    const [inputLocation, setInputLocation] = useState('');
    const [inputJobSearchTerm, setInputJobSearchTerm] = useState('');
    const [jobSearchTermList, setJobSearchTermList] = useState([]);

    const handleJobTypeChange = (event) => {
        setJobType(event.target.value);
    };

    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };

    const handleSaveEditName = async (event) => {
        event.preventDefault();

        // Validate not null and that values are not already in the array
        if (!inputJobSearchTerm || !inputLocation || !jobType) {
            console.log("Please fill in all fields");
            return;
        }

        try {
            await axiosInstance.post("searchterm/", {
                term: inputJobSearchTerm,
                location: inputLocation,
                jobType: jobType,
            });
            await getSearchTerms();
            setJobType("")
            setInputLocation("")
            setInputJobSearchTerm("")
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (_id) => {
        event.preventDefault();

        try {
            await axiosInstance.delete("searchterm/" + _id);
            await getSearchTerms();
        } catch (error) {
            console.log(error);
        }
    };

    const getSearchTerms = async () => {
        try {
            const responseSearchTerms = await axiosInstance.get("searchterm");
            console.log("responseSearchTerms", responseSearchTerms);
            setJobSearchTermList(responseSearchTerms.data.searchTerms);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSearchTerms();
    }, []);

    return (
        <div>
            <h1>Job Search Terms</h1>
            <h2>Saved Search Terms</h2>
            <ul>
                {jobSearchTermList.map((term) => (
                    <li key={term._id}>
                        {term.term} - {term.location} - {term.jobType} <button onClick={() => handleDelete(term._id)}>🚮</button>
                    </li>
                ))}
            </ul>
            <br />
            <br />
            <form>
                <div>
                    <label htmlFor="inputSearchTerm">Search Term: </label>
                    <input
                        id="inputSearchTerm"
                        type="text"
                        value={inputJobSearchTerm}
                        onChange={(event) => handleInputChange(event, setInputJobSearchTerm)}
                    />
                </div>
                <div>
                    <label htmlFor="inputLocation">Location: </label>
                    <input
                        id="inputLocation"
                        type="text"
                        value={inputLocation}
                        onChange={(event) => handleInputChange(event, setInputLocation)}
                    />
                </div>
                <div>
                    <label htmlFor="dropdown">Select A Job Type: </label>
                    <select id="dropdown" value={jobType} onChange={handleJobTypeChange}>
                        <option value=""></option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="On-site">On-site</option>
                    </select>
                </div>
                <div>
                    <button onClick={handleSaveEditName}>Save</button>
                </div>
            </form>


        </div>
    );
}

export default JobSearch;
