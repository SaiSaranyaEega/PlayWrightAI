//Response Time SLA Analyzer

let responseTimes = [120, 230, 450, 510, 180, 620];
let SLA_LIMIT = 500;
let i = 0;
let min = responseTimes[0];
let max = responseTimes[0];
let sum = 0;
let Average = 0;
let breachescount = 0;
let breach_Percentage;
while (i < responseTimes.length) {

    //console.log(responseTimes[i]);
    //verifying min value
    if (min > responseTimes[i]) {
        min = responseTimes[i];
    }
    //verifying max value
    if (max < responseTimes[i]) {

        max = responseTimes[i];
    }
    //Finding sum and average
    sum = sum + responseTimes[i];
    Average = sum / responseTimes.length;

    if (responseTimes[i] > SLA_LIMIT) {
        breachescount++;
    }

    breach_Percentage = (breachescount / responseTimes.length * 100).toFixed(2);
    i++;
}
console.log("Total Requests: " + responseTimes.length + " Min Response: " + min + "ms" + " Max Reponse: " + max + "ms" + " SLA Breaches: " + breachescount + "(" + breach_Percentage + "% )" + " Overall Status: " + "❌ SLA VIOLATED");
