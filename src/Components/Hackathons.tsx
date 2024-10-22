import {BigDiv, SmallDiv} from "./ComponentStyles.tsx";

export default function Hackathons() {
    return (
        <BigDiv>
            <h1>Hackathons</h1>
            <SmallDiv>
                <h3>Boston Hacks 2023</h3>
                <img src="/public/bh2023.jpg" alt="Photo of me at Boston Hacks in 2023"/>

                <p>The photo above is of my team and I presenting our project for Boston Hacks 2023. We build
                    a ChatGPT based app integrated with the capital one API to provide financial advice. Was a fun
                    project, although we did not win.</p>
            </SmallDiv>
            <SmallDiv>
                <h3>WHACK 2023</h3>
                <img src="/public/whack2023.JPG" alt="Photo of my group and I at WHACK 2023"/>

                <p>This was a photo I took at WHACK2023, it depicts my group and I enjoying lunch at a picnic
                    bench on a cool November day. We build a project with a focus on tracking and deploying drones.
                    We were unable to finish and get the project where we wanted it to be. Well get them this year!</p>
            </SmallDiv>
            <SmallDiv>
                <h3>WHACK 2022</h3>
                <img src="/public/whack2022.JPG" alt="Photo of my group and I at WHACK 2022"/>

                <p>This was my very fist Hackathon! I went to Wellesley College's hackathon by my self and
                    matched up on a team with people I met that were looking for a group. We build an app that
                    allowed for the use of the LiDAR camera on modern phones to create 3d renders of real estate.
                    We had a focus on providing dorm tours, and we demoed our apps ability to create a render,
                    turn it into a 3d environment that would allow for VR view as well. </p>
            </SmallDiv>
        </BigDiv>
    );
}