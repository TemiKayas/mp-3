import {BigDiv, SmallDiv} from "./ComponentStyles.tsx";
import {Link} from "react-router-dom"
export default function Credits() {
    return (
        <BigDiv>
            <h1>Credits</h1>
            <SmallDiv>
                <h2>Photo of me</h2>
                <p>The image in the home page was taken by a friend of mine, and is the property of public domain,
                thank you to my friend.</p>
            </SmallDiv>
            <SmallDiv>
                <h2>Hackathon Photos</h2>
                <p>Thank you to my friends who not only joined me in the hackathons, but thank you to Evan Jaquez for
                    taking
                    the Boston hacks 2023 photo for me. The other 2 photos I have were taken by myself.</p>
            </SmallDiv>
            <SmallDiv>
                <h2>Boston University Modern Greek</h2>
                <p>Thank you to the Boston University Modern Greek department for providing me with the photo of me
                    during the award ceramony. There <Link to={"https://www.facebook.com/bumoderngreek/"}>Facebook</Link> page has a
                    whole bunch of cool photos.</p>
            </SmallDiv>
            <SmallDiv>

                <h2>Google IT Certification</h2>
                <p>Thank you to the Google IT program as well for providing the image of their certificate.
                    The <Link to={"https://www.coursera.org/professional-certificates/google-it-support?utm_medium=sem&utm_source=gg&utm_campaign=B2C_NAMER_google-it-support_google_FTCOF_professional-certificates_country-US-mostly-broad&campaignid=9433689805&adgroupid=90913850330&device=c&keyword=&matchtype=&network=g&devicemodel=&adposition=&creativeid=713819733267&hide_mobile_promo&gad_source=1&gclid=EAIaIQobChMI1uWcs-HSiAMV2W9HAR0NRBZFEAAYAiAAEgIZHfD_BwE"}>course</Link> is great, and I recommend it to anyone just starting out.</p>

            </SmallDiv>
        </BigDiv>
)
    ;
}