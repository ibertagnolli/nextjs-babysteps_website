import { useRouter } from "next/router";
import theme from "../styles/theme";

const MainPageHeader = () => {
    const router = useRouter();
    return (
        <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", width: "100%", padding: "24px"}}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "150px"}}>
                    <h1 style={{ letterSpacing: "4px", fontSize: "32px", fontFamily: "Montserrat", color: theme.colors.tertiary, textAlign: "center" }}>BabySteps helps Parents!</h1>
                </div> 
                <h3 style={{ letterSpacing: "1px", fontSize: "16px", fontFamily: "Barlow", color:"#4f646f", textAlign: "center", margin: "8px 0"}}>BabySteps is a comprehensive newborn app that helps caregivers track their child’s development through the first year of life.</h3> 
                <p className="work-paragraph" style={{ fontSize: "14px", margin: "8px 0"}}>Taking care of a newborn child is a lot of work. Caregivers need to track eating and sleeping appointments, doctor appointments, development milestones, and more. BabySteps is a comprehensive newborn caretaking app that helps all newborn caregivers stay updated and organized with their newborn's development. Babysteps tracks metrics, updates caregivers on development milestones, and helps the child's village stay connected on their care.</p>
                <span className="work-paragraph-mobile">
                            {/* Let us help you with the challenges of a newborn child. Babysteps can help you track 5 important metrics and stay organized with your child's development. */}
                        </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", width: "100%"}}>
                <div style={{ flexDirection: "column" }}>
                    <img style={{ width: "200px", padding: "20px",}}
                        src={"/nextjs-babysteps_website/images/newTracking.png"}
                        alt="tracking page of the Babysteps app" />
                    <img className="history-image"  style={{ width: "200px", padding: "20px"}}
                        src={"/nextjs-babysteps_website/images/finalHistory.png"}
                        alt="history page of the Babysteps app" />
                </div>
            </div>
            <style jsx>{`
                @media only screen and (max-width: 768px) {
                    /* Adjust styles for smaller screens */
                    div {
                        width: 100%;
                        background-color: ${theme.colors.secondary};
                        color:  ${theme.colors.tertiary};
                        flex-direction: column;
                    }
                    div:nth-child(1) {
                        width: 100%;
                        background-color: ${theme.colors.secondary};
                        color:  ${theme.colors.tertiary};
                      
                    }
                    div:nth-child(2) {
                        width: 100%;
                        background-color: ${theme.colors.secondary};
                        color:  ${theme.colors.tertiary};
                        align-items: center;
                        padding: 20px;
                       /* Add margin between text and images */
                    }
                    .history-image {
                        display: none; /* Hide the history image on mobile devices */
                    }
                    .work-paragraph{
                        display:none;
                    }
                    .work-paragraph-mobile {
                        display: block; /* Show this paragraph on mobile devices */
                        font-size: 14px; /* Change font size for mobile devices */
                        color: #666; /* Change color for mobile devices */
                        padding: 50px;
                       
                    }
                }
            `}</style>
        </div>
    )
}

export default MainPageHeader;
