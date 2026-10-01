const EventEmitter = require("events");

class SessionManager extends EventEmitter {

    trigger(command, ...args) {
        if (command === "greet" || command === "exit") {
            this.emit(command, ...args);
        } else {
            console.log(`Unknown event: ${command}`);
        }
    }
}

const session = new SessionManager();
session.on("greet", (username) => {
    console.log(`Hello, ${username}! Welcome.`);
});
session.once("greet", () => {
    console.log("First login of the day!");
});
session.on("exit", (code) => {
    console.log(`Session closed with code ${code}. Goodbye!`);
});
session.trigger("greet", "Satya");
session.trigger("greet", "Rahul");
session.trigger("greet", "Aman");
console.log("Greet listener count:", session.listenerCount("greet"));

session.trigger("exit", 0);

session.trigger("login");

session.on("error", (message) => {
    console.log(`Error: ${message}`);
});


session.emit("error", "Something went wrong!");