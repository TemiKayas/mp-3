import styled from "styled-components";
import { Link } from "react-router-dom"

const MyLink = styled(Link)`
    color: black;
    font-size: calc(4px + 1.5vw);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;


    transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;

    &:hover {
        text-decoration: none; 
        transform: scale(1.05); 
    }
`;

const MyDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30vw;
    height: 80vh;
    max-height: 80vh;
    background-color: deepskyblue;
    border: 3px solid black;
    border-radius: 45px;
    margin-right: 1%;

    @media screen and (max-width: 750px) {
        flex-direction: row;
        width: 90vw;
        height: 10vh;
        margin-right: 0;
        overflow-y: hidden;
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
        margin: 0 auto;
        align-items: center;
        width: 100%;
        height: auto;

        @media screen and (max-width: 750px) {
            flex-direction: row;
            justify-content: center;
            height: auto;
        }
    }

    li {
        text-decoration: none;
        background-color: #ffff21;
        border: 3px solid black;
        border-radius: 30px;
        margin: 8% 0;
        padding: 2%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%; 
        height: 50px; 

        @media screen and (max-width: 750px) {
            margin: 0 1px;
            padding: 2%;
            width: auto; 
            flex-grow: 1; 
        }
    }
`;






export default function Nav() {
    return (
        <MyDiv>
            <ul>
                <li><MyLink to={`/`}>Home</MyLink></li>
                <li><MyLink to={`/awards`}>Awards</MyLink></li>
                <li><MyLink to={'/education'}>Education</MyLink></li>
                <li><MyLink to={'/hackathons'}>Hackathons</MyLink></li>
                <li><MyLink to={'/projects'}>Projects</MyLink></li>
                <li><MyLink to={'/work'}>Work</MyLink></li>
            </ul>
        </MyDiv>
    )
}