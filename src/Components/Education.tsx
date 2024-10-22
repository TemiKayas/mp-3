import {BigDiv, SmallDiv} from "./ComponentStyles.tsx";

export default function Education() {
    return (
        <BigDiv>
            <SmallDiv>
                <h3>Framingham High School</h3>
                <p>2017 - 2021, earned my high school diploma</p>
            </SmallDiv>
            <SmallDiv>
                <h3>Framingham State University</h3>
                <p>2021 - 2023, Started college at a local state school, pursued a degree in math here</p>
            </SmallDiv>
            <SmallDiv>
                <h3>Boston University</h3>
                <p>2023 - Expected 2026, I transferred to BU, and here I am pursuing a degree in computer
                    science </p>
            </SmallDiv>
        </BigDiv>
    );
}