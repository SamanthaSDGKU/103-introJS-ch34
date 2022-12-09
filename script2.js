// Save the following information in variables using the correct data
// type: name, email, password, age, country, salary (monthly).

// let userName= prompt("Enter your name:");//JS function
// let userEmail = prompt("Enter your email:");
// let userPassword = "1234";
// let userAge=25;
// let userCountry = "US";
// let monthlySalary =prompt("Enter monthly salary:");



// document.write(`
// <p>User: ${userName} </p>
// <p>Email: ${userEmail}</p>
// <p>Salary: ${monthlySalary*12}</p>
// `);


// console.log(userName,userEmail,monthlySalary);

// creating functions

// function declaration
function greeting(){
    //body of the funcion
    console.log("Hello");
    //alert("Hello");
    //document.write("Hello");
    return "Samantha";
}
//global variable
let global;

function sum(a,b){
    //local variable
    global="affected";
    return a+b;
}

console.log(sum(10,50));
console.log(global);

//function expression

let displayValues = function(){
    console.log("Displaying values ... ")
}
displayValues();

//arrow function
let traveling = country => "Traveling to ... " + country;


travel = traveling("Italy");
console.log(travel);

let total=0;

function addCart(price){
    total = total + price;
    console.log(total);
    return total;
}

function calculateTaxes(){
    subtotal=addCart(2);

    let totalTax = subtotal *1.11;

    document.getElementById("receipt").innerHTML=
        `<p>Subtotal =  ${subtotal}</p>
        <p> Total = ${totalTax}<p>`;
}

 
