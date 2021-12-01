const net = require('net');
const connect = function() {
	const conn = net.createConnection({
		host: '165.227.47.243',
		port: 50541
	});

	conn.setEncoding('utf8');
	conn.on('data', (data) => {
		console.log('Server says: ', data);
	});
	conn.on('connect', () => {
		console.log(`Server Says: `, 'successfully connected to the snake server');
	});
	conn.on('connect', () => {
		conn.write('Name: YWT');
	});
	// conn.on('connect', () => {
	// 	conn.write("Move: up");
  //   setTimeout(()=>{
  //     conn.write("Move: up");
  //   }, 1000)
	// });
	return conn;
};

module.exports = {
	connect
};
