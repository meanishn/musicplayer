import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from './actions';

class PostDetail extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }
    render() {
        if (!this.props.post) {
            return <div>loading....</div>
        }
        return (
            <div>
                <h2>Detail</h2>
                <h3>{this.props.post.title}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts[0]
    }
}

export default connect(mapStateToProps, {
    fetchPost
})(PostDetail);