import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledNav = styled(motion.nav)`
    width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    margin: 10px auto 0;

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 30px;
            fill: white;
        }
    }

    img {
        height: 100%;
        background-image: url("/images/logo-cma.png");
        object-fit: contain;
    }
`;

const StyledLink = styled(Link)`
    align-self: end;
    text-decoration: none;
    color: white;
    padding-right: 5px;
    padding-left: 25px;
    font-weight: 900;
`;

const Navbar = () => {
    return (
        <StyledNav>
            <img src="/images/logo-cma.png" alt="" />
            <div>
                <StyledLink to="/">Contact</StyledLink>
                <StyledLink to="/">Accueil</StyledLink>
                <img src="/images/logo-home.svg" alt="" />
            </div>
        </StyledNav>
    );
};

export default Navbar;