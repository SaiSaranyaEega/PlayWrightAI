//Retry Failed API Call

let MAX_ATTEMPTS = 5;
do {
    let randomvalue = Math.random() * 10;
    console.log(randomvalue);
    if (randomvalue > 0.6) {
        console.log("Attempt " + MAX_ATTEMPTS + ": ✅ SUCCESS (Response 200 OK) API call PASSED after" + MAX_ATTEMPTS + "attempt(s).");
    }
    else
        console.log("Attempt " + MAX_ATTEMPTS + ": ❌ FAILED (Timeout/Error)");
    MAX_ATTEMPTS++;
} while (MAX_ATTEMPTS < 5);
