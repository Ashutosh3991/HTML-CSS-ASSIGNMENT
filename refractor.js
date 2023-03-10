
const person = {
    name: "Noam Chomsky",
    age: 92
  };
  
  const { name, age } = person;
  
  console.log(name);
  console.log(age);
  



const printName=name=>"Hi "+name;
console.log(printName('ganesh'));



const printBill = (name, bill) => `Hi ${name},please pay: ${bill}`;
console.log(printBill('ganesh',1234));