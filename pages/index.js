import Jumbotron from "../components/Jumbotron"
import MainPageHeader from "../components/MainPageHeader"
import Navbar from "../components/Navbar"
import styles from "../styles/index.module.css"

export default function MainPage() {
    return (
        <>
            <Navbar links={[
                {text: "Home", path: basePath + "/"},
                {text: "Team", path: "/team"},
                {text: "Tutorial", path: "/tutorial"},
            ]} bgcolor = "transparent"
                />
               
     {/* Apply the darker color below the navigation bar */}
     <div className={styles.horizontal}style={{ marginTop: "100px" }}>
        {/* Content within the darker background */}
        <MainPageHeader />  
           </div>
    </>
      
    )
}