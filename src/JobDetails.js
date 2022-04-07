import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./Client";
import styled from "styled-components";

const colors = {
    alimentation: "linear-gradient(90deg, #4DAA57 0%, #8af27a 100%);",
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

const StyledJobDetails = styled.div`
    display: flex;
`;

const StyleJobTitle = styled.h2`
    background-image: ${({ categorie }) => handleColor(categorie)};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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
                <StyledJobDetails>
                    <div>
                        <StyleJobTitle categorie={job.category}>{titre}</StyleJobTitle>
                        <p>{job.description}</p>
                    </div>
                    <div></div>
                </StyledJobDetails>
            )}
        </div>
    );
};

export default JobDetails;
