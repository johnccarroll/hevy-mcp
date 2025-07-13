
import axios from 'axios';
import { GetRoutineFoldersParams, CreateRoutineFolderParams, GetRoutineFolderByIdParams } from '../types';

const API_URL = 'https://api.hevyapp.com';

const getHeaders = () => ({
  'api-key': process.env.HEVY_API_KEY,
  'Content-Type': 'application/json'
});

export const getRoutineFolders = async (params: GetRoutineFoldersParams) => {
  const { data } = await axios.get(`${API_URL}/v1/routine_folders`, { headers: getHeaders(), params });
  return data;
};

export const createRoutineFolder = async (params: CreateRoutineFolderParams) => {
  const { data } = await axios.post(`${API_URL}/v1/routine_folders`, params, { headers: getHeaders() });
  return data;
};

export const getRoutineFolderById = async (params: GetRoutineFolderByIdParams) => {
  const { data } = await axios.get(`${API_URL}/v1/routine_folders/${params.folderId}`, { headers: getHeaders() });
  return data;
};
