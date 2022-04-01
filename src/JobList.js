import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

// Styled Components

const StyledJobList = styled(motion.div)`
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 5%;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const StyledJobTitle = styled.h3`
    font-size: 1rem;
    margin: 0.5rem;

    ${StyledJobList}
`;

const JobList = (props) => {
    const jobs = props.jobs;
    const title = props.title;
    const backgroundColor = props.backgroundColor;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledJobList onClick={() => setIsOpen(!isOpen)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} backgroundColor={backgroundColor}>
            <h1>{title}</h1>
            {jobs.map((job) => (
                <div key={job.id}>
                    <StyledLink to={`/categories/metiers/${job.title}`}>
                        <StyledJobTitle>{job.title}</StyledJobTitle>
                    </StyledLink>
                </div>
            ))}
        </StyledJobList>
    );
};

export default JobList;
