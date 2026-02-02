import EventEmitter from "events"

const emitter2 = new EventEmitter()

// Notification listeners
emitter2.on("loginSuccess", () => {
  console.log("push notification sent")
})

emitter2.on("loginSuccess", () => {
  throw new Error("Email service down") // simulate failure
})

emitter2.on("loginSuccess", () => {
  console.log("whatsapp notification sent")
})

// Error listener (VERY IMPORTANT)
emitter2.on("error", (err) => {
  console.error("Handled error:", err.message)
})

function login() {
  console.log("login done")
  try {
    emitter2.emit("loginSuccess")
  } catch (err) {
    emitter2.emit("error", err)
  }
}

login()
