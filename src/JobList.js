import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components

const StyledJobList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
    list-style: none;
    color: blueviolet;
    z-index: 1;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const StyledJobTitle = styled.h3``;

const JobList = (props) => {
    const jobs = props.jobs;
    const title = props.title
    const backgroundColor = props.backgroundColor

    return (
        <StyledJobList backgroundColor={backgroundColor}>
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
