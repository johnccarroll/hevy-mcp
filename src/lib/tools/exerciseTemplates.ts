
import axios from 'axios';
import { GetExerciseTemplatesParams, GetExerciseTemplateByIdParams } from '../types';

const API_URL = 'https://api.hevyapp.com';

const getHeaders = () => ({
  'api-key': process.env.HEVY_API_KEY,
  'Content-Type': 'application/json'
});

export const getExerciseTemplates = async (params: GetExerciseTemplatesParams) => {
  const { data } = await axios.get(`${API_URL}/v1/exercise_templates`, { headers: getHeaders(), params });
  return data;
};

export const getExerciseTemplateById = async (params: GetExerciseTemplateByIdParams) => {
  const { data } = await axios.get(`${API_URL}/v1/exercise_templates/${params.exerciseTemplateId}`, { headers: getHeaders() });
  return data;
};
