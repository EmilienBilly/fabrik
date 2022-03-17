import { useEffect, useState } from "react";
import { supabase } from "./Client";

const Categories = () => {
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
                <div key={job.id}>{job.title}</div>
            ))}
        </div>
    );
};

export default Categories;
