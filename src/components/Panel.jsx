import React from 'react';
import { Card, Button, CardHeader, CardSubtitle, CardFooter, CardBody,
    CardTitle, CardText, CardImg } from 'reactstrap';

const InnerCard = () => {
    return (
        <Card>
            <CardImg top width="100%" src="./pattern.png" alt="Card image cap" />
            <CardBody className="px-2 py-2">
                <CardTitle tag="h6">Title</CardTitle>
                <CardSubtitle className="text-muted">Card subtitle</CardSubtitle>
            </CardBody>
        </Card>
    );
}
const Panel = (props) => {
    const innerCards = [];
    for (let i=0; i< 4; i++) {
        innerCards.push(<InnerCard />)
    }
    return (
        <div>
            <Card className="dark-card">
                <CardHeader tag="div">
                    <h5 className="mb-0">{props.header}</h5>
                    {props.viewAll ? <a className="btn btn-default">see more ></a> : null}
                </CardHeader>                
                <CardBody>
                    {props.children}
                </CardBody>
                
            </Card>
        </div>
        
    );
}

export default Panel;