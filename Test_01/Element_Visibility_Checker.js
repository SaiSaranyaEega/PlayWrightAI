//Element Visibility Checker
let isPresent = true, isDisplayed = true, isEnabled = false;
let elementState = null;

if (isPresent === true && isDisplayed === true && isEnabled === true) {
    elementState = "READY";
}

else if (isPresent === true && isDisplayed === true && isEnabled === false) {
    elementState = "DISABLED";
}
else if (isPresent === true && isDisplayed === false) {
    elementState = "HIDDEN";
}
else if (isPresent === false) {

    elementState = "NOT FOUND";
}

//severity check

let Severity =
    elementState === "READY" ? "OK (all good)" :
        elementState === "DISABLED" ? "WARNING (not displayed or not enabled)" :
            elementState === "HIDDEN" ? "WARNING (not displayed or not enabled)" :
                "CRITICAL";

//Action message

let action =
    elementState === "READY" ? "Safe to interact" :
        elementState === "DISABLED" ? "Wait for enable state or check preconditions" :
            elementState === "HIDDEN" ? "Element present but not visible." :
                "Element not found. Check locator.";

console.log("Status: ", elementState);
console.log("Severity: ", Severity);
console.log("Action: ", action);


