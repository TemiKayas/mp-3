import styled from 'styled-components';

export const BigDiv = styled.div`
    background-color: darkgray;
    display: flex;
    flex-direction: column;
    justify-content: flex-start; 
    align-items: center;         
    padding: 2% 0;               
    border: 3px solid black;
    width: 100%;
    height: 80vh;                
    border-radius: 45px;
    overflow-y: auto;           
    box-sizing: border-box;
    
`;

export const SmallDiv = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 3%;
    width: 90%;
    height: auto;

    border: 3px solid black;
    border-radius: 85px;

    background-color: deepskyblue;

    justify-content: center;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    @media screen and (max-width: 750px) {
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
    img{
        max-width: 40%;
        padding-top: 1%;
        padding-bottom: 3%;
    }
    p {
        margin-right: 5%;
        margin-left: 5%;
        font-size: calc(4px + 1vw);
        text-align: center;
    }
`;
