import reactDom from "react-dom";
import React from "react";

import {
    Input, Form, Button
} from 'reactstrap';

function InputForm(props) {
    function submit(event) {
        event.preventDefault();
        const text = event.target[0].value;
        console.log(text);
        props.handleSubmit(text);
        console.log(text, "third");
    }
    return (
        <Form onSubmit={submit} className="d-flex flex-nowrap">
            <Input name="textInput"></Input>
            <Button className="mx-3 addButton">Add</Button>
        </Form>
    );
}

export default InputForm;


