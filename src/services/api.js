import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

export const getRepositories = () => api.get(`/repositories`);

export const addRepository = repository => api.post(`/repositories`, repository);

export const deleteRepository = id => api.delete(`/repositories/${id}`);

