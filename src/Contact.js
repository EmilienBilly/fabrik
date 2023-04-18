import Navbar from "./Navbar";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: white;
    text-align: center;
    margin: 3rem auto;

    @media (min-width: 1920px) {
        max-width: 80%;
    }
    @media (min-width: 960px) {
        width: 100%;
    }

    h1 {
        margin: 15px 0 0 0;
        font-size: 1.8rem;
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
    }

    p {
        width: 80%;
    }

    @media (min-width: 760px) {
        h1 {
            font-size: 2.4rem;
        }
    }
`;

const StyledInfos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: white;
    gap: 2rem;
    margin: 5rem auto;

    @media (min-width: 1024px) {
        width: 90%;
        flex-direction: row;
    }

    @media (min-width: 1920px) {
        width: 50%;
    }
`;

const StyledContactCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1.2rem;
    background: ${(props) => props.backColor};
    border-radius: 15px;

    span {
        font-size: 1.2rem;
        font-weight: 900;
    }

    @media (min-width: 1024px) {
        min-height: 15rem;
    }
`;

const backColor = {
    orange: "#FC7F36",
    blue: "#245A6A",
    green: "#85B36B;",
};

const Contact = () => {
    return (
        <>
            <Navbar />
            <StyledWrapper>
                <h1> Contacte-nous !</h1>
                <p>
                    Envoie nous un e-mail ou appelle nous pour avoir plus de
                    détails sur nos formations et les métiers de l'Artisanat
                </p>
                <StyledInfos>
                    <StyledContactCard backColor={backColor.orange}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
                            />
                        </svg>
                        <p>
                            <span>Email</span>
                            <br />
                            79-cma-cad@cma-nouvelleaquitaine.fr
                        </p>
                    </StyledContactCard>
                    <StyledContactCard backColor={backColor.blue}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2Z"
                            />
                        </svg>
                        <p>
                            <span>Téléphone</span>
                            <br />
                            05 49 77 22 17
                        </p>
                    </StyledContactCard>
                    <StyledContactCard backColor={backColor.green}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"
                            />
                        </svg>
                        <p>
                            <span>Adresse</span>
                            <br />
                            21 rue des herbillaux, 79000 Niort
                        </p>
                    </StyledContactCard>
                </StyledInfos>
            </StyledWrapper>
        </>
    );
};

export default Contact;
