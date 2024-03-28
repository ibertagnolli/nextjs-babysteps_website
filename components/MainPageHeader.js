import { useRouter } from "next/router";
import theme from "../styles/theme";


const MainPageHeader = () => {
    const router = useRouter();
    return (
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "50%" , padding: "32px"}}>
                 <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "150px"}}><h1 style={{ letterSpacing: "8px", fontSize: "48px", fontFamily: "Montserrat", color: theme.colors.tertiary }}>BabySteps helps Parents!</h1></div> 
                 <h3 style={{ letterSpacing: "1px", fontSize: "18px", fontFamily: "Barlow", color:"#4f646f"}}>BabySteps is a comprehensive newborn app that helps caregivers track their child’s development through the first year of life.</h3> 
                <p>Taking care of a newborn child is a lot of work. Caregivers need to track eating and sleeping appointments, doctor appointments, development milestones, and more. BabySteps is a comprehensive newborn caretaking app that helps all newborn caregivers stay updated and organized with their newborn's development. Babysteps tracks metrics, updates caregivers on development milestones, and helps the child's village stay connected on their care.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                <div style={{ flexDirection: "column" }}>
                    <img style={{ width: "200px", padding: "20px",}}
                        src={"/nextjs-babysteps_website/images/finalTracking.png"}
                        alt="tracking page of the Babysteps app" />
                         <img style={{ width: "200px", padding: "20px",  }}
                        src={"/nextjs-babysteps_website/images/finalHistory.png"}
                        alt="tracking page of the Babysteps app" />
                </div>
            </div>
        </div>
    )
}

export default MainPageHeader;
