import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Button from "@mui/material/Button";
import theme from "../styles/theme";
// Import your Navbar component

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
            <div style={{ display: "flex", marginTop: "64px", flexDirection: "column", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "150px" }}><h1 style={{ letterSpacing: "8px", fontSize: "48px" }}>Welcome to BabySteps</h1></div>
                 <div style={{ width: "100%", background: theme.colors.secondary, display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "flex", padding: "12px 32px", gap: "12px", width: "clamp(800px, 100%, 1200px)", alignItems: "center", minHeight: "400px", flexDirection: "row" }}>
                        <div>
                            <img src={"/nextjs-babysteps_website/images/tutorial.jpeg"} width={300} height={300} style={{ borderRadius: "10px", objectFit: "cover" }} />
                        </div>
                        <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "32px" }}>
                            <h1 style={{ textTransform: "uppercase", letterSpacing: "8px" }}>Tutorial</h1>
                            <div style={{ fontSize: "18px" }}>{
                                <p>Check out this video to see a walkthrough of our application.</p>
                               
                            }</div>
                             <Button 
                                onClick={() => router.push("/")} 
                                variant="text"
                                sx={{
                                  color: "black",
                                  borderColor: "black",
                                  bgcolor: "#FAF9F8",
                                  mb:1,
                                  ":hover": {
                                    bgcolor: theme.colors.primary,
                                  }
                                }}
                                >Download</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeamMemberPage;
