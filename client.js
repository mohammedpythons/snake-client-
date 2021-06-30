const net = require("net");
const { IP, PORT } = require("./constants") 
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected")
    conn.write("Name: MOE")
    // conn.write("Move: up")
    // setTimeout(()=> {
    //   conn.write("Move: left")

    // }, 2000)
    // setTimeout(()=> {
    //   conn.write("Move: up")
    // },3000)
  
    
    
  
  })
  conn.on("data", (data) => {
    console.log(data)
  })

  return conn;
};


module.exports = {connect};
