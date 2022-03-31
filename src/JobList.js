import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components


const StyledJobList = styled.div`
    color: red;
    z-index: 1;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    visibility: hidden;
    z-index: 2;

    ${StyledJobList}:hover & {
        visibility: visible;
    }
`;

const StyledJobTitle = styled.h3``;

const JobList = (props) => {
    const jobs = props.jobs;

    return (
        <StyledJobList>
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
