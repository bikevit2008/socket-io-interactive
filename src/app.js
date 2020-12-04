var socket = require('socket.io-client')('http://localhost:3000')
socket.on('connect', function(){
	console.log("client: connected")	
});
socket.on('event', function(data){
	console.log("client: event")
	console.log(data)	
});
socket.on("data", (data) => {
	console.log("client: data")
	console.log(data)	
});
// socket.onAny((event, ...args) => {
//   console.log(`got ${event}`);
// });
socket.on("unlock", (lockerID) => {
	console.log("client: unlock")
	console.log(lockerID)	
});
socket.on('disconnect', function(){
	console.log("client: disconnected")
});
