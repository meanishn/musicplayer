import React from 'react';
import Sidebar from 'react-sidebar';
import {Link} from 'react-router-dom';
import './styles.scss';

const mql = window.matchMedia(`(min-width: 800px)`);

export default class extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            docked: mql.matches
        }

        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    }
    onSetSidebarOpen(status) {
        this.setState({
            sidebarOpen: status
        });
    }

    mediaQueryChanged() {
        this.setState({
          docked: mql.matches,
          sidebarOpen: false
        });
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }
    
    componentWillUnmount() {
        mql.removeListener(this.mediaQueryChanged);
    }

    getSidebarContent() {
        return (
            <div className="sidebar-wrapper">
                <div className="brand">
                    <h2>EROTICUP</h2>
                </div>
                <div className="sidebar-content">
                    <div className="label">Discover</div>
                    <div className="sidebar-nav">
                        <ul className="nav-items"
                            onClick={(event) => {
                                console.log(event);
                            }}
                        >
                            <li className={location.pathname === '/' ? 'active': ''}>
                                <Link to="/">
                                    <i className="icon fa fa-home" />
                                    <span>Home</span>
                                </Link>
                                
                            </li>
                            <li className={location.pathname.match('/artists') ? 'active': ''}>
                                <Link to="/artists">
                                <i className="icon fa fa-headphones" />
                                    <span>Artists</span>
                                </Link>
                            </li>
                            <li className={location.pathname.match('/playlists') ? 'active': ''}>
                                <Link to="/playlists">
                                    <i className="icon fa fa-music" />
                                    <span>Playlists</span>
                                </Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <Sidebar
                sidebar={this.getSidebarContent()}
                shadow={false}
                sidebarClassName="custom-sidebar"
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}
                docked={this.state.docked}
                styles={{ sidebar: { background: "white", boxShadow: "10px 0 40px -4px rgba(0,0,0,.3)"} }}
            >
                <div className="hamburger-menu" onClick={() => this.onSetSidebarOpen(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* <button className="btn-toggle" onClick={() => this.onSetSidebarOpen(true)}>
                Open sidebar
                </button> */}
            </Sidebar>
        );
    }
    
}