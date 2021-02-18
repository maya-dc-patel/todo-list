import reactDom from "react-dom";
import React from "react";


import {
    Input, Form, Button
} from 'reactstrap';

function InputForm(props) {
    console.log(props, "props");
    function submit(event) {
        console.log("This is the event: " + event);
        console.log(event, "hello");
        event.preventDefault();
        const text = event.target[0].value;
        console.log(text);
        props.handleSubmit(text);
        console.log(text, "third");
    }
    function del(event) {
        event.preventDefault();
        console.log("delete");

    }
    return (
        <div>
            <Form onSubmit={submit} className="d-flex flex-nowrap">
                <Input name="textInput"></Input>
                <Button className="mx-3 addButton">Add</Button>
                <Button onClick={del} >Delete</Button>
            </Form>


        </div >
    );
}



export default InputForm;


