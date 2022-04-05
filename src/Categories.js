import { useEffect, useState } from "react";
import { supabase } from "./Client";
import JobList from "./JobList";
import styled from "styled-components";

// Styled Components

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
    justify-items: center;
    align-items: center;
    padding: 0;
    text-align: center;
`;

const colors = {
    alimentation: "linear-gradient(90deg, #4DAA57 0%, #8af27a 100%);",
    hotellerie: "linear-gradient( 109.6deg,  rgba(45,116,213,1) 11.2%, rgba(121,137,212,1) 91.2% );",
    batiment: "linear-gradient( 69.7deg,  rgba(216,81,82,1) 40%, rgba(154,27,69,1) 100.1% );",
    commerce: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(174,24,255,1) 0%, rgba(246,134,255,1) 90% );",
    metaux: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% );",
    mecanique: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,209,67,1) 0%, rgba(255,145,83,1) 90% );",
};

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
            <JobList linearGradient={colors.alimentation} title="Alimentation" jobs={jobs.filter((job) => job.category === "alimentation")} />
            <JobList linearGradient={colors.hotellerie} title="Hôtellerie-Restauration" jobs={jobs.filter((job) => job.category === "restauration")} />
            <JobList linearGradient={colors.batiment} title="Bâtiment" jobs={jobs.filter((job) => job.category === "batiment")} />
            <JobList linearGradient={colors.commerce} title="Commerces & Services" jobs={jobs.filter((job) => job.category === "services")} />
            <JobList linearGradient={colors.metaux} title="Métaux" jobs={jobs.filter((job) => job.category === "metaux")} />
            <JobList linearGradient={colors.mecanique} title="Mécanique" jobs={jobs.filter((job) => job.category === "mecanique")} />
        </Grid>
    );
};

export default Categories;
