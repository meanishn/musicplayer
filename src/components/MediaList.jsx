import React from 'react';

export default (props) => {
    const times = new Array(props.times).fill();
    return (times.map(t =>
        <li className="media">
            <img className='d-flex mx-1 my-1 mr-3 img-icon' src='http://via.placeholder.com/64X64' />
            <div className='media-body'>
                <h6 className='mt-1 mb-1'>Track One</h6>
                <small className='text-muted'>some description on the title</small>
            </div>
        </li>
    ));
}