
import axios from 'axios';
import { WebhookSubscriptionParams } from '../types';

const API_URL = 'https://api.hevyapp.com';

const getHeaders = () => ({
  'api-key': process.env.HEVY_API_KEY,
  'Content-Type': 'application/json'
});

export const createWebhookSubscription = async (params: WebhookSubscriptionParams) => {
  const { data } = await axios.post(`${API_URL}/v1/webhook-subscription`, params, { headers: getHeaders() });
  return data;
};

export const deleteWebhookSubscription = async () => {
  const { data } = await axios.delete(`${API_URL}/v1/webhook-subscription`, { headers: getHeaders() });
  return data;
};

export const getWebhookSubscription = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/v1/webhook-subscription`, { headers: getHeaders() });
    return data;
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      return null;
    }
    throw error;
  }
};
