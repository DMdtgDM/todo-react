
export const add = (value) => {
    value !== "" ? checkValueAndStorage(value) : console.log("Empty value");
    document.querySelector("input").value = '';
}

export const add2 = (e, value) => {
    if (e.key === "Enter") {
        add(value);
    }
} 

export const clear = () => {
    localStorage.removeItem("workArray");
}

export const remove = (index) => {

    let workArray = localStorage.getItem("workArray").split(",");
    let workArray2 = [];
    for (let i = 0; i < workArray.length; i++) {
        i == index ? console.log("Passed") : workArray2.push(workArray[i]);
    } 
    localStorage.setItem("workArray", workArray2); 
}

export const check = () => {
    localStorage.getItem("workArray") === null ? localStorage.setItem("workArray", ''): console.log("PassedChek point");
}

function checkValueAndStorage(value) {
    value.includes(",") ? value = value.replace(",", ' ') : console.log("No comma involed");
    let workArray = localStorage.getItem("workArray").split(",");
    workArray.includes(value) ? console.log("Already In") :  insertValue(workArray, value);
}

function insertValue(workArray, value) {
    workArray.push(value);
    localStorage.setItem("workArray", workArray);
}