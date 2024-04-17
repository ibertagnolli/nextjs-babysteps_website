import Jumbotron from "../components/Jumbotron"
import MainPageHeader from "../components/MainPageHeader"
import Navbar from "../components/Navbar"
import styles from "../styles/index.module.css"
import theme from "../styles/theme";

export default function MainPage() {
    return (
        <>
            <Navbar links={[
                {text: "Home", path: "/"},
                {text: "Team", path: "/team"},
                {text: "Tutorial", path: "/tutorial"},
            ]} bgcolor = "transparent"
                />
               
               {/* <div style={{ display: "flex", marginTop: "64px", flexDirection: "column", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "150px" }}><h1 style={{ letterSpacing: "8px", fontSize: "48px" }}>Welcome to BabySteps</h1></div>
                </div> */}
     <div className={styles.horizontal}style={{ marginTop: "64px" }}>
        {/* Content within the darker background */}
        <MainPageHeader /> 
           </div>

           <div style={{ display: "flex", flexDirection: "column", width: "100vw", alignItems:"center" ,padding:"32px"}}>
            <div style={{ display: "flex", flexDirection: "row", width: "100vw", alignItems:"center"}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7EPHTb2CE7U?si=GsRREf6gpf_EStD0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
           <div style={{ display: "flex", flexDirection: "column", width: "50vw", alignItems:"center"}}>
            <h1 style={{ letterSpacing: "4px", fontSize: "32px", fontFamily: "Montserrat", color: theme.colors.tertiary, textAlign: "center" }}> BabySteps in Action! </h1> 
            <h3 style={{ letterSpacing: "1px", fontSize: "16px", fontFamily: "Barlow", color:"#4f646f", textAlign: "center", margin: "8px 0"}}> Check out this video of BabySteps in action with real life examples of our app. </h3>
            </div>
            </div>
            </div>

    </>
      
    )
}