import axiosInstance from '../Auth/services/axiosInstance';


export const getAllFormtion = async () => {
    try {
      const response = await axiosInstance.get('/courses/formation/');
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  };