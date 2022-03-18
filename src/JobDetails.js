import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./Client";

const JobDetails = () => {
    const { titre } = useParams();
    const [jobs, setJobs] = useState([]);
    const job = jobs.find((job) => job.title === titre);
    console.log(job);

    useEffect(() => {
        fetchJobs();
    }, []);

    async function fetchJobs() {
        const { data } = await supabase.from("metiers").select("*");
        setJobs(data);
    }

    return (
        <div>
            <h2>Job Details - {titre}</h2>
            <div>{job.description}</div>
        </div>
    );
};

export default JobDetails;
