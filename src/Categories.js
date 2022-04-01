import { useEffect, useState } from "react";
import { supabase } from "./Client";
import JobList from "./JobList";
import styled from "styled-components";

// Styled Components

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
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
        <Grid>
            <JobList backgroundColor="#4DAA57" title="Alimentation" jobs={jobs.filter((job) => job.category === "alimentation")} />
            <JobList backgroundColor="#37718E" title="Hôtellerie-Restauration" jobs={jobs.filter((job) => job.category === "restauration")} />
            <JobList backgroundColor="#C33C54" title="Bâtiment" jobs={jobs.filter((job) => job.category === "batiment")} />
            <JobList backgroundColor="#853263" title="Commerces & Services" jobs={jobs.filter((job) => job.category === "services")} />
            <JobList backgroundColor="#AEF3E7" title="Métaux" jobs={jobs.filter((job) => job.category === "metaux")} />
            <JobList backgroundColor="#F7B32B" title="Mécanique" jobs={jobs.filter((job) => job.category === "mecanique")} />
        </Grid>
    );
};

export default Categories;
