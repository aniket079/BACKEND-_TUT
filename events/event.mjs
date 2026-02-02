// Event-Driven Architecture (EDA) is a system design where the flow of the program is determined by events rather than a fixed sequence of steps.
// Something happens → the system reacts

// Backend systems:

// Handle thousands of requests

// Don’t know when things will happen

// 🧠 So instead of “do this, then that”:

// Node waits for events



// An event is:

// A notification that something has happened

// Examples:

// HTTP request arrived

// File read completed

// Timer expired

// User logged in

// Data received from DB

// 📌 Events do NOT do work
// 📌 Events trigger work


// Node provides a built-in event system using:

// Node.js → EventEmitter

// EventEmitter is a class that:

// Stores events

// Stores listeners

// Triggers listeners when events occur

// Import EventEmitter
import EventEmitter from "events"

// Create an Emitter
const emitter = new EventEmitter()

// Register an Event Listener
emitter.on("userRegistered", (username) => {
  console.log("User registered:", username)
})

// Emit the Event
emitter.emit("userRegistered", "JANE")




// once

emitter.once("startup", () => {
  console.log("App started")
})

emitter.emit("startup")
emitter.emit("startup")


//remove

// emitter.off("event", handler)


// Memory leaks
// Long-running servers





// function call vs event emitter



const emitter2 = new EventEmitter()

// Register listeners (ONE TIME)
emitter2.on("sendNotif", () => {
  console.log("push has been sent")
})

emitter2.on("sendNotif", () => {
  console.log("email has been sent")
})

emitter2.on("sendNotif", () => {
  console.log("whatsapp has been sent")
})

// Action that triggers the event
function login() {
  console.log("login done")
  emitter2.emit("sendNotif")
}

login()





// Direct Function Call	Event-Driven
// Caller knows callee	Caller knows nothing
// One-to-one	One-to-many
// Tight coupling	Loose coupling
// Hard to extend	Easy to extend
// Control-based	Reaction-based