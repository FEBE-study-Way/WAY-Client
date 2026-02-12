import { axiosInstance } from './axiosInstance';

export const get = async <T>(
  ...args: Parameters<typeof axiosInstance.get>
) => {
  const response = await axiosInstance.get<T>(...args);
  return response.data;
};

export const post = async <T>(
  ...args: Parameters<typeof axiosInstance.post>
) => {
  const response = await axiosInstance.post<T>(...args);
  return response.data;
};

export const put = async <T>(
  ...args: Parameters<typeof axiosInstance.put>
) => {
  const response = await axiosInstance.put<T>(...args);
  return response.data;
};

export const patch = async <T>(
  ...args: Parameters<typeof axiosInstance.patch>
) => {
  const response = await axiosInstance.patch<T>(...args);
  return response.data;
};

export const del = async <T>(
  ...args: Parameters<typeof axiosInstance.delete>
) => {
  const response = await axiosInstance.delete<T>(...args);
  return response.data;
};
