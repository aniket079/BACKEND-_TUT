// By default:

// Code inside a module is PRIVATE

// This prevents:

// Accidental access

// Global pollution


function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}








//how to export 

module.exports = add



// another method

// module.exports={
//     add,subtract
// }





