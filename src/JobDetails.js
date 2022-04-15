import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./Client";
import styled from "styled-components";

const colors = {
    alimentation: "linear-gradient(109.6deg, rgba(95, 115, 82, 1), rgba(76, 106, 58, 1));",
    restauration: "linear-gradient( 109.6deg,  rgba(45,116,213,1) 11.2%, rgba(121,137,212,1) 91.2% );",
    batiment: "linear-gradient( 69.7deg,  rgba(216,81,82,1) 40%, rgba(154,27,69,1) 100.1% );",
    services: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(174,24,255,1) 0%, rgba(246,134,255,1) 90% );",
    metaux: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% );",
    mecanique: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,209,67,1) 0%, rgba(255,145,83,1) 90% );",
};

const handleColor = (categorie) => {
    switch (categorie) {
        case "alimentation":
            return colors.alimentation;
        case "restauration":
            return colors.restauration;
        case "batiment":
            return colors.batiment;
        case "services":
            return colors.services;
        case "metaux":
            return colors.metaux;
        case "mecanique":
            return colors.mecanique;
        default:
            return "";
    }
};

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    text-align: justify;
`;

const StyledJobDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyleJobTitle = styled.h2`
    /* background-image: ${({ categorie }) => handleColor(categorie)};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    align-self: flex-start; */
    border-bottom: 2px solid black;
    padding-bottom: 15px;
`;

const StyledImg = styled.div`
    padding: 30px;
    img {
        height: 500px;
        width: 425px;
        object-fit: cover;
        object-position: right;
        border: solid 6px;
        border-image: linear-gradient(90deg, purple, orange) 1;
    }
`;

const StyledDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        border-bottom: 2px solid black;
        padding-bottom: 15px;
    }

    div {
        width: 80%;
    }
`;

const StyledButtons = styled.div`
    min-width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const JobDetails = () => {
    const { titre } = useParams();
    const [jobs, setJobs] = useState([]);
    const job = jobs.find((job) => job.title === titre);

    useEffect(() => {
        fetchJobs();
    }, []);

    async function fetchJobs() {
        const { data } = await supabase.from("metiers").select("*");
        setJobs(data);
    }

    return (
        <div>
            {/* Conditional templating to avoid TypeError */}
            {job && (
                <StyledWrapper>
                    <StyledJobDetails>
                        <StyledImg>
                            <img src={`/images/${titre}.jpg`} alt="" />
                        </StyledImg>
                        <StyledDescription>
                            <div>
                                <StyleJobTitle categorie={job.category}>{titre}</StyleJobTitle>
                                <p>{job.description}</p>
                                <StyledButtons>
                                    {job.diplomes.map((diplome, index) => (
                                        <a key={index} href={diplome.lien}>
                                            <button>{diplome.titre}</button>
                                        </a>
                                    ))}
                                </StyledButtons>
                            </div>
                        </StyledDescription>
                        <div></div>
                    </StyledJobDetails>
                </StyledWrapper>
            )}
        </div>
    );
};

export default JobDetails;
