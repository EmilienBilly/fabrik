import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./Client";
import styled from "styled-components";

const StyledJobDetails = styled.div`
    display: flex;
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
        <StyledJobDetails>
            <h2>{titre}</h2>
            {/* Conditional templating to avoid TypeError */}
            {job && (
                <div>
                    <p>{job.description}</p>
                </div>
            )}
        </StyledJobDetails>
    );
};

export default JobDetails;
