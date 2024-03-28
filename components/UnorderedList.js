

function UnorderedList({items, fontColor}) {
    // const items = props.items;

    return (
        <ul style={{color: fontColor, listStyleType: "none", justifyContent:"left"}}>
            {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    );
}

export default UnorderedList;
