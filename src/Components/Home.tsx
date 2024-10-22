import { BigDiv, SmallDiv } from './ComponentStyles';
import me from '/public/me.jpg'

export default function Home() {
    return(
        <BigDiv>
            <h1>Home</h1>

            <SmallDiv>
                <img src={me} alt="Photo of me"/>
                <p>My name is Artemios Kayas, I am currently a Junior at Boston University studying
                    computer science. I have been programming since middle school, and since then I have had a
                    hunger to learn as much as I could regarding the subject. I have participated in various events
                    and worked on a vast variety of projects. Through out this page you will find information
                    regarding my experience, please click through and navigate through the different pages to learn
                    more. Thank you for your time and interest!</p>
            </SmallDiv>
        </BigDiv>
    );
}