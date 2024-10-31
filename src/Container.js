import { useEffect, useState } from "react";
import {add, clear, check, add2} from "./functions.js"
import DisplayList from "./DisplayList.js";

export default function Container() {
    
    const [refresh, setRefresh] = useState(false);
    let [value, setValue] = useState('');
    check();
    useEffect(() => {}, [refresh])
    
    return (
        <div className="container">
            <div className="works">
                {   localStorage.getItem("workArray") !== "" ? 
                    localStorage.getItem("workArray").split(',').map((item, index) => {
                        if (item !== "") {
                            return (
                                <DisplayList index={index} item={item} setRefresh={setRefresh}></DisplayList>
                            )
                        }

                    })
                : <></> }
            </div>

            <input type="text" autoFocus onChange={(e) => {setValue(e.target.value)}} onKeyDown={(e) => {
                add2(e, e.target.value)
                setRefresh((old) => !old)
                setValue("");  
            }}></input>
            <button className="clear" onClick={(e) => {
                e.preventDefault();
                clear()
                setRefresh((old) => !old)
            }}>Clear</button>
            <button className="add" onClick={(e) => {
                e.preventDefault();
                add(value);
                setRefresh((old) => !old);
                setValue("");
            }}> Add </button>
            
        </div>
    );
}