import React from 'react';
import {Link} from 'react-router-dom';
import {Card, CardBody, CardTitle, CardSubtitle, CardImg} from 'reactstrap';

const styles={
    title: {
        textAlign: 'center',
        position: 'relative',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
        color: '#fff',
        fontSize: '19px',
        fontWeight: 900,
        textTransform: 'uppercase',
        background: 'rgba(0,0,0,0.08)',
        letterSpacing: '5px',
        overflow: 'hidden',
        height: '28px'
    },
    subtitle: {
        color: '#626b74',
        fontSize: '13px'
    }
}
export default (props) => {
    return (
        <Card>
            <div className="card-img-container">
                {props.avatar &&
                    <CardImg top width="100%" src={props.avatar} alt="Card image cap" />
                }
                {props.bgColor && 
                    <div className="playlist-bg" style={{backgroundColor: props.bgColor, height: '100px'}}>
                        <div className="title" style={styles.title}>{props.title}</div>
                    </div>
                }
                
            </div>            
            <CardBody className="px-0 py-3 my-2 text-center">
                <CardTitle tag="div">
                    <Link to={props.link}>
                        {props.title}
                    </Link>
                </CardTitle>
                {props.subtitle && 
                    <div className="subtitle" style={styles.subtitle}>{props.subtitle}</div>
                }
                {/* <CardSubtitle className="text-muted">Card subtitle</CardSubtitle> */}
            </CardBody>
        </Card>
    );
}