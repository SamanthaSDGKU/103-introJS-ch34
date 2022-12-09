// Save the following information in variables using the correct data
// type: name, email, password, age, country, salary (monthly).
let userName="Will";
let userEmail = "will@example.com";
let userPassword = "1234";
let userAge=25;
let userCountry = "US";
let monthlySalary = 2000;

console.log(userName,userEmail,monthlySalary);
document.write(`
<p>User: ${userName} </p>
<p>Email: ${userEmail}</p>
<p>Salary: ${monthlySalary*12}</p>
`);