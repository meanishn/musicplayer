import React, {Component} from 'react';
import {connect} from 'react-redux';
import qs from 'qs';

import {getSearchResult} from './actions';

class SearchResult extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const param = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
        this.props.getSearchResult(param.query);
    }

    render() {
        return (
            <div>
                <h3>Search Result page {this.props.location.search}</h3>
            </div>
        );
    }
}
function mapStateToProps(state, props) {
    return {
        results: state.searchResults.results
    }
}

export default connect(mapStateToProps,{getSearchResult})(SearchResult);