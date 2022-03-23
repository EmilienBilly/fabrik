import { Link } from "react-router-dom";

const JobList = (props) => {
    const jobs = props.jobs;
    return (
        <div>
            {jobs.map((job) => (
                <div key={job.id}>
                    <Link to={`/categories/metiers/${job.title}`}>
                        <h2>{job.title}</h2>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default JobList;
