import { useEffect, useState } from "react";
import { supabase } from "./Client";
import JobList from "./JobList";

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
            <div>
                <ul>
                    <li>
                        <h1>Alimentation</h1>
                        <JobList jobs={jobs.filter((job) => job.category === "alimentation")} />
                    </li>
                    <li>
                        <h1>Hôtellerie-Restauration</h1>
                        <JobList jobs={jobs.filter((job) => job.category === "restauration")} />
                    </li>
                    <li>
                        <h1>Bâtiment</h1>
                        <JobList jobs={jobs.filter((job) => job.category === "batiment")} />
                    </li>
                    <li>
                        <h1>Commerces & Services</h1>
                        <JobList jobs={jobs.filter((job) => job.category === "services")} />
                    </li>
                    <li>
                        <h1>Métaux</h1>
                        <JobList jobs={jobs.filter((job) => job.category === "metaux")} />
                    </li>
                    <li>
                        <h1>Mécanique</h1>
                        <JobList jobs={jobs.filter((job) => job.category === "mecanique")} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Categories;
