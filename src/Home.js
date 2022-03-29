import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Quizz</h1>
            <Link to="/categories">
                <h1>Catégories</h1>
            </Link>
        </div>
    );
};

export default Home;
