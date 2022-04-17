import { useEffect, useState } from "react";
import { supabase } from "./Client";
import JobList from "./JobList";
import Navbar from "./Navbar";
import styled from "styled-components";

// Styled Components
const StyledWrapper = styled.div`
    max-height: 90vh;
    display: flex;
    justify-content: center;
`;
const StyledCategories = styled.div`
    display: grid;
    place-content: center;
    color: black;
`;

const Grid = styled.div`
    height: 100%;
    width: 95%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    justify-items: center;
    align-items: start;
    padding: 0;
    text-align: center;
`;

const colors = {
    alimentation: "linear-gradient(109.6deg, rgba(95, 115, 82, 1), rgba(76, 106, 58, 1));",
    hotellerie: "linear-gradient( 109.6deg,  rgba(45,116,213,1) 11.2%, rgba(121,137,212,1) 91.2% );",
    batiment: "linear-gradient( 69.7deg,  rgba(216,81,82,1) 40%, rgba(154,27,69,1) 100.1% );",
    commerce: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(174,24,255,1) 0%, rgba(246,134,255,1) 90% );",
    metaux: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% );",
    mecanique: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,209,67,1) 0%, rgba(255,145,83,1) 90% );",
};

const backColor = {
    alimentation: "#85B36B;",
    hotellerie: "#4C83FA;",
    batiment: "#E76A4B;",
    commerce: "#827191;",
    metaux: "#245A6A;",
    mecanique: "#FC7F36;",
};

const Home = () => {
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
            <Navbar />
            <StyledCategories>FABRIK DES METIERS</StyledCategories>
            <StyledWrapper>
                <Grid>
                    <JobList
                        colorBackground={backColor.alimentation}
                        linearGradient={colors.alimentation}
                        title="Alimentation"
                        jobs={jobs.filter((job) => job.category === "alimentation")}
                    />
                    <JobList
                        colorBackground={backColor.hotellerie}
                        linearGradient={colors.hotellerie}
                        title="Hôtellerie-Restauration"
                        jobs={jobs.filter((job) => job.category === "restauration")}
                    />
                    <JobList
                        colorBackground={backColor.batiment}
                        linearGradient={colors.batiment}
                        title="Bâtiment"
                        jobs={jobs.filter((job) => job.category === "batiment")}
                    />
                    <JobList
                        colorBackground={backColor.commerce}
                        linearGradient={colors.commerce}
                        title="Commerces & Services"
                        jobs={jobs.filter((job) => job.category === "services")}
                    />
                    <JobList
                        colorBackground={backColor.metaux}
                        linearGradient={colors.metaux}
                        title="Métaux"
                        jobs={jobs.filter((job) => job.category === "metaux")}
                    />
                    <JobList
                        colorBackground={backColor.mecanique}
                        linearGradient={colors.mecanique}
                        title="Mécanique"
                        jobs={jobs.filter((job) => job.category === "mecanique")}
                    />
                </Grid>
            </StyledWrapper>
        </div>
    );
};

export default Home;
