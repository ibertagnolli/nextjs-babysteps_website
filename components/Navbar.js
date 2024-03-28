import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import theme from "../styles/theme";

export default function Navbar({links}, bgcolor) {
    const router = useRouter();
    return (
        <div style={{
            top: "0",
            position: "sticky", 
            height: 64, 
            width: "95vw", 
            marginBottom: -64, 
            paddingLeft: "1rem", 
            paddingRight: "1rem", 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            zIndex: 69,
            backgroundColor: bgcolor,
        }}>
          
             <img 
            style={{width: "50px", position: "absolute", }} 
            src={"/images/Babysteps1024.jpg" }
            alt = "capstone team photo" 
     />

      
            <h2 style={{color:"#0d4b5f",font:"Helvetica", padding:"60px"}}>BabySteps</h2>
                
            
            <div style={{display: "flex", gap: "1rem"}}>
                {
                    links.map(link => (
                        <Button 
                        onClick={() => router.push(link.path)} key={link.path}
                        variant="text"
                        sx={{
                          color: "black",
                          borderColor: "black",
                          mb:1,
                          ":hover": {
                            backgroundcolor: "black",
                            textDecoration: "underline #000000"
                          }
                        }}
                        >{link.text}</Button>
                    ))
                }
            </div>
        </div>
    )
}
