import Project from "./Project";
import { useEffect, useState } from "react";
import axios from "axios";
import {useRecoilState} from 'recoil';
import {modalState, updateState} from '../atom'
const Projects = ()=>{

const projectData =[

    {
        id: 1,
        title: "project one",
        description:"project one descriptio",
        budget:"200",
        company:"jamuuriya"
    },
    {
        id: 2,
        title: "project two",
        description:"project two descriptio",
        budget:"200",
        company:"jamuuriya"
    },
    {
        id: 3,
        title: "project three",
        description:"project three descriptio",
        budget:"200",
        company:"jamuuriya"
    },
    {
        id: 4,
        title: "project four",
        description:"project dour descriptio",
        budget:"200",
        company:"jamuuriya"
    },
    
];
const [projects, setProjects] = useState([]);
const [loading, setLoading] = useState(false);
const [updated, SetUpdated] = useRecoilState(updateState);


useEffect(()=>{
const getAllprojects = async ()=>{
    try {
        setLoading(true);
        const {data} = await axios.get('http://localhost:9000/api/project/get-all-project');
       console.log(data);
       setProjects(data.getAll);
       setLoading(false);
    } catch (err) {
        console.log(err);
    }
} 
getAllprojects();
},[updated]);
if(loading) return <h1>loading....</h1>;
    return (
    <>
    <div className="container">
       <div className="row gap-1">
       {projects.map((project) =>(
            <Project project={project}/>
        ))};
       </div>
     
    </div>
    </>
    )
}
export default Projects;