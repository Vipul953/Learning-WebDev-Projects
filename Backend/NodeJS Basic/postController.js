const posts = [
    { id: 1, title: 'Post One'},
    { id: 2, title: 'Post Two'},
]

const getPosts = () => posts
// Did not use "desfault", so use {} while import
export const getPostsLength = () => posts.length

// Used "deafult", so no need to put getPost in {} braces
export default getPosts
