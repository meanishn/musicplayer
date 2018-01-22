import React from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, CardImg} from 'reactstrap';
export default (props) => {
    const times = new Array(props.times).fill();
    return times.map(t =>
        <Card>
            <div className="card-img-container">
                {/* <CardImg top width="100%" src="./pattern.png" alt="Card image cap" /> */}
            </div>            
            <CardBody className="px-0 py-0 text-center">
                <CardTitle tag="small">Title</CardTitle>
                {/* <CardSubtitle className="text-muted">Card subtitle</CardSubtitle> */}
            </CardBody>
        </Card>
    );
}