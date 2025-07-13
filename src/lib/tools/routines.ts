
import axios from 'axios';
import { GetRoutinesParams, CreateRoutineParams, GetRoutineByIdParams, UpdateRoutineParams } from '../types';

const API_URL = 'https://api.hevyapp.com';

const getHeaders = () => ({
  'api-key': process.env.HEVY_API_KEY,
  'Content-Type': 'application/json'
});

export const getRoutines = async (params: GetRoutinesParams) => {
  const { data } = await axios.get(`${API_URL}/v1/routines`, { headers: getHeaders(), params });
  return data;
};

export const createRoutine = async (params: CreateRoutineParams) => {
  const { data } = await axios.post(`${API_URL}/v1/routines`, params, { headers: getHeaders() });
  return data;
};

export const getRoutineById = async (params: GetRoutineByIdParams) => {
  const { data } = await axios.get(`${API_URL}/v1/routines/${params.routineId}`, { headers: getHeaders() });
  return data;
};

export const updateRoutine = async (params: UpdateRoutineParams) => {
    const { routineId, ...body } = params;
  const { data } = await axios.put(`${API_URL}/v1/routines/${routineId}`, body, { headers: getHeaders() });
  return data;
};
