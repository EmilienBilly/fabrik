import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledNav = styled(motion.nav)`
    width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    margin: 1em auto 0;

    img {
        height: 100%;
        background-image: url("/images/logo-cma.png");
        object-fit: contain;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding-right: 40px;
    font-weight: 900;
`;

const Navbar = () => {
    return (
        <StyledNav>
            <img src="/images/logo-cma.png" alt="" />
            <StyledLink to="/">Accueil</StyledLink>
        </StyledNav>
    );
};

export default Navbar;
