import {BigDiv, SmallDiv} from "./ComponentStyles.tsx";

export default function Work(){
    return (
        <BigDiv>
            <h1>Work Experience</h1>
            <SmallDiv>
                <h4>Hitachi Digital Services</h4>
                <p>SSVI Intern, Remote, June 2024 - Present </p>
                <p>Consulting Intern working with a talented team of engineers and consultants. Working
                    with LiDAR cameras and traditional cameras with a focus on object detection and
                    computer vision.
                </p>
            </SmallDiv>
            <SmallDiv>
                <h4>Blue Dev Digital</h4>
                <p>CEO, Framingham MA, June 2024 - Present </p>
                <p>Created a small web and app development company, working with talented Software
                    engineers to create products that were proud to deliver to our clients. Handle
                    all client facing, ensuring trust and a good relationship. Manage multiple teams
                    to get projects done, and continue to grow the business.
                </p>
            </SmallDiv>
            <SmallDiv>
                <h4>Collegium Pharmaceuticals</h4>
                <p>IT Intern, Canton MA, June 2023 - August 2023 </p>
                <p>Aided in developing a data migration plan from an onsite Active Directory to the cloud using
                    Microsoft Azure.
                    Worked with IT alongside legal and compliance to create safe and effective cyber security protocols.
                    Spearheaded the creation of a new internal company website to host online learnings and internal
                    resources.
                </p>
            </SmallDiv>
            <SmallDiv>
                <h4>Tech Advisors</h4>
                <p>IT Intern, Boston MA, December 2022- January 2023 </p>
                <p>Performed setups of new devices, configured windows, and administrated remote desktop control
                    applications.
                    Tracked progress of new device setup using Excel to ensure proper software was installed.
                    Allowed users to work remotely while maintaining effective remote IT support.</p>
            </SmallDiv>

            <SmallDiv>
                <h4>Freelance Web Developer</h4>
                <p>Self-Employed, Remote, May 2022 – August 2022</p>
                <p>Developed websites for local businesses, prioritized an easy to navigate design and optimal user
                    experience.
                    Ensured quality, and provided SEO to allow the business to appear prominently in their community.
                </p>
            </SmallDiv>
        </BigDiv>
    );
}