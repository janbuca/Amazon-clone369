import axios from 'axios';
const instance = axios.create({
	baseURL: "http://127.0.0.1:5001/janbucafk/us-central1/api",
});
export default instance;
// http://localhost:5001/clone-ef0ad/us-central1/api