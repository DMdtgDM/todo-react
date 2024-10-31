import {remove} from "./functions.js"

export default function DisplayList(props) {
    const {index, item, setRefresh} = props;

    return (
        <div className="mainDiv" key={index}>
            <li>{item}</li>
            <span className="delete" onClick={()=> {remove(index)
                setRefresh(old=> !old)
            }}>X</span>
        </div>
    );
}