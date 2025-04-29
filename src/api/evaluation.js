import axiosInstance from '../Auth/services/axiosInstance';

const getEvaluation = async () => {
  try {
    const response = await axiosInstance.get('/evaluations/');
    console.log( response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
const createEvaluation = async (data) => {
  try {
    const response = await axiosInstance.post('/evaluations/',data);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
const evaluationDetail = async (id) => {
  try {
    const response = await axiosInstance.get(`/evaluations/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
const deleteEvaluation = async (id) => {
  try {
    await axiosInstance.delete(`/evaluations/${id}/`);
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
const evaluationGetQuizz=async (id) => {
  try {
    const response = await axiosInstance.get(`/evaluations/${id}/quiz/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

export {getEvaluation,deleteEvaluation,createEvaluation,evaluationDetail,evaluationGetQuizz};
