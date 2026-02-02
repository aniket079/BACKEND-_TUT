import os from "os"


// const cpus = os.cpus()
// console.log(cpus);
// console.log(cpus.length)

// It means:
// 8 logical CPU cores
// OS can run 8 parallel tasks
// BUT:
// JavaScript still runs on ONE thread
// This sets up the blocking vs non-blocking discussion perfectly.





// console.log(os.platform())
// console.log(os.arch())
// Why It Matters

// Native binaries
// Docker images
// Deployment decisions

console.log(os.totalmem())
// console.log(os.freemem())

// const gb = os.totalmem() / 1024 / 1024 / 1024

// console.log(gb.toFixed(2), "GB")

// Use Case
// Memory monitoring
// Load decisions
// Health checks




console.log("ms",os.uptime())


// Time (in seconds) the system has been running
// Useful for:
// Server diagnostics
// Crash analysis
// Monitoring dashboards
