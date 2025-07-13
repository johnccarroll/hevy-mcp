
import axios from 'axios';
import { GetWorkoutsParams, CreateWorkoutParams, GetWorkoutEventsParams, GetWorkoutByIdParams, UpdateWorkoutParams } from '../types';

const API_URL = 'https://api.hevyapp.com';

const getHeaders = () => ({
  'api-key': process.env.HEVY_API_KEY,
  'Content-Type': 'application/json'
});

export const getWorkouts = async (params: GetWorkoutsParams) => {
  const { data } = await axios.get(`${API_URL}/v1/workouts`, { headers: getHeaders(), params });
  return data;
};

export const createWorkout = async (params: CreateWorkoutParams) => {
  const { data } = await axios.post(`${API_URL}/v1/workouts`, params, { headers: getHeaders() });
  return data;
};

export const getWorkoutCount = async (params: any) => {
    const { data } = await axios.get(`${API_URL}/v1/workouts/count`, { headers: getHeaders(), params });
    return data;
  };
  

export const getWorkoutEvents = async (params: GetWorkoutEventsParams) => {
  const { data } = await axios.get(`${API_URL}/v1/workouts/events`, { headers: getHeaders(), params });
  return data;
};

export const getWorkoutById = async (params: GetWorkoutByIdParams) => {
  const { data } = await axios.get(`${API_URL}/v1/workouts/${params.workoutId}`, { headers: getHeaders() });
  return data;
};

export const updateWorkout = async (params: UpdateWorkoutParams) => {
  const { workoutId, ...body } = params;
  const { data } = await axios.put(`${API_URL}/v1/workouts/${workoutId}`, body, { headers: getHeaders() });
  return data;
};
