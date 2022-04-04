import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState } from "react";

// Styled Components

const StyledJobList = styled(motion.div)`
    width: 90%;
    min-height: 45vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 5%;

    h1 {
        z-index: 2;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const StyledJobTitle = styled(motion.h3)`
    font-size: 1rem;
    margin: 0.5rem;
`;

const JobContainer = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            // The first child will appear AFTER the parrent has appeared on the screen
            delayChildren: 0.2,
            // The next sibling will appear 0.5s after the previous one
            staggerChildren: 0.3,
        },
    },
    hidden: { opacity: 0, x: -50 },
    exit: { opacity: 0 },
};

const JobItems = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

const JobList = (props) => {
    const jobs = props.jobs;
    const title = props.title;
    const backgroundColor = props.backgroundColor;
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);

    return (
        <StyledJobList onClick={() => setIsOpen(!isOpen)} backgroundColor={backgroundColor}>
            <LayoutGroup>
                <motion.h1 layout>{title}</motion.h1>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div layout animate={isOpen ? "visible" : "hidden"} variants={JobContainer} initial="hidden" exit="exit">
                            {jobs.map((job) => (
                                <motion.div variants={JobItems} key={job.id}>
                                    <StyledLink to={`/categories/metiers/${job.title}`}>
                                        <StyledJobTitle>{job.title}</StyledJobTitle>
                                    </StyledLink>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </LayoutGroup>
        </StyledJobList>
    );
};

export default JobList;
