import axiosInstance from './axiosInstance';

const getUsers = () => {
  return axiosInstance.get('users');
};

export default {
  getUsers,
};
