console.log("Script file");
var age=100;//initialization and assignation
let userName="Mike";
let taxes = 11.5;
const URL = "http://www/thisisprivateEndPoint/project";

console.log(age,userName,URL);// displaying the age, userName and URL

// add extra notes using the comments
userName="Edward"; // changing the userName value
taxes=12;//changing the taxes value
console.log("my user is" + userName + "in" + URL); // displaying the userName and URL
//EX1: Store the following into variables: number of children, partner's
//name, geographic location, job title.
let numberOfChildren = 0;
let partnersName ="Robert";
let geoLeocation = "Italy";
let jobTitle = "Software Engineer";

//concatenation 

// document.write("<p>You will be a " + jobTitle + " in " + geoLeocation + " and married to " + partnersName + " with " + numberOfChildren + "kids</p>");

// template string
document.write(`
<p> You will be a ${jobTitle} </p>
<p> in ${geoLeocation}, and married to ${partnersName} </p>
<p> with ${numberOfChildren + 1} kids</p>
`);