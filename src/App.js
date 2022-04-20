import JobDetails from "./JobDetails";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body {
        padding: 0;
        margin: 0;
        max-height: 100vh;
        font-family: 'Poppins', sans-serif;
        background: #242424;
    }
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <Routes>
                <Route path="/fabrik" element={<Home />} />
                <Route path="/fabrik/:titre" element={<JobDetails />} />
            </Routes>
        </>
    );
}

export default App;
