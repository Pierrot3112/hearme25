import axiosInstance from '../Auth/services/axiosInstance';

const getCategorie = async () => {
  try {
    const response = await axiosInstance.get('/courses/categorie/');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
const createCategorie = async (data) => {
  try {
    const response = await axiosInstance.post('/courses/categorie/',data);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
const deleteCategorie = async (id) => {
  try {
    await axiosInstance.delete(`/courses/categorie/${id}/`);
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export {getCategorie,deleteCategorie,createCategorie};
