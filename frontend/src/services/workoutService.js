import API from './api';

export const fetchWorkoutsAPI = () => API.get('/workouts');
export const createWorkoutAPI = (data) => API.post('/workouts', data);
export const updateWorkoutAPI = (id, data) => API.put(`/workouts/${id}`, data);
export const deleteWorkoutAPI = (id) => API.delete(`/workouts/${id}`);