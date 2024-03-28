import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import styles from "../styles/index.module.css";
 // Import your Navbar component

const TeamMemberPage = () => {
    const router = useRouter();
    return (
        <>
            <Navbar
                links={[
                    { text: "Home", path:"/" },
                    { text: "Team", path: "/team" },
                    { text: "Tutorial", path: "/tutorial" },
                ]}
                bgcolor="transparent"
            />
            <div style={{ width: "100vw", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px" }}>
                <h2 style={{ fontSize: 50, color: "#0d4b5f", marginBottom: 10, marginTop: 30 }}><a href=""> DOWNLOAD NOW!</a></h2>
                <div className={styles.horizontal} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                    <div style={{ width: "30%", marginRight: 20 }}>
                        <video className={styles.teamImage} src="/images/milestonesfunctionality.mov" alt="tutorial video" />
                    </div>
                    <div style={{ width: "60%" }}>
                        <h3 style={{ fontSize: 32, color: "#0d4b5f", marginBottom: 10 }}>Isabella Bertagnolli</h3>
                        <p style={{ fontSize: 24, color: "#000000", marginBottom: 20 }}>
                           Check out our tutorial video for an overview of the BabySteps app and the features we
                        </p>
                    </div>
                </div>
                <hr style={{ width: "80%", color: "#E8E5DF", backgroundColor: "#E8E5DF", height: 1, border: "none" }} />
            </div>
        </>
    );
}

export default TeamMemberPage;
