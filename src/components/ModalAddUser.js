import { useState } from 'react';
import { Modal,Button } from 'react-bootstrap';
import { postCreateUser } from '../services/UserService';
import { toast } from 'react-toastify';

const ModalAddUser = (props) => {
    const {show, handleClose, handleUpdateTable} = props
    const [name, setName] = useState("")
    const [job, setJob] = useState("")

    const handleSaveUser = async () => {
        let res = await postCreateUser(name,job)
        //console.log(">>> check res: " ,res)

        if(res && res.id){
            handleClose()
            setName('')
            setJob('')
            toast.success("A User is created success!")
            handleUpdateTable({id: res.id, first_name: name})
        } else {
            toast.error("An error ...")
        }
    }

    return (
        <>
            <Modal show={show} 
               onHide={handleClose}
               backdrop="static"
               keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Add a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" 
                               className="form-control" 
                               value={name}
                               onChange={(event)=>setName(event.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Job</label>
                        <input type="text" 
                               className="form-control" 
                               value={job}
                               onChange={(event)=>setJob(event.target.value)}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={()=>handleSaveUser()}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalAddUser;
