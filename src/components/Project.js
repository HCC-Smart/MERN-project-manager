// import { Button } from "react-scroll/modules";
import {GoPencil} from 'react-icons/go';
import {BsTrash} from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { currentProjectState, modalState } from '../atom';
import axios from 'axios';
import { toast } from 'react-hot-toast';


const Project =({project})=>{
  const {_id, title, description, Budget} = project
 const[show,setShow] = useRecoilState(modalState);
 const[currentProject, setCurrentProject]= useRecoilState(currentProjectState)
  const handleUpdate =(_id, title, description, Budget)=>{
  setShow(!show);
  setCurrentProject({_id: _id, title: title, description:description, Budget:Budget})
  };

  const handleDelete= async(_id)=>{
    try {
      const {data} = await axios.delete(`http://localhost:9000/api/project/delete-project:${_id}`);
      toast.success("deleted")
    } catch (err) {
      
    }
  };
    return (
    <>
    <div className="col-sm-3 my-2">
    <div className="card p-2 shadow-lg">
  <div className="card-title">
  <h4>{title}</h4>
  </div>
  <div className="card-body">
    <p>{description}</p>
  </div>
  <div className="card-buget">
    <p>{Budget}</p>
  </div>
  <div className="card-footer">
    <div className="d-flex justify-content-between">
    <button className='btn btn-white'></button>
    <div className='d-flex justify-content-between space-x'>
    <BsTrash className='text-danger iconss ' onClick={()=>handleDelete(_id)}/>
    <GoPencil className='text-success iconss' onClick={()=>handleUpdate(_id, title, description, Budget)}/>
    </div>
</div>

  </div>
       </div>
       
       
    </div>
       
        </>
        );
}
export default Project;