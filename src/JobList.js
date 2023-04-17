import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Styled Components
const StyledJobList = styled(motion.div)`
    width: 90%;
    min-height: 4rem;
    display: flex;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.$colorBackground};

    h2 {
        font-size: 1.2rem;
        font-weight: 600;
    }

    @media (min-width: 760px) {
        min-height: 5rem;
        width: 80%;

        h2 {
            font-size: 1.3rem;
        }
    }

    @media (min-width: 960px) {
        min-height: 5rem;
        width: 100%;

        h2 {
            font-size: 0.8rem;
        }
    }

    @media (min-width: 1024px) {
        min-height: 4rem;
        width: 100%;

        h2 {
            font-size: 0.8rem;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const StyledJobTitleWrapper = styled(motion.div)``;

const StyledJobTitle = styled(motion.h3)`
    span {
        font-size: 0.8rem;
        background-size: 100% 3px;
        transition: font-size 0.2s;
    }

    span:hover {
        border-bottom: 2px solid white;
        font-size: 1.1rem;
    }

    @media (min-width: 760px) {
        span {
            font-size: 0.9rem;
        }
    }

    @media (min-width: 960px) {
        span {
            font-size: 1rem;
        }
    }
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
    const linearGradient = props.linearGradient;
    const colorBackground = props.colorBackground;
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            // Vérifie si le composant est ouvert et si la cible du clic n'est pas ce composant,
            // alors le composant se ferme
            if (isOpen && ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            // Cleanup l'event listener
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isOpen]);

    return (
        <LayoutGroup>
            <StyledJobList
                transition={{ layout: { duration: 1 } }}
                style={{ borderRadius: "30px" }}
                layout
                onClick={() => setIsOpen(!isOpen)}
                ref={ref}
                $colorBackground={colorBackground}>
                <motion.h2 layout>{title}</motion.h2>
                <AnimatePresence>
                    {isOpen && (
                        <StyledJobTitleWrapper
                            layout
                            animate={isOpen ? "visible" : "hidden"}
                            variants={JobContainer}
                            initial="hidden"
                            exit="exit">
                            {jobs.map((job) => (
                                <motion.div
                                    layout
                                    variants={JobItems}
                                    key={job.id}>
                                    <StyledLink to={`/${job.title}`}>
                                        <StyledJobTitle
                                            $linearGradient={linearGradient}>
                                            <span>{job.title}</span>
                                        </StyledJobTitle>
                                    </StyledLink>
                                </motion.div>
                            ))}
                        </StyledJobTitleWrapper>
                    )}
                </AnimatePresence>
            </StyledJobList>
        </LayoutGroup>
    );
};

export default JobList;
