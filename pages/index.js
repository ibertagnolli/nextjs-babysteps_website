import Jumbotron from "../components/Jumbotron"
import MainPageHeader from "../components/MainPageHeader"
import Navbar from "../components/Navbar"
import styles from "../styles/index.module.css"

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
    </>
      
    )
}