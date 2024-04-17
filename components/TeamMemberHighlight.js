import theme from "../styles/theme";

const TeamMemberHighlight = ({imgSrc, name, children, isAltStyle}) => {
    const bgColor = isAltStyle ? "white" : theme.colors.secondary;
    const flexDirection = isAltStyle ? "row-reverse" : "row";
    return (
        <div style={{width: "100%", background: bgColor, display: "flex", justifyContent: "center"}}>
            <div class="rowdiv" style={{display: "flex", padding: "12px 32px", gap: "12px", width: "clamp(800px, 100%, 1200px)", alignItems: "center", minHeight: "400px", flexDirection: flexDirection}}>
                <div>
                    <img src={imgSrc} width={300} height={300} style={{borderRadius: "10px", objectFit: "cover"}}/>
                </div>
                <div style={{flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "32px"}}>
                    <h1 style={{textTransform: "uppercase", letterSpacing: "8px", color:theme.colors.tertiary}}>{name}</h1>
                    <div style={{fontSize: "18px"}}>{children}</div>
                </div>
            </div>
            <style jsx>{`
                @media only screen and (max-width: 768px) {
                    /* Adjust styles for smaller screens */
                    div {
                        flex-direction: column;
                    
                    }
                    div:nth-child(1) {
                        width: 100%;
                        padding: 12px;
                    }
                    h1 {
                        text-align: center; /* Center the text on mobile devices */
                    }
                }
            `}</style>
        </div>
    );
};

export default TeamMemberHighlight;
