function generateRandomNumber(){
    return Math.floor(Math.random() * 100) + 1;
}

// Exporting one func (using CommonJS module)
// module.exports = generateRandomNumber;

const name = "Vipul";
function greet() {
  return `Hello ${name}`;
}

//Export multiple func (using CommonJS module)
// module.exports = {
//     generateRandomNumber,
//     greet,
// }

