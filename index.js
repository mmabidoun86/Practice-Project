// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const PORT = 4000

// const data = [{
//     id: 1,
//     name: "John Doe",
//     email: "johdoe@gmail.com",
//     address: "7, Olubisi Street, Jarkata",
//     phone: "08085823919"
// },

// {
//     id: 2,
//     name: "Ayorinde Ayodeji",
//     email: "ayodejirinde@gmail.com",
//     address: "11, Olubisilokokojawe Road, Ijanikin",
//     phone: "08088394750"
// }
// ]

// app.use(bodyParser.json())


// app.get('/', (req, res) => {
//     res.json({
//         status: 'success',
//         Message: "welcome to my api"
//     })
// })

// app.get('/user', (req, res) =>{
// res.json({
//    status: "success",
//    Message: "Login successful",
//    data
// });
// });

// app.post('/user/add', (req, res) => {
    
//         const {name, email, address, phone } = req.body
//         if(!name || !email.indexOf('@') === -1 || !address || !phone) {
//             res.json({
//             Status: 'error',
//             Message: 'This field required'
            
//             })
                     
//         }

//         const tempData ={
//             id: data.length + 1,
//            name,
//            email,
//            address,
//            phone,
//        }  
    
//     data.push(tempData)
//     res.json({
//      Status: "Awsome",
//      Message: "Fantastic",
//      data: tempData
//     });
// });

// app.put('/user/update', (req, res) => {
//     res.send();
// });

// app.delete('/user/delete', (req, res) => {
//     res.send
// })

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })


const express = require('express');
const app = express();
const PORT = 5000;
const Host = 'localhost'
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const data= {
    name: 'ajijola afolabi',
    email: 'ajijola@gmail.com',
    address: '30, ijaniking Road, Lagos',
    phone: '080948848594'
}


app.post('/user/register', (req, res) => {
    const {name, email, address, phone} = req.body
    if(!name || !email || !address || !phone)
    res.json({
status: 'error',
Message: 'This field require',
})
res.json({
    Status: 'success',
    Message: 'You have being registered',
    data
});
});




app.listen(PORT, () => {
    console.log(`Server listen on port http://${PORT}`)
})