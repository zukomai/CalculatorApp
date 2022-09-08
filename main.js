let result = document.getElementById("myinput");


let calculate = (number) => {
    if (result.value.length < 9) {
        result.value += number;
    }
}
let Result = () => {
    try {
        result.value = Function("return " + result.value)();
    }

    catch(err) {
        alert("Enter valid input");
    }
}

function clr() {
    result.value = "";
}

function del() {
    result.value = result.value.slice(0, -1)
}
