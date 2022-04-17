import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./Client";
import styled from "styled-components";
import Navbar from "./Navbar";

const colors = {
    alimentation: "#85B36B;",
    restauration: "#4C83FA;",
    batiment: "#E76A4B;",
    services: "#827191;",
    metaux: "#245A6A;",
    mecanique: "#FC7F36;",
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
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledJobDetails = styled.div`
    max-height: 75vh;
    width: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    border-top: 3px solid;
    border-bottom: 3px solid;
    border-color: ${({ categorie }) => handleColor(categorie)};
    padding: 15px 0 15px 0;
`;

const StyledDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

    p {
        line-height: 1.6;
        font-size: 0.9rem;
        padding: 15px 0px 15px 0px;
    }
`;

const StyledImg = styled.div`
    justify-self: end;
    padding-right: 30px;
    img {
        border-radius: 10px;
        height: 450px;
        width: 350px;
        object-fit: cover;
        object-position: right;
    }
`;

const StyleJobTitle = styled.h1`
    height: 10vh;
    width: 90%;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 3rem;
    color: ${({ categorie }) => handleColor(categorie)};
    margin: 30px 0 0 0;
`;

const StyledDiplomes = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    color: white;

    h3 {
        margin: 0;
        font-size: 1.5rem;
    }
`;

const StyledButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        min-height: 40px;
        max-width: 200px;
        background-color: ${({ categorie }) => handleColor(categorie)};
        border: none;
        border-radius: 5px;
        color: #fff;
        text-transform: uppercase;
        font-size: 0.9rem;
        font-weight: 600;
        padding: 0.5rem 1rem;
        margin: 1rem;
        cursor: pointer;
    }
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
            <Navbar />
            {/* Conditional templating to avoid TypeError */}
            {job && (
                <StyledWrapper>
                    <StyleJobTitle categorie={job.category}>{titre}</StyleJobTitle>
                    <StyledJobDetails categorie={job.category}>
                        <StyledDescription categorie={job.category}>
                            <p>{job.description}</p>
                        </StyledDescription>
                        <StyledImg categorie={job.category}>
                            <img src={`/images/${titre}.jpg`} alt="" />
                        </StyledImg>
                    </StyledJobDetails>
                    <StyledDiplomes>
                        <h3>Découvre les formations</h3>
                        <StyledButtons categorie={job.category}>
                            {job.diplomes.map((diplome, index) => (
                                <a key={index} href={diplome.lien}>
                                    <button>
                                        <span>{diplome.titre}</span>
                                    </button>
                                </a>
                            ))}
                        </StyledButtons>
                    </StyledDiplomes>
                </StyledWrapper>
            )}
        </div>
    );
};

export default JobDetails;
