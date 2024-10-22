import styled from "styled-components";
import {Link} from "react-router-dom";
const MyDiv = styled.div`
    border: 4px solid black;
    border-radius: 10px;
    text-align: center;
    background-color: deepskyblue;
    
`

export default function Footer() {
    return (
        <MyDiv>
            <h3>All rights reserved to Artemios Kayas <Link to={'/credits'}>Credits</Link> &copy;</h3>
        </MyDiv>

    );
}