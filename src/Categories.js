import { useEffect, useState } from "react";
import { supabase } from "./Client";
import JobList from "./JobList";
import styled from "styled-components";

// Styled Components

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    justify-content: center;
    align-content: center;
    padding: 0;
    text-align: center;
`;

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
            <Grid>
                <JobList backgroundColor="lightgreen" title="Alimentation" jobs={jobs.filter((job) => job.category === "alimentation")} />
                <JobList backgroundColor="lightblue" title="Hôtellerie-Restauration" jobs={jobs.filter((job) => job.category === "restauration")} />
                <JobList backgroundColor="red" title="Bâtiment" jobs={jobs.filter((job) => job.category === "batiment")} />
                <JobList backgroundColor="purple" title="Commerces & Services" jobs={jobs.filter((job) => job.category === "services")} />
                <JobList backgroundColor="turquoise" title="Métaux" jobs={jobs.filter((job) => job.category === "metaux")} />
                <JobList backgroundColor="yellow" title="Mécanique" jobs={jobs.filter((job) => job.category === "mecanique")} />
            </Grid>
        </div>
    );
};

export default Categories;
