import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import projects from './routes/projects.js'
import cors from 'cors';

//initialize
const app = express();
// const options = {
//     origin: 'http://localhost:9000'
// }
// midlewares
dotenv.config();
app.use(cors());
app.use(express.json());


app.listen(process.env.PORT, ()=> console.log(`server is runnig on port ${process.env.PORT}`))

mongoose.connect(process.env.MONGO_URL, (err)=>{
    if(err){
        console.log(`something went wrong ${err}` )
    }else{
        console.log("mongodb connected");
    }
});

app.use("/api/project", projects);



// app.get("/", (req, res)=>{
//     res.send("hanna diamond queeen")
// });

// app.post("/register", (req, res)=>{
//     console.log(req.body)
// })

/* routes
        register-project --post
        update-project --post 
        read-project -- get 
        read-all-projects -- get
*/