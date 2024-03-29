import { useEffect, useState } from "react";
import { supabase } from "./Client";
import JobList from "./JobList";
import Navbar from "./Navbar";
import styled from "styled-components";
import { AnimatePresence, LayoutGroup } from "framer-motion";

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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem auto;

    @media (min-width: 1920px) {
        max-width: 80%;
    }
    @media (min-width: 960px) {
        width: 100%;
    }
`;
const StyledCategories = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: white;
    text-align: center;

    h1 {
        margin: 15px 0 0 0;
        font-size: 1.8rem;
        font-weight: 900;
        color: black;
        text-align: center;
        text-transform: uppercase;
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
        width: 80%;
    }

    @media (min-width: 760px) {
        font-size: 1.8rem;

        h1 {
            font-size: 2.4rem;
        }
    }
`;

const Grid = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(6, auto);
    grid-gap: 15px;
    justify-items: center;
    align-items: start;
    padding-top: 3.5rem;
    text-align: center;

    @media (min-width: 1024px) {
        grid-template-columns: repeat(6, 1fr);
    }
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
        <>
            <Navbar />
            <StyledWrapper>
                <StyledCategories>
                    <h1>FABRIK DES METIERS</h1>
                    <p>
                        Découvre les métiers de l'Artisanat et leurs formations
                    </p>
                </StyledCategories>
                <AnimatePresence>
                    <Grid>
                        <LayoutGroup>
                            <JobList
                                layout
                                colorBackground={backColor.alimentation}
                                title="Alimentation"
                                jobs={jobs.filter(
                                    (job) => job.category === "alimentation"
                                )}
                            />
                            <JobList
                                layout
                                colorBackground={backColor.hotellerie}
                                title="Hôtellerie Restauration"
                                jobs={jobs.filter(
                                    (job) => job.category === "restauration"
                                )}
                            />
                            <JobList
                                layyout
                                colorBackground={backColor.batiment}
                                title="Bâtiment"
                                jobs={jobs.filter(
                                    (job) => job.category === "batiment"
                                )}
                            />
                            <JobList
                                layout
                                colorBackground={backColor.commerce}
                                title="Commerces & Services"
                                jobs={jobs.filter(
                                    (job) => job.category === "services"
                                )}
                            />
                            <JobList
                                layout
                                colorBackground={backColor.metaux}
                                title="Métaux"
                                jobs={jobs.filter(
                                    (job) => job.category === "metaux"
                                )}
                            />
                            <JobList
                                layout
                                colorBackground={backColor.mecanique}
                                title="Mécanique"
                                jobs={jobs.filter(
                                    (job) => job.category === "mecanique"
                                )}
                            />
                        </LayoutGroup>
                    </Grid>
                </AnimatePresence>
            </StyledWrapper>
        </>
    );
};

export default Home;
