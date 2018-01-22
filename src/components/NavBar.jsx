// import React from 'react';

// export default (props) => {
//     return (
//         <nav className="navbar navbar-expand-lg fixed-top nav-wider">
//         <div className="container">
//             <a className="navbar-brand mr-5 color-orange" href="#">COMPANY</a>
//             <ul className="navbar-nav mr-auto color-orange">
//                 <li className="nav-item">
//                     <a className="nav-link text-warning" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link text-warning" href="#">Explore <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link text-warning" href="#">Artists <span className="sr-only">(current)</span></a>
//                 </li>
//             </ul>
//         </div>
        
//         </nav>
//     );
// }

import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md" className="fixed-top">
            <div className="container">
                <NavbarBrand href="/" className="mr-auto">Company</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav navbar className="ml-auto mr-3">
                        <NavItem>
                            <NavLink href="/components/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Artists</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Playlists</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Scripts</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
      </div>
    );
  }
}