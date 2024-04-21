import { instanceAxios } from '../helpers/instanceAxios';

export const getBlogs = async () => {
  const response = await instanceAxios.get('posts');
  return response;
};

export const getBlogID = async (id) => {
  const response = await instanceAxios.get(`posts/${id}`);
  return response;
};
