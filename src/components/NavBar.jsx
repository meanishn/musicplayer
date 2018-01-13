import React from 'react';

export default (props) => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top nav-wider">            
            <a className="navbar-brand mr-5 color-orange" href="#">COMPANY</a>
            <ul className="navbar-nav mr-auto color-orange">
                <li className="nav-item">
                    <a className="nav-link text-warning" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-warning" href="#">Explore <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-warning" href="#">Artists <span className="sr-only">(current)</span></a>
                </li>
            </ul>
        </nav>
    );
}