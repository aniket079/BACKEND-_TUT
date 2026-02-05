//  ██████╗ ██████╗ ██╗
// ██╔════╝██╔═══██╗██║
// ██║     ██║   ██║██║
// ██║     ██║   ██║██║
// ╚██████╗╚██████╔╝███████╗
//  ╚═════╝ ╚═════╝ ╚══════╝

// This is ASCII art
// Figlet generates this programmatically


// Figlet is a Node.js external module that converts normal text into large ASCII art text using fonts.



// Works in terminal

// Used in CLI tools

// Used for startup banners

// Without Figlet:

// You manually design ASCII art ❌

// Hard to change text ❌

// Error-prone ❌

// With Figlet:

// Any text → ASCII art

// Multiple fonts

// Programmatic control



import figlet from "figlet";
import chalk from "chalk";

figlet("Hello World", (err, data) => {
  if (err) {
    console.log("Error occurred");
    return;
  }
  console.log(data);
});

// syntax
// figlet(text, callback)




// aync behaviour

console.log("Before figlet");

figlet("NodeJS", (err, data) => {
  console.log("Inside callback");
  console.log(data);
});

console.log("After figlet");



// Node.js does NOT wait for figlet to finish

figlet("My Server", (err, data) => {
  if (!err) {
    console.log(chalk.green(data));
  }
});


