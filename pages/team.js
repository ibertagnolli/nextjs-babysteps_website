import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css"; // Import your Navbar component
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
                    imgSrc="/nextjs-babysteps_website/images/resized_bella.jpeg"
                    name="Audrey Olsen"
                    isAltStyle
                >
                   BIO HERE
                </TeamMemberHighlight>
            </div>
            {/* <div style={{ width: "100vw", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
                <h2 style={{ fontSize: 50, color: "#0d4b5f", marginBottom: 10, marginTop: 30 }}>Meet the Team</h2>
                <div className={styles.horizontal} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <div style={{ width: "30%", marginRight: 20 }}>
                        <img className={styles.teamImage} src={"/nextjs-babysteps_website/images/resized_bella.jpeg"} alt="Team Member Photo" />
                    </div>
                    <div style={{ width: "60%" }}>
                        <h3 style={{ fontSize: 32, color: "#0d4b5f", marginBottom: 10 }}>Isabella Bertagnolli</h3>
                        <p style={{ fontSize: 24, color: "#000000", marginBottom: 20 }}>
                        </p>
                    </div>
                </div>
                <hr style={{ width: "80%", color: "#E8E5DF", backgroundColor: "#E8E5DF", height: 1, border: "none" }} />
            </div> */}
        </>
    );
}

export default TeamMemberPage;
