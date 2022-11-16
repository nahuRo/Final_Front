import io from "socket.io-client";

// let socket = io("http://localhost:8080/");
let socket = io("https://finalback-production.up.railway.app/");

export default socket;
