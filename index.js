const express = require('express');
const app = express();
const data = require('./dataStore');
const PORT = '4000'


app.get('/user', (req, res) =>{
res.json({
   status: "success",
   Message: "Login successful",
   data: data
});
});

app.post('/user/add', (req, res) => {
    res.json({
      
    });
});

app.put('/user/update', (req, res) => {
    res.send();
});

app.delete('/user/delete', (req, res) => {
    res.send
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})