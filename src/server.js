const io = require('socket.io')();
io.on('connection', client => { 
	console.log("server: client connected")
	let timerId = setInterval(() => { 
		console.log('server: tick')
		let lockerID = randomNumber(0, 20)
		client.emit("unlock", lockerID)
		}, 2000);

  	client.on('event', data => { 
		console.log("server: client event")
		console.log(data)
  	});
  	client.on('disconnect', () => { 
		console.log("server: client disconnected")
		clearInterval(timerId)
  	});
 });
io.listen(3000);

// Function to generate random number  
function randomNumber(min, max) {  
	let mathFloat = Math.random() * (max - min) + min;
	let integer = Math.round(mathFloat);
    return integer;
}  