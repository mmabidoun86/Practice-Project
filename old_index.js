const http = require('node:http');
const PORT = '1986';
const Host = 'localhost';

const server = http.createServer((req, res) => {
   if(req.url === '/login' && req.method === 'POST'){
    console.log(req.body)
    const emailData = req.body.email
    const passwordData = req.body.password

    const responseFromLogin = login(emailData, passwordData)
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({
        Message: responseFromLogin
    }));
    res.end()
   }
    
});

server.listen(PORT, Host, () => {
    console.log(`This server listen at port http://${Host}:${PORT}`)
});

const login = (email, password) =>  {
    if(!email || !password) {
        return 'Please provide email and passoword'
    }else{
        return 'You are logged in'
    }
}
