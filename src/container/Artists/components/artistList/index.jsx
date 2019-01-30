import React from 'react';

export default (props) => {
    return (
        <div className="container">
                <div className="row align-center">
                    <div className="col-md-12">
                        <Panel header="Discover">
                            <div className="inner-card-item">
                                {
                                    props.artists.allIds.map(id =>
                                        <Link to={`artists/${id}`}>
                                        <Card 
                                            key={id} 
                                            id={id} 
                                            avatar={this.props.artists.byId[id].avatar}
                                            title={this.props.artists.byId[id].name}
                                            link={`/artists/${id}`}
                                        />
                                        </Link>
                                    )
                                }
                            </div>
                            
                        </Panel>
                    </div>
                </div>
            </div>
    )
}