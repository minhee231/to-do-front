import apiClient from "./api";

export default {
    getPosts() {
        return apiClient.get(`posts`);
    },
    getPostById(id) {
        return apiClient.get(`/posts/${id}`);
    },
    createPost(post) {
        return apiClient.post('/posts/create', post);
    },
    updatePost(id, post) {
        return apiClient.put(`/posts/${id}`, post);
    },
    deletePost(id) {
        return apiClient.delete(`/posts/${id}`);
    }
}