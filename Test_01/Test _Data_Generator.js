var id = "USR-000";
var username = "TestUser_";
var email = "@testingacademy.com";
const roles = ["admin", "Editor", "viewer", "tester", "manager"];

for (i = 1; i <= 8; i++) {
    let role = roles[(i - 1) % roles.length];
    if (i % 3 === 0) {
        let status = "INACTIVE";
        console.log(id + i + " | " + username + i + " | " + "testuser" + i + email + " | " + role + " | " + status);
    }
    else {
        let status = "ACTIVE";
        console.log(id + i + " | " + username + i + " | " + "testuser" + i + email + " | " + role + " | " + status);

    }
}
