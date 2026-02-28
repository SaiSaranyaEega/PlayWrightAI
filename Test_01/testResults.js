//Test Case Result Counter
testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
let passCount = 0, failCount = 0;
let skipCount = 0;

for (i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {

        passCount++;
    }

    else if (testResults[i] === "fail") {

        failCount++;

    }

    else if (testResults[i] === "skip") {

        skipCount++;

    }
    else
        console.log("Not a valid test result");
}
//console.log("Passed count: " + passCount);
//console.log("Failed count: " + failCount);
//console.log("Skipped count: " + skipCount);
totalcount = passCount + failCount + skipCount;


//Total Tests: 8 Passed: 5 Failed: 2 Skipped: 1 
//Pass Rate: 62.50 % VERDICT: Minor failures.Review before release.

console.log("Total Tests : " + totalcount + " Passed: " + passCount + " Failed: " + failCount +
    " Skipped: " + skipCount);

if (passCount === totalcount) {
    console.log("all passed → ready for release");
}
else if (failCount <= 2) {
    console.log("Pass Rate: " + passCount / totalcount * 100 + "% VERDICT: Minor failures.Review before release.");
}
else if (failCount > 2) {
    console.log("Pass Rate: " + passCount / totalcount * 100 + "% VERDICT: Major failures. Block release.");
}
