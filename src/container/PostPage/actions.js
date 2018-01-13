import {posts} from './data';
export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = ' fetch_post';

export function fetchPosts(){
    return {
        type: FETCH_POSTS,
        data: posts
    }
}

export function fetchPost(id) {
    const post = posts.find(p => p.id.toString() === id.toString());
    return {
        type: FETCH_POST,
        data: post
    }
}