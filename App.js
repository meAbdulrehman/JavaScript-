
//1
const items = [{id: "juice", price: 50, quantity: 3}, {id: "cookie", price: 30, quantity: 9}, {id: "shirt", price: 880, quantity: 1}, {id: "pen", price: 100, quantity: 2}];

 const sumItems = () => {
 let sum = 0;
items.forEach(function(item) {
  let calculation = item.price * item.quantity;
     sum += calculation;
})
console.log(sum);
 };
 sumItems();


//2
var data={
    name : "Abdur Rehman",
    email : "Email",
    password : "pass",
    age : "age",
    gender : "male",
   city : "Karachi",
    country : "Pakistan",
}
 console.log("data.age is existing" + (Boolean(data.age)));
console.log("data.country is existing" + (Boolean(data.country)));
 console.log("data.fullName is existing" + (Boolean(data.fullName)));



//3
function Person (person_name, person_age) {
    this.name = person_name,
    this.age = person_age,

      this.greet = function () {
         console.log('hello');
    }
}
 const person1 = new Person("Abdur Rehman",30);
 const person2 = new Person("Ali", 20);
 console.log(person1.name);
 console.log(person2.name);




//4.
 var person_education = document.getElementById("education");
var person_profession =document.getElementById("profession");
 var person_gender =document.getElementById("x","y");
 var person_address = "123,abc";
function Census(person_name, person_gender, person_education, person_profession, person_address){
     this.name = person_name,
    this.age = person_gender,
   this.education = person_education,
    this.profession = person_profession,
   this.address = person_address
 }
 const personA = new Census("Abdur Rehman", person_gender, person_education, person_profession, person_address);
const personB = new Census("ali", person_gender, person_education, person_profession, person_address);
const personC = new Census("Basit", person_gender, person_education, person_profession, person_address);

document.write(personx);
document.write(persony);
document.write(personz);
