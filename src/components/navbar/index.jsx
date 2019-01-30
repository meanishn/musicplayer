import React from 'react';
import {Link} from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import SearchBar from '../SearchBar';
import logoImage from '../../assets/images/logo.png'
import './styles.scss';

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
      // <div>
      //   <Navbar color="faded" light expand="md" className="fixed-top">
      //       <div className="container">
      //           <NavbarBrand href="/" className="mr-auto">Company</NavbarBrand>
      //           <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
      //           <Collapse isOpen={!this.state.collapsed} navbar>
      //               <Nav navbar className="ml-auto mr-3">
      //                   <NavItem>
      //                       <NavLink tag={Link} to="/">Home</NavLink>
      //                   </NavItem>
      //                   <NavItem>
      //                       <NavLink tag={Link} to="/artists">Artists</NavLink>
      //                   </NavItem>
      //                   <NavItem>
      //                       <NavLink tag={Link} to="/playlists">Playlists</NavLink>
      //                   </NavItem>
      //                   <NavItem>
      //                       <NavLink tag={Link} to="/">Scripts</NavLink>
      //                   </NavItem>
      //               </Nav>
      //           </Collapse>
      //       </div>
      //   </Navbar>
      // </div>
      
      <div className="top-nav fixed-top">
        <NavbarBrand href="/" className="mr-auto">
          <img src={logoImage} alt="logo"/>
        </NavbarBrand>
        <div className="menu-items">
          <div className="menu-item">
            <Link to="/">
              <i className="icon fa fa-headphones circle-icon" />
              <span className="d-none d-sm-inline">Artists</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/playlists">
              <i className="icon fa fa-music circle-icon" />
              <span className="d-none d-sm-inline">Playlist</span>
            </Link>
           </div>
        </div>
        
      </div>
    );
  }
}