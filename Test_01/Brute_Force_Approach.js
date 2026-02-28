//Login Brute-Force Detection

const email_Id = "admin@testingacademy.com";
const password = "Test@1234";
const MAX_Attempts = 3;
let i = 0;
let failedcount = 0;
const attempts = ["wrong", "wrong", "wrong", "correct"];
let locked = false;
do {
    let enteredPassword = attempts[i];

    if (locked) {
        console.log("Attempt " + (i + 1) + ": 🔒 ACCOUNT LOCKED - Rejected");
        i++;
        continue;
    }
    if (enteredPassword === password) {
        console.log("Attempt " + (i + 1) + " Success");
        failedcount = 0;
    }
    else {
        failedcount++;
        console.log("Attempt " + (i + 1) + "❌ FAILED - Strike " + (i + 1) + "/" + MAX_Attempts);
    }
    if (failedcount === MAX_Attempts) {
        locked = true;
        console.log("🚨 ACCOUNT LOCKED Attempt 4: 🔒 ACCOUNT LOCKED - Rejected");

        i++;
    }
} while (i < attempts.length);


