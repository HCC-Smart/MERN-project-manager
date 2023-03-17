import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-hot-toast';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentProjectState, modalState , updateState} from '../atom';

function ModalPopup() {
 const [show, setShow] = useRecoilState(modalState);
 const [updated, SetUpdated] = useRecoilState(updateState);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
  const initialData={
    _id:"",
    title:"",
    description:"",
    Budget:0
  
  }; 
  
  const [projectbody, setProjectbody] = useState(currentProjectState);
  const{_id, title, description, Budget} =useRecoilValue(currentProjectState)

const handleChange =(event)=>{
  setProjectbody({...projectbody, [event.target.name]: event.target.value});
  console.log(projectbody);
};

a1w
const handleSubmit = async(event)=>{
 event.preventDefault();
 try {
  if(_id){
    const {data} = await axios.post("http://localhost:9000/api/project/update-project", projectbody);
    toast.success("updated successfully", {duration: 4000,
      style:{
        border: "2px solid #00710d",
        padding: "16px",
        color: "#00710d"
      }
      });
  }else{
    const {data} = await axios.post("http://localhost:9000/api/project/register-project", projectbody);

  
  toast.success("registered successfully", {duration: 4000,
  style:{
    border: "2px solid #00710d",
    padding: "16px",
    color: "#00710d"
  }
  });
  setProjectbody(initialData);
  setShow(!show)
  SetUpdated(!updated)
  console.log(data);

 } }catch (err) {
  console.log(err);
  
 }
};
// const deleteHandler= async=()=>{
//   try {
//     const {data} = await axios.delete("")
//   } catch (err) {
    
//   }
// }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project management</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form  onSubmit={handleSubmit}>
          <div className='form-group my-3'>
            <input type="text" className='text form-control'
             placeholder='enter project title'    
             name='title'
             onChange={handleChange}
             value={title}
             />   </div>
        <div className='form-group'>
          <textarea className='form-control' placeholder='enter description'
                       name='description'
                       onChange={handleChange}

                       value={description}


          ></textarea>
        </div>
        <div className='form-group my-3'>
            <input type="number" className=' form-control'
             placeholder='enter project Budget' 
             name='Budget'
             onChange={handleChange}

             value={Budget}

             />      
             
             
                </div>
        <div>
          <button className='d-flex justify-content-end btn btn-success' type='submit' onChange={handleClose} >
            Save Changes
          </button>
          </div>
        </form>
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default ModalPopup;