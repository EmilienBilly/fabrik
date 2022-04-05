import Home from "./Home";
import JobList from "./JobList";
import JobDetails from "./JobDetails";
import Categories from "./Categories";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body {
        height: 100vh;
        font-family: 'Poppins', sans-serif;
        background-image: white;
    }
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/metiers" element={<JobList />} />
                <Route path="/categories/metiers/:titre" element={<JobDetails />} />
            </Routes>
        </>
    );
}

export default App;
