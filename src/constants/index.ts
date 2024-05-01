import api1 from "../../public/api1.png"
import api2 from "../../public/api2.jpg"
import api3 from "../../public/api3.png"
import api4 from "../../public/api4.png"
import api5 from "../../public/api5.png"
import api6 from "../../public/api6.png"
import api7 from "../../public/api7.png"
import api8 from "../../public/api8.png"
import api9 from "../../public/api9.png"
import api10 from "../../public/api10.jpg"



export const challengesDescription = [
    {
        title: "Jackrabbit Hijack: Exploiting Broken Object Level Authorization",
        description: "Object-level authorization is an access control mechanism that restricts users to specific data. Can you bypass these controls and access unauthorized info?",
        number: "1",
        Level: "Easy",
        imageURL: api1,
        hint: "The bunnies hop freely, granting access they shouldn't see. Find the fluffy path to the hidden key.",
        link: "http://localhost/API1",
        mitigation: "Implement role-based access control (RBAC) and enforce authorization checks for every API function accessing data sources.",
        writeUp: `
          - Click on the "Get Info" button.
          - The URL points to a specific object, like "/API1/accounts/id1/personal_info".
          - Change "id1" to a different, unauthorized ID. Can you reach the prize?
        `,
    },
    {
        title: "Imposter Imposter: Cracking Broken User Authentication",
        description: "Authentication keeps imposters out. But what if the guards are fooled? Can you exploit this weakness and steal the identity?",
        number: "2",
        Level: "Easy",
        imageURL: api2,
        hint: "A new account hides a secret key. But a borrowed mask might unlock a hidden decree.",
        link: "http://localhost/API2",
        mitigation: "Utilize strong cryptographic algorithms for token generation and enforce multi-factor authentication (MFA) to mitigate authentication token compromise.",
        writeUp: `
          - Register a new account.
          - Login with those credentials.
          - Find the section to change your username.
          - Can you transform into a privileged user and claim the flag? (Try a username change!)
        `,
    },
    {
        title: "Data Deluge: Unearthing Excessive Data Exposure",
        description: "APIs sometimes reveal more than intended. Can you exploit this leakage and find the hidden treasure?",
        number: "3",
        Level: "Moderate",
        imageURL: api3,
        hint: "The waterfall overflows, revealing secrets it shouldn't disclose. Follow the current upstream to a hidden expose.",
        link: "http://localhost/API3",
        mitigation: "Apply data masking techniques and implement dynamic data filtering based on user roles and permissions",
        writeUp: `
          - Click on the "Get Info" button.
          - The URL points to a specific object's data, like "/API3/accounts/id1/raw/personal_info".
          - Can you navigate upstream in the directory structure to uncover a hidden path containing the flag?
        `,
    },
    {
        title: "Resource Rampage: Unleashing the Denial-of-Service Beast",
        description: "APIs with missing safeguards can be overwhelmed. Can you trigger a resource storm and claim your reward in the chaos?",
        number: "4",
        Level: "Easy",
        imageURL: api4,
        hint: "The hamsters run endlessly on their wheel, but a single push can break the deal. Can you overload the system to reveal a hidden meal?",
        mitigation: "Deploy distributed denial-of-service (DDoS) protection mechanisms and implement rate-limiting controls at both the API gateway and application levels",
        link: "http://localhost/API4",
        writeUp: `
          - Click on the "Get Info" button.
          - Can you rapidly refresh the page or send multiple requests to overwhelm the system and expose the flag in its error messages?
        `,
    },
    {
        title: "Function Fail: Bypassing Broken Function-Level Authorization",
        description: "Authorization controls access to specific functions. But what if there's a crack in the wall? Can you exploit this flaw and access unauthorized functions?",
        number: "5",
        Level: "Easy",
        imageURL: api5,
        hint: "The intended path is guarded, but a hidden passage might be unbarred. Can you find the secret function to reach the reward?",
        link: "http://localhost/API5",
        mitigation: "Employ role-based access control (RBAC) with granular permissions and ensure separation of administrative and user functions.",
        writeUp: `
          - Click on the "Get Info" button.
          - The URL points to a specific function, like "/API5/api/v1/users/gary/personal_info".
          - Can you manipulate the URL to target a different, unauthorized function that grants access to the flag?
        `,
    },
    {
        title: "Mass Misdirection: Exploiting Mass Assignment Vulnerability",
        description: "Automatic data binding can introduce security risks. Can you use this to your advantage and manipulate the system?",
        number: "6",
        Level: "Moderate",
        hint: "The unsuspecting guard blindly trusts the incoming data. Can you forge the right message to gain an unfair advantage?",
        link: "http://localhost/API6",
        imageURL: api6,
        mitigation: "Implement input validation with a strict whitelist approach to filter and sanitize client-provided data before binding it to data models.",
        writeUp: `
        - click on get info button
        - capture the POST request in burpsuite when clicking on the get info button
        - in the request observe the cookies
        - change "isadmin=true" instead of false and resend the request
        - now observe the response and there is flag
        `,
    },
    {
        title: "Secret Stash: Uncovering Hidden Endpoints with Security Misconfiguration",
        description: "Security mishaps can expose hidden data. Can you exploit these weaknesses to unearth a secret stash?",
        number: "7",
        Level: "Hard",
        imageURL: api7,
        hint: "The robots reveal a forbidden path, but following it requires a special oath. Can you decipher the secret and unlock the hidden wrath?",
        link: "http://localhost/API7",
        mitigation: "Utilize automated configuration management tools and conduct regular security audits to detect and remediate misconfigurations.",
        writeUp: `
        - go to "/robots.txt"
        - there is a new path "/.config" in disallow
        - go to "/.config"
        - observe the JSON data
        - looks like a request with some special header in it
        - capture the POST request in burpsuite when clicking on the get info button
        - add the "apikey" header with its value in the request and resend it
        - now observe the response and there is flag
        `,
    },
    {
        title: "Version Vortex: Exploiting Deprecated APIs for Advantage",
        description: "Outdated APIs can linger like shadows. Can you exploit these relics to gain a foothold?",
        number: "8",
        Level: "Easy",
        imageURL: api8,
        hint: "The past whispers secrets, but the present holds the key. Can you find the forgotten path that sets you free?",
        link: "http://localhost/API8",
        mitigation: "Employ input validation, parameterized queries, and prepared statements to mitigate injection attacks, such as SQL injection and NoSQL injection.",
        writeUp: `
        - Visit /API8
        - Click on get my info
        - you will be redirected to "/API8/v2/users/gary/personal_info" endpoint.
        - change v2 to v1 and observe response, the deprecated version displays more information in which the flag is located.
        `,
    },
    {
        title: "Injection Inquisition: Bypassing Security with Malicious Input",
        description: "APIs can be vulnerable to crafted inputs. Can you use your wit to inject chaos and steal the flag?",
        number: "9",
        Level: "Hard",
        imageURL: api9,
        hint: "The truth lies hidden within a cleverly disguised query. Can you craft the perfect question to make the system answer sincerely?",
        link: "http://localhost/API9",
        mitigation: "Maintain an up-to-date API registry and leverage automated documentation tools to track API endpoints, versions, and deprecations.",
         writeUp: `
        - visit /API9
        - There is a login page which is vulnerable to SQL injection.
        - Enter this query in the username parameter to determine the no. of columns returned by application  ORDER BY 2
        - we have 2 columns which can both display strings.
        - Now we will try UNION based query to check if it works UNION SELECT 1,2
        - Now in this part we would have to guess the table name which is in most cases 'users'
        - Enter this query to find the column names of the 'users' table UNION SELECT group_concat(column_name),2 FROM information_schema.columns WHERE table_name='users'
        - from this we get 2 columns username and password. so now we can use this query to get the credentials UNION SELECT username,password FROM users
        - login with the credentials and we get flag.
        `,
    },
    {
        title: "Logistical Leverage: Exploiting Poor Logging Practices for Insight",
        description: "Good logging practices are essential for security. But what if the guards leave their watch unattended? Can you exploit this lapse to gather intel?",
        number: "10",
        Level: "Moderate",
        imageURL: api10,
        hint: "Silence can hide secrets, but sometimes, whispers travel on the wind. Can you listen carefully and learn from the system's din?",
        link: "http://localhost/API10",
        mitigation: "Implement centralized logging with real-time alerting and integrate with Security Information and Event Management (SIEM) systems for proactive threat detection and incident response.", 
        writeUp: `
        - visit /API10
        - there is only login , no register.
        - try to login and then observe the response headers in browser or burpsuite.
        - There is an unusual header X-Powered-By: Vertical mesh solution gamification
        - search it on google, and you will come accross its official site http://verticalmeshsolutiongamification.com/
        - read the last article on this site which states that they store logging information on / server_info endpoint.
        - now visit this endpoint and we can see a sucessful login entry with username and password in it.
        - enter those credentials in the login page and you will get flag.
        `,
    },
]

