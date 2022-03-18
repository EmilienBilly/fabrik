import { useEffect, useState } from "react";
import { supabase } from "./Client";
import { Link } from "react-router-dom";

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetchJobs();
    }, []);

    async function fetchJobs() {
        const { data: metiers } = await supabase.from("metiers").select("*");
        setJobs(metiers);
    }
    return (
        <div>
            {jobs.map((job) => (
                <div key={job.id}>
                    <Link to={`/categories/metiers/${job.title}`}>
                        <h2>{job.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default JobList;
