import { useRouter } from "next/router";

const MainPageHeader = () => {
   const router = useRouter();
    return (<div style={{position: "relative", width: "100vw", height: "100vh", display: "flex", alignItems:"left", justifyContent: "left"}}>
        <h2 style={{fontSize: 65, color: "#0d4b5f", textAlign: "left"}}>BabySteps helps Parents!</h2>
     
       <div style={{flexDirection:"column"}}>
      <img style={{width: "200px",padding:"20px"}} 
            src="/images/tracking.png" 
            alt = "tracking page of the Babysteps app" />
    </div>
  
    </div>
    )
}

export default MainPageHeader;
