const net = require("net");
const connect = function () {
const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542
  });
  conn.setEncoding("utf8");

  return conn;
};


  module.exports = connect;
