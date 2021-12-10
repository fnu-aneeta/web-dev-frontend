const API_HOST = 'http://localhost:4000';
//const API_HOST = 'https://node-backend-portal.herokuapp.com';

const API_URL = `${API_HOST}/api`;

const API_LOGIN = `${API_HOST}/api/login`;
const API_WHO = `${API_HOST}/api/rand/who`;
const API_POSTS = `${API_HOST}/api/posts`;

module.exports = {
    API_LOGIN,
    API_WHO,
    API_URL,
    API_POSTS
};
