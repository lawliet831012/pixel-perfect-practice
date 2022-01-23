import { get } from './restful';

export const getTags = () => get({ path: 'https://avl-frontend-exam.herokuapp.com/api/tags' });

export const getResult = (parameters) => get({ parameters, path: 'https://avl-frontend-exam.herokuapp.com/api/users/all' });

export const getFollowers = (parameters) => get({ parameters, path: 'https://avl-frontend-exam.herokuapp.com/api/users/all' });

export const getFriends = (parameters) => get({ parameters, path: 'https://avl-frontend-exam.herokuapp.com/api/users/friends' });

export default {
  getTags, getResult, getFollowers, getFriends,
};
