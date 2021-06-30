const { stdin } = require("process")
let connection;
const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }else if (key === "w") {
      console.log("Move: up")
      connection.write("Move: up")
    }else if (key === "a") {
      console.log("Move: left")
      connection.write("Move: left")
    }else if (key === "s") {
      console.log("Move: down")
      connection.write("Move: down")
    }else if (key === "d") {
      console.log("Move: right")
      connection.write("Move: right")
    }else if (key === "r")(
      connection.write("Say: lol")
    )

  
  
  };
  



  
  const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);

    return stdin;
  };
  



  module.exports = {
      handleUserInput,
      setupInput
  }