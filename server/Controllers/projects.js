import Projects from "../models/projects.js"
export const registerProject = async(req, res)=>{
     
    try{
        const projects = await new Projects(req.body).save();
        res.json({"status": true, "projects": projects});
        console.log("saved your data");
    }catch(err){
        res.send({"status": false, "message": err});
    }
};

export const updateProject = async (req,res)=>{
try{
    const {title, description, Budget, _id} = req.body;
    const project = await Projects.findOneAndUpdate(_id, {title, description, Budget});
    res.send({"Status": true, "projects": project});

}catch(err){
console.log(err);
}};

// export const UpdateB

//delete
export const deleteProject = async (req,res)=>{
    try{
        const {_id} =req.params
        const deleteProjectById = await Projects.findByIdAndDelete(_id);
        res.json({"Status": true, "projects": deleteProjectById});

    }catch(err){
    res.json({"status": false, "message": err })
    }
};

export const getProject = async (req,res)=>{
    try{
        const {_id} = req.params;
        const project = await Projects.findById(_id);
        res.send({"Status": true, "projects": project});


    }catch(err){
        res.send({"Status": true, "Message": err})
    }
};

export const getAllprojects = async (req,res)=>{
    try
    {
     const getAll = await Projects.find().sort({'createdAt': -1});
     res.send({"status": true, "getAll": getAll})
    }catch(err){
        res.send({"Status": true, "message": err});

    }
};