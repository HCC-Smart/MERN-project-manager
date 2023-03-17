import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    //
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    Budget:{
        type:Number,
        required:true
    },
  
},{timestamps:true});

const Projects = mongoose.model("projects", projectSchema);

export default Projects;