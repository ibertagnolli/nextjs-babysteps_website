import theme from "../styles/theme";

export default function Section(props){
    return (
<>
<div style ={{backgroundColor: theme.colors[props.bgcolor], padding: "2rem", 
	minheight: "70vh",
	alignitems: "center",
	justifycontent: "center",
	overflow: "clip"}}>
{props.children}
</div>


</>

    );
}