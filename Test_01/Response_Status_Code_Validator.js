let status_code = 401;

switch (status_code) {

    case 200:

        console.log("Status Code : " + status_code + " Result : PASS - OK: Request successful");
        break;

    case 201:

        console.log("Status Code : " + status_code + " Result : PASS - Created: Resource created successfully");
        break;

    case 301:

        console.log("Status Code : " + status_code + " Result : WARNING - Moved Permanently: URL has changed");
        break;

    case 400:

        console.log("Status Code : " + status_code + " Result : FAIL - Bad Request: Check request payload");
        break;

    case 401:

        console.log("Status Code : " + status_code + " Result : FAIL - Unauthorized: Check auth token");
        break;

    case 403:

        console.log("Status Code : " + status_code + " Result : FAIL - Forbidden: Insufficient permissions");
        break;

    case 404:

        console.log("Status Code : " + status_code + " Result : FAIL - Not Found: Check endpoint URL");
        break;

    case 500:

        console.log("Status Code : " + status_code + " Result : FAIL - Internal Server Error: Backend issue");
        break;

    default:

        console.log("Status Code : " + status_code + " Result : UNKNOWN - Unhandled status code");
        break;

}
