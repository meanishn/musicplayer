import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import SearchBar from '../SearchBar';
import logoImage from '../../assets/images/logo.png'
import './styles.scss';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.toggleSearchBar = this.toggleSearchBar.bind(this);
    this.onClickSearchButton = this.onClickSearchButton.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      collapsed: true,
      searchVisible: false,
      searchTerm: ''
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  toggleSearchBar() {
    this.setState({
      searchVisible: !this.state.searchVisible
    });
  }

  onClickSearchButton() {
    if (!this.state.searchTerm) return;
    
    this.toggleSearchBar();
    this.setState({searchTerm: ''});
    this.props.history.push(`/search?query=${this.state.searchTerm}`);
  }

  onChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    });
  }


  render() {
    return (    
      <div className="top-nav fixed-top">
        <NavbarBrand href="/" className="mr-auto">
          <img src={logoImage} alt="logo"/>
        </NavbarBrand>
        <div className="menu-items">
          <div className="menu-item d-none" onClick={() => this.toggleSearchBar()}>
              {!this.state.searchVisible && <i className="icon fa fa-search circle-icon" />}
              {this.state.searchVisible && <i className="icon fa fa-times circle-icon" /> }
          </div>
          <div className="menu-item">
            <Link to="/">
              {/* <i className="icon fa fa-headphones circle-icon" /> */}
              <span className="">Artists</span>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/playlists">
              {/* <i className="icon fa fa-music circle-icon" /> */}
              <span className="">Playlist</span>
            </Link>
           </div>
        </div>
        {this.state.searchVisible && 
          <div className="navbar-search-container">
            <input type="text"
              name="searchTerm"
              placeholder="Search audios eg. using artist name, audio title or tags"
              value={this.state.searchTerm}
              onChange={this.onChange}/>
            <div className="search-icon" onClick={() => this.onClickSearchButton()}><i className="icon fa fa-search" /></div>
          </div>
        }       
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {  };
}

export default connect(mapStateToProps, {})(withRouter(NavBar));