// An external module is code written by someone else, published so you don’t have to reinvent the wheel.




// Chalk is a Node.js external module that adds colors and styles to terminal output using ANSI escape codes.


// Why do we even need colors in terminal?
// ❌ Errors don’t stand out

// ❌ Logs look boring

// ❌ Hard to debug in large apps


// Chalk works ONLY in terminal

// Chalk ❌ does NOT work in browser

import chalk from "chalk";

console.log("Normal text");
console.log(chalk.green("Success message"));
console.log(chalk.red("Error message"));

// let c = chalk.green("")



// Standards

console.log(chalk.blue("Info"));
console.log(chalk.yellow("Warning"));
console.log(chalk.red("Error"));


console.log(chalk.bgRed("Critical Error"));
console.log(chalk.bgGreen("Success"));




console.log(chalk.bold("Bold text"));
console.log(chalk.underline("Underlined text"));
console.log(chalk.italic("Italic text"));



// chalk as function
const error = chalk.red;
console.log(error("getting error"));


// Chalk is for developers, not users

// Chalk styles terminal logs only

// Chalk returns strings, not magic

// Chalk improves debugging & readability

// Chalk uses ANSI escape codes