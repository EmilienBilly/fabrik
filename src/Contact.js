import Navbar from "./Navbar";
import styled from "styled-components";

const StyledWrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 3rem auto;

    @media (min-width: 1980px) {
        width: 50%;
    }

    h1 {
        margin: 15px 0 0 0;
        font-size: 2.5rem;
        font-weight: 900;
        color: black;
        text-align: center;
        text-transform: uppercase;
        background: rgb(132, 94, 194);
        background: linear-gradient(
            61deg,
            rgba(132, 94, 194, 1) 0%,
            rgba(214, 93, 177, 1) 18%,
            rgba(226, 98, 168, 1) 32%,
            rgba(255, 111, 145, 1) 47%,
            rgba(255, 150, 113, 1) 65%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        @media (max-width: 760px) {
            font-size: 1.8rem;
        }
    }
`;

const StyledInfos = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    gap: 0.5rem;
`;

const Contact = () => {
    return (
        <>
            <Navbar />
            <StyledWrapper>
                <h1> Contactez-nous !</h1>
                <StyledInfos>
                    <span>
                        <p>Email : 79-cma-cad@cma-nouvelleaquitaine.fr</p>
                    </span>
                    <span>
                        <p>Téléphone : 05 49 77 22 17</p>
                    </span>
                    <span>
                        <p>Adresse : 21 rue des herbillaux, 79000 Niort</p>
                    </span>
                </StyledInfos>
            </StyledWrapper>
        </>
    );
};

export default Contact;
