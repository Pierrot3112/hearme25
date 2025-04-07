import axiosInstance from './axiosInstance';

const getUsers = async () => {
  try {
    const response = await axiosInstance.get('/utilisateur/');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
const registerUsers = async (data) => {
  try {
    const response = await axiosInstance.post('/utilisateur/',data);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
const deleteUsers = async (id) => {
  try {
    await axiosInstance.delete(`/utilisateur/${id}/`);
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export {
  getUsers,registerUsers,deleteUsers
};
