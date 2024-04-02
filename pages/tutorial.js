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
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "150px" }}><h1 style={{ letterSpacing: "8px", fontSize: "48px" }}>Try BabySteps</h1></div>
                <div style={{ width: "100%", background: theme.colors.secondary, display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "flex", padding: "32px 32px", gap: "12px", width: "clamp(800px, 100%, 1200px)", alignItems: "center", minHeight: "400px", flexDirection: "row" }}>
                        <div style={{ display: "flex", padding: " 46px"}}>
                            <iframe width="300" height="580"
                                src="https://www.youtube.com/embed/7i4mzdLNA3M?si=6FdILv_ggdeNvN6J">
                            </iframe>
                            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/7i4mzdLNA3M?si=6FdILv_ggdeNvN6J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                        </div>
                        <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "32px" }}>
                            <h2 style={{ textTransform: "uppercase", letterSpacing: "8px" }}>Tutorial</h2>
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
                                    mb: 1,
                                    ":hover": {
                                        bgcolor: theme.colors.primary,
                                    }
                                }}
                            >Download</Button>
                        </div>
                    </div>
                </div>
            </div>
               <style jsx>{`
                @media only screen and (max-width: 768px) {
                    div:nth-child(2) {
                        flex-direction: column;
                   
                    }
                    div:nth-child(2) > div:nth-child(1) {
                        padding-bottom: 0;
                  
                    }
                   
                    // h2 {
                    //     order: -1; /* Move the h1 to the top */
                    //     text-align: center; /* Center the text */
                    //     margin-bottom: 10px; /* Add some space below the h1 */
                    // }
                    div > div:last-child {
                        order: -2; /* Move the video container above the text container */
                    }
                    h1 {
                        display: none; /* Hide the "Try BabySteps" text on iPhones */
                    }
                }
            `}</style>
        </>
    );
}

export default TeamMemberPage;
