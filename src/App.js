import "./App.css";
import Home from "./Home";
import JobList from "./JobList";
import JobDetails from "./JobDetails";
import Categories from "./Categories";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/categories/metiers" element={<JobList />} />
                    <Route path="/categories/metiers/:titre" element={<JobDetails />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
