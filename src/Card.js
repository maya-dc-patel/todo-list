import React from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Input
} from 'reactstrap';



const MyCard = (props) => {

    return (
        <div>
            <Card>

                <CardBody className="d-flex flex-nowrap">

                    {/* <CardTitle tag="h5">Card title</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
                    <Input onClick={props.click} className="mr-2" type="checkbox"></Input>
                    <CardText>{props.value}</CardText>

                </CardBody>
            </Card>
        </div >
    );
};

export default MyCard;