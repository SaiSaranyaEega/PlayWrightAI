//Bug Severity Classifier

frequency = "always", impact = "blocker";

if (frequency === "always") {
    if (impact == "blocker") {
        let severity = "P0 - Critical: Stop release immediately";
        console.log("Frequency: " + frequency + "Impact: " + impact + "Severity: " + severity);
    }
    else if (impact === "major") {

        let severity = "P1 - Urgent: Fix it immediately";
        console.log("Frequency: " + frequency + "Impact: " + impact + "Severity: " + severity);
    }
    else if (impact === "minor") {

        let severity = "P2 - High: Fix it 24 hours";
        console.log("Frequency: " + frequency + "Impact: " + impact + "Severity: " + severity);
    }
}

else if (frequency === "often") {
    if (impact == "blocker") {
        let severity = "P0 - Critical: Stop release immediately";
        console.log("Frequency: " + frequency + " Impact: " + impact + " Severity: " + severity);
    }
    else if (impact === "major") {

        let severity = "P2 - High: Fix it 24 hours";
        console.log("Frequency: " + frequency + " Impact: " + impact + " Severity: " + severity);
    }
    else if (impact === "minor") {

        let severity = "P3 - Medium: Fix the issue slowly";
        console.log("Frequency: " + frequency + " Impact: " + impact + " Severity: " + severity);
    }
}

else if (frequency === "rarely") {
    if (impact == "blocker") {
        let severity = "P2 - High: Fix it 24 hours";
        console.log("Frequency: " + frequency + " Impact: " + impact + " Severity: " + severity);
    }
    else if (impact === "major") {

        let severity = "P3 - Medium: Fix the issue 2days";
        console.log("Frequency: " + frequency + " Impact: " + impact + " Severity: " + severity);
    }
    else if (impact === "minor") {

        let severity = "P4 - Low: Fix the issue in 1week";
        console.log("Frequency: " + frequency + " Impact: " + impact + " Severity: " + severity);
    }
}
