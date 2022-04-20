import { useEffect, useState } from "react";
import { supabase } from "./Client";
import JobList from "./JobList";
import Navbar from "./Navbar";
import styled from "styled-components";

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

// Styled Components
const StyledWrapper = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const StyledCategories = styled.div`
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin: 15px 0 0 0;
        font-size: 3rem;
        font-weight: 900;
        color: black;
        background: rgb(132, 94, 194);
        background: linear-gradient(
            61deg,
            rgba(132, 94, 194, 1) 0%,
            rgba(214, 93, 177, 1) 18%,
            rgba(226, 98, 168, 1) 32%,
            rgba(255, 111, 145, 1) 47%,
            rgba(255, 150, 113, 1) 65%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p {
        width: 50%;
        font-size: 1.5rem;
        color: white;
        text-align: center;
    }
`;

const Grid = styled.div`
    height: 45%;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 15px;
    justify-items: center;
    align-items: start;
    padding-top: 3.5rem;
    text-align: center;
`;

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
            <StyledWrapper>
                <StyledCategories>
                    <h1>FABRIK DES METIERS</h1>
                    <p>Découvre les métiers de l'Artisanat et leurs formations</p>
                </StyledCategories>
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
                        title="Hôtellerie Restauration"
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
