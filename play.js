const net = require("net");
const connect = require("./client")

// establishes a connection with the game server


const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }


};


const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput()


 




console.log("Connecting ...");
connect();