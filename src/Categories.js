import { useEffect, useState } from "react";
import { supabase } from "./Client";
import JobList from "./JobList";
import styled from "styled-components";

// Styled Components

const Grid = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    justify-content: center;
    align-content: center;
    padding: 0;
    text-align: center;
`;

const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightgreen;
    list-style: none;
`;

const Categories = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetchJobs();
    }, []);

    async function fetchJobs() {
        const { data: metiers } = await supabase.from("metiers").select("*");
        setJobs(metiers);
    }

    return (
        <div>
            <Grid>
                <ListItem>
                    <h1>Alimentation</h1>
                    <JobList jobs={jobs.filter((job) => job.category === "alimentation")} />
                </ListItem>
                <ListItem>
                    <h1>Hôtellerie-Restauration</h1>
                    <JobList jobs={jobs.filter((job) => job.category === "restauration")} />
                </ListItem>
                <ListItem>
                    <h1>Bâtiment</h1>
                    <JobList jobs={jobs.filter((job) => job.category === "batiment")} />
                </ListItem>
                <ListItem>
                    <h1>Commerces & Services</h1>
                    <JobList jobs={jobs.filter((job) => job.category === "services")} />
                </ListItem>
                <ListItem>
                    <h1>Métaux</h1>
                    <JobList jobs={jobs.filter((job) => job.category === "metaux")} />
                </ListItem>
                <ListItem>
                    <h1>Mécanique</h1>
                    <JobList jobs={jobs.filter((job) => job.category === "mecanique")} />
                </ListItem>
            </Grid>
        </div>
    );
};

export default Categories;
