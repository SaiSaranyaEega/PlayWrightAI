//Test_Environment_Config

let envName = "staging";

switch (envName) {

    case "staging":

        console.log("Environment: " + envName);
        console.log("Base URL: " + "https://staging-api.testingacademy.com");
        console.log("API Key: " + "stg_key_xxxx-xxxx");
        console.log("Timeout: " + "8000ms");
        console.log("Description: Staging - Pre-production mirror");
        break;

    case "dev":

        console.log("Environment: " + envName);
        console.log("Base URL: " + "https://dev-api.testingacademy.com");
        console.log("API Key: " + "dev_key_xxxx-xxxx");
        console.log("Timeout: " + "5000ms");
        console.log("Description: Development environment");
        break;

    case "qa":

        console.log("Environment: " + envName);
        console.log("Base URL: " + "https://qa-api.testingacademy.com");
        console.log("API Key: " + "qa_key_xxxx-xxxx");
        console.log("Timeout: " + "7000ms");
        console.log("Description: QA testing environment");
        break;

    case "production":

        console.log("Environment: " + envName);
        console.log("Base URL: " + "https://api.testingacademy.com");
        console.log("API Key: " + "prod_key_xxxx-xxxx");
        console.log("Timeout: " + "1000ms");
        console.log("Description: Production live environment");
        break;

    default:
        console.log("invalid environment");


}