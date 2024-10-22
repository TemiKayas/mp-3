import { BigDiv, SmallDiv } from './ComponentStyles';

export default function Awards() {
    return (
        <BigDiv>
            <h1>Awards And Certificates</h1>
            <SmallDiv>
                <h3>Antonis Fragoudakis Memorial Award 2024</h3>

                <img src="../../public/award.jpg" alt="Image of me getting my award!"/>

                <p>This award was given to me during my time as a research assistant, I worked on a team figuring
                    out how we could best integrate AI to help teach Modern Greek. I worked with Professor
                    Polychroniou (Middle) and her student Spiro Capatos (Right)</p>
            </SmallDiv>
            <SmallDiv>
                <h3>Google IT certification.</h3>
                <img src="../../public/googlecert.webp" alt="Google IT certification"/>

                <p> I received this certification back in my senior year of high school. There was a program
                    to give students an oppurunity to earn this certificate and I was more than happy to take
                    part in the program. Many of the skills I learned from this program I still use to this day</p>
            </SmallDiv>
        </BigDiv>

    );
}