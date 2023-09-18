const http = require('node:http');
const PORT = '1986';
const Host = 'localhost';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({
        Name: "Mustapha Rahma Motilola Abiodun",
        email: "mmrahma@gmail.com"
    }));

});

server.listen(PORT, Host, () => {
    console.log(`This server listen at port http://${Host}:${PORT}`)
})