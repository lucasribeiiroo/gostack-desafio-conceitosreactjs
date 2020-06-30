
import api from "services/api";

export const getRepositories = () => api.get(`/repositories`);

export const addRepository = repository => api.post(`/repositories`, repository);

export const deleteRepository = id => api.delete(`/repositories/${id}`);