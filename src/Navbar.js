import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledNav = styled(motion.nav)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;

    img {
        height: 80%;
        width: 5%;
        padding-left: 40px;
        background-image: url("/images/logo-cma.png");
        object-fit: contain;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
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
