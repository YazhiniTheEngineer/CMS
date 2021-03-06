import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import tasks from "../components/tasks";
import Card from "./Card";


function Input(props){
    const [title,setTitle] = useState("");
    const [task,setTask] = useState("");
    const [radio,setRadio] = useState("");
    let setAns = (e) => {
        e.preventDefault();
       
        let obj = {"title":title, "task":task, "radio":radio}
        tasks.push(obj);
        localStorage.setItem(title,[title,task,radio]);
        setTitle("");
        setTask("");
        setRadio("");

      };
      
    return (props.trigger) ? ( 
        <>
            <Modal.Dialog>
                <Modal.Header closeButton onClick={() => props.setTrigger(false)}>
                    <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title..." id="title"
                             onChange={(e) => setTitle(e.target.value)} value={title}
                             />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Task</Form.Label>
                            <Form.Control type="text" placeholder="Enter task..." id="task" value={task}
                             onChange={(e) => setTask(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" 
                            onChange={(e) => setRadio(e.target.value) }
                        >
                            <Form.Check type="radio" name="same" value="Urgent" label="Urgent" />
                            <Form.Check type="radio" name="same" value="Within Today" label="Within Today" />
                            <Form.Check type="radio" name="same" value="Whenever"  label="Whenever" />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.setTrigger(false)}>Close</Button>
                    <Button variant="primary" 
                        onClick={setAns} 
                    >Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
    </>) : null;
}

export default Input;
