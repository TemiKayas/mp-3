import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    text-align: left;
    height: 10vh;
    width: 100%;
    border-radius: 45px;
    border: 3px solid black;
    background-color: deepskyblue;
    padding: 3% 0;
    margin-top: 1%;
    justify-content: center;


    h1, h3 {
        padding-left: 3%;
    }

    @media screen and (max-width: 750px) {
        text-align: center;

    }
`;

export default function Header() {
    return (
        <>
            <StyledHeader>
                <h1>Artemios Kayas</h1>
                <h3>Welcome to my resume!</h3>
            </StyledHeader>
        </>
    );
}