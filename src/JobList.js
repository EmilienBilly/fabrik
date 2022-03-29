import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const JobList = (props) => {
    const jobs = props.jobs;

    return (
        <div>
            {jobs.map((job) => (
                <div key={job.id}>
                    <StyledLink to={`/categories/metiers/${job.title}`}>
                        <h3>{job.title}</h3>
                    </StyledLink>
                </div>
            ))}
        </div>
    );
};

export default JobList;
