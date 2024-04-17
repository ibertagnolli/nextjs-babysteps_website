import { useRouter } from "next/router";
import Navbar from "../components/Navbar"; // Import your Navbar component
import TeamMemberHighlight from "../components/TeamMemberHighlight";

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
            <div style={{display: "flex", marginTop: "64px", flexDirection: "column", width: "100%"}}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "150px"}}><h1 style={{letterSpacing: "8px", fontSize: "48px"}}>Meet the Team</h1></div>
                <TeamMemberHighlight
                    imgSrc="/nextjs-babysteps_website/images/selfPortrait.jpg"
                    name="Isabella Bertagnolli"
                >
                    Hi! I am a  graduating senior studying computer science at the University of Utah. I am interested in Machine Learning, Web Development, Mobile Development, and Art. When I'm not coding, you can find me painting, hiking, biking, and climbing in the Salt Lake valley. I am currently a teaching assistant for the Mobile App programming class and have loved working on BabySteps for the past 6 months. You can reach me at irosebertagnolli@gmail.com on <a href="https://www.linkedin.com/in/isabella-bertagnolli/">LinkedIn</a> or learn more at <a href="https://ibertagnolli.github.io">my website</a>.
                </TeamMemberHighlight>
                <TeamMemberHighlight
                    imgSrc="/nextjs-babysteps_website/images/ta_picture.jpg"
                    name="Audrey Olson"
                    isAltStyle
                >
                   
I am a graduating senior from the University of Utah. I have interests in Full Stack Web Development, Mobile Development and Programming Languages. Between working on homework and beginning side projects, you can find me cuddling up with my newborn daughter and puppy. I currently work as a Software Developer at OC Tanner and have found a new passion in creating apps from working on BabySteps the past 6 months. You can reach me at audreybrynolson@gmail.com or here on <a href= "https://www.linkedin.com/in/audrey-olson-693a1a242/" >LinkedIn.</a> 

                </TeamMemberHighlight>
                <TeamMemberHighlight
                    imgSrc="/nextjs-babysteps_website/images/Best_Emily.jpg"
                    name = "Emily Best">
                        Hello! I'm graduating from The University of Utah with my Bachelor's Degree in Computer Science. Two of my favorite areas in software development are mobile apps and databases, so working on BabySteps was a lot of fun! I'll start working as a Software Engineer at Google this Fall, and I'm hoping to continue working in these areas. Outside of school and work, I like to pick up new books and skills. This semester was "Mistborn: The Hero of Ages" and swimming, we'll see what I pick up next! You can reach me at emilyabest@outlook.com or <a href="www.linkedin.com/in/emilyabest">LinkedIn</a>. 
                </TeamMemberHighlight>
                <TeamMemberHighlight
                imgSrc="/nextjs-babysteps_website/images/Lexie_stucki.png"
                name = "Lexie Stucki"
                isAltStyle>
                I am a senior at the University of Utah, graduating in computer science and applied mathematics. I am interested in AI, Machine Learning, and HCI, and will be attending UCSD in Fall 2024 to pursue these interests and earn an MS in CS. I am currently working as a Grader for the math department at the U, and will intern as a Software Engineer for Goldman Sachs this summer. In my limited time off from my academic pursuits, I love to ski, bake, read, and see concerts and movies. You can reach me at lexie.stucki@gmail.com or <a href="www.linkedin.com/in/lexiestucki">Linkedin</a>.

</TeamMemberHighlight>
            </div>
           
        </>
    );
}

export default TeamMemberPage;
