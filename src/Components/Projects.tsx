import {BigDiv, SmallDiv} from "./ComponentStyles.tsx";
import {Link} from "react-router-dom";
export default function Projects() {
    return (
        <BigDiv>
            <h1>Projects</h1>
            <SmallDiv>
                <h2>FPV Drone</h2>
                <img src="../../public/drone.JPG" alt="Photo of the FPV racing drone I build"/>
                <p>This is an image of an FPV racing drone I built and programmed last summer. Of all of the
                    projects I have done, this has got to be one of my favorites. In my opinion, FPV drone flying
                    is the closest am average person can get to flying a fighter jet.</p>
            </SmallDiv>
            <SmallDiv>
            <h2>To see my other projects...</h2>
                <p>To see my software projects, please check my <Link to={"https://github.com/TemiKayas"}>Github</Link>. My GitHub page is where I upload and document all of my software projects.</p>
            </SmallDiv>
        </BigDiv>
    );
}