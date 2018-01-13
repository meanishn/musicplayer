import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from './actions';
class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    renderPostList() {
        return this.props.posts.map(post => 
            <li className="list-group-item" key={post.id}>{post.title}</li>
        )
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.renderPostList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {
    fetchPosts
})(PostsIndex);