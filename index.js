const connectToMongo = require('./db');
const express = require('express')
const cors = require("cors");
const suggestion = require('./routes/suggestion')
const path = require("path");
// const buildh = require("../build/index.html")
//connecting to mongodb
connectToMongo();
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// app.get('/', (req,res)=>{
//     res.send('hello faizan')
// })

// if(process.env.NODE_ENV === "production"){
//     app.use(express.static(path.join("./build")));
//     app.get("*", (req,res)=>{
//       res.sendFile(path.resolve(__dirname, "build","index.html"))
//     });
// }
 
// if ( process.env.NODE_ENV == "production"){
//   console.log(process.env.NODE_ENV)
//   app.use(express.static('../build'));
//   app.get("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname,'../build/index.html'));
//   })
// }

//my different endpoints
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.use('/api/suggestion',require('./routes/suggestion'))

app.listen(port,()=>{
    console.log(`iNotebook backend listening at http://localhost:${port}`)
})

