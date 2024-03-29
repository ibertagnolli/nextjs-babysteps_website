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
                    imgSrc="/nextjs-babysteps_website/images/resized_bella.jpeg"
                    name="Isabella Bertagnolli"
                >
                    Hi! I am a Senior studying computer science at the University of Utah. I am interested in Machine Learning, Web Development, Mobile Development, and Art. When I'm not coding, you can find me painting, hiking, biking, and climbing in the Salt Lake valley. I am currently a teaching assistant for the Mobile App programming class and have loved working on BabySteps for the past 6 months. You can reach me at <a href="irosebertagnolli@gmail.com">irosebertagnolli@gmail.com</a> or learn more at <a href="ibertagnolli.github.io">my website</a>.
                </TeamMemberHighlight>
                <TeamMemberHighlight
                    imgSrc="/nextjs-babysteps_website/images/ta_picture.jpg"
                    name="Audrey Olsen"
                    isAltStyle
                >
                   BIO HERE
                </TeamMemberHighlight>
            </div>
           
        </>
    );
}

export default TeamMemberPage;
