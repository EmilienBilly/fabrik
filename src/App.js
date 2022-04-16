import JobDetails from "./JobDetails";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body {
        height: 100vh;
        font-family: 'Poppins', sans-serif;
        background: #E7E5E5;
    }
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/metiers/:titre" element={<JobDetails />} />
            </Routes>
        </>
    );
}

export default App;
