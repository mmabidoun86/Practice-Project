const http = require('node:http');
const PORT = '1986';
const Host = 'localhost';

const server = http.createServer((req, res) => {
   if(req.url === '/signup' && req.method === 'POST'){
    console.log(req.body)
    const emailData = req.body.email
    const passwordData = req.body.password

    const responseFromSignup = signup(emailData, passwordData)
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({
        Message: responseFromSignup
    }));
    res.end()
   }
    
});

server.listen(PORT, Host, () => {
    console.log(`This server listen at port http://${Host}:${PORT}`)
});

const signup = (email, password) =>  {
    if(!email || !password) {
        return 'Please provide email and password'
    }else{
        return 'You are logged in'
    }
}




