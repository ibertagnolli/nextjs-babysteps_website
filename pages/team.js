import { useRouter } from "next/router";
import Navbar from "../components/Navbar"; // Import your Navbar component
import TeamMemberHighlight from "../components/TeamMemberHighlight";

const TeamMemberPage = () => {
    const router = useRouter();
    return (
        <>
            <Navbar
                links={[
                    { text: "Home", path: "/" },
                    { text: "Team", path: "/team" },
                    { text: "Tutorial", path: "/tutorial" },
                ]}
                bgcolor="transparent"
            />
            <div style={{display: "flex", marginTop: "64px", flexDirection: "column", width: "100%"}}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "150px"}}><h1 style={{letterSpacing: "8px", fontSize: "48px"}}>Meet the Team</h1></div>
                <TeamMemberHighlight
                    imgSrc="/nextjs-babysteps_website/images/selfPortrait.jpg"
                    name="Isabella Bertagnolli"
                >
                    Hi! I am a Senior studying computer science at the University of Utah. I am interested in Machine Learning, Web Development, Mobile Development, and Art. When I'm not coding, you can find me painting, hiking, biking, and climbing in the Salt Lake valley. I am currently a teaching assistant for the Mobile App programming class and have loved working on BabySteps for the past 6 months. You can reach me at irosebertagnolli@gmail.com on <a href="https://www.linkedin.com/in/isabella-bertagnolli/">LinkedIn</a> or learn more at <a href="https://ibertagnolli.github.io">my website</a>.
                </TeamMemberHighlight>
                <TeamMemberHighlight
                    imgSrc="/nextjs-babysteps_website/images/ta_picture.jpg"
                    name="Audrey Olson"
                    isAltStyle
                >
                   
I am a graduating senior from the University of Utah. I have interests in Full Stack Web Development, Mobile Development and Programming Languages. Between working on homework and beginning side projects, you can find me cuddling up with my newborn daughter and puppy. I currently work as a Software Developer at OC Tanner and have found a new passion in creating apps from working on BabySteps the past 6 months. You can reach me at audreybrynolson@gmail.com or here on <a href= "https://www.linkedin.com/in/audrey-olson-693a1a242/" >LinkedIn.</a> 

                </TeamMemberHighlight>
            </div>
           
        </>
    );
}

export default TeamMemberPage;
