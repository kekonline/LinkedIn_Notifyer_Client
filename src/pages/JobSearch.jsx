import { useEffect, useState } from "react"
import axiosInstance from "/src/services/axiosInstance"

function JobSearch() {
    const [jobType, setJobType] = useState('');
    const [inputLocation, setInputLocation] = useState('');
    const [inputJobSerchTerm, setInputJobSerchTerm] = useState('');

    const handleJobTypeChange = (event) => {
        setJobType(event.target.value);
    };

    const handleInputChange = (event, setter) => {
        setter(event.target.value);
    };





    const getSearchTerms = async () => {
        const responseSearchTerms = await axiosInstance.get("searchterm")
        console.log("responsegetSearchTerms", responseSearchTerms)
    };

    useEffect(() => {
        getSearchTerms();
    }, [])



    return (
        <div>JobSearch


            <form>



                <div>
                    <label htmlFor="inputLocation">Search Term: </label>
                    <input
                        id="inputSearchTerm"
                        type="text"
                        value={inputJobSerchTerm}
                        onChange={() => handleInputChange(event, setInputJobSerchTerm)}
                    />
                </div>
                <div>
                    <label htmlFor="inputLocation">Location: </label>
                    <input
                        id="inputLocation"
                        type="text"
                        value={inputLocation}
                        onChange={() => handleInputChange(event, setInputLocation)}
                    />
                </div>
                <div>
                    <label htmlFor="dropdown">Select A Job Type: </label>
                    <select id="dropdown" value={jobType} onChange={handleJobTypeChange}>
                        <option value="" > </option>
                        <option value="Remote">Remote</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="On-site">On-site</option>
                    </select>
                </div>

            </form>

        </div>
    )
}

export default JobSearch