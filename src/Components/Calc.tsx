import { useReducer, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
    width: 20%;
    padding: 2%;
    margin: 2%;
    border-radius: 30px;
    border: 3px solid black;
    font-size: calc(1px + 1vw);
    text-align: center;
    outline: none;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: nowrap; 
    justify-content: space-between; 
    margin-top: 3%;
    width: 100%; 
`;

const Button = styled.button`
    background-color: #ffff21;
    color: black;
    padding: 1% 3%;  
    margin: 1%;      
    border-radius: 50px;
    font-size: calc(2px + 1vw);
    cursor: pointer;
    border: 3px solid black;

    transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;
    

    &:hover {
        text-decoration: none;
        transform: scale(1.05);
    }
`;

const ClearButton = styled(Button)`
    background-color: #f44336;
    border: 3px solid black;
    color: black;
    transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;

    &:hover {
        text-decoration: none;
        transform: scale(1.05);
    }
`;

const Result = styled.h3`
    font-size: calc(4px + 2vw);
    color: black;
    margin-top: 3%;
`;


type State = {
    result: number | string;
};

type Action = {
    type: "add" | "subtract" | "multiply" | "divide" | "power" | "clear";
    first?: string;
    second?: string;
};

function reducer(state: State, action: Action): State {
    if (action.type === "clear") {
        return { result: 0 };
    }

    const num1 = parseFloat(action.first || "");
    const num2 = parseFloat(action.second || "");

    if (isNaN(num1) || isNaN(num2)) {
        return { result: "Invalid input" };
    }

    switch (action.type) {
        case "add":
            return { result: num1 + num2 };
        case "subtract":
            return { result: num1 - num2 };
        case "multiply":
            return { result: num1 * num2 };
        case "divide":
            return { result: num2 !== 0 ? num1 / num2 : "Cannot divide by 0" };
        case "power":
            return { result: Math.pow(num1, num2) };
        default:
            return state;
    }
}

export default function Calc() {
    const [first, setFirst] = useState<string>("");
    const [second, setSecond] = useState<string>("");

    const [state, dispatch] = useReducer(reducer, { result: 0 });

    const handleClear = () => {
        setFirst("");
        setSecond("");
        dispatch({ type: "clear" });
    };

    return (
        <>
            <Input
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                type="number"
                placeholder="1st Number"
            />
            <Input
                value={second}
                onChange={(e) => setSecond(e.target.value)}
                type="number"
                placeholder="2nd Number"
            />
            <ButtonContainer>
                <Button onClick={() => dispatch({ type: "add", first, second })}>Add</Button>
                <Button onClick={() => dispatch({ type: "subtract", first, second })}>Subtract</Button>
                <Button onClick={() => dispatch({ type: "multiply", first, second })}>Multiply</Button>
                <Button onClick={() => dispatch({ type: "divide", first, second })}>Divide</Button>
                <Button onClick={() => dispatch({ type: "power", first, second })}>Power</Button>
                <ClearButton onClick={handleClear}>Clear</ClearButton>
            </ButtonContainer>
            <Result>{state.result}</Result>
        </>
    );
}
