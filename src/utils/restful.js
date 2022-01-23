import axios from 'axios';

const instance = axios.create({
  timeout: 3000,
});

export const get = function getWithAXIOSInstance({ path, parameters = {}, config = {} }) {
  return instance.get(path, { ...config, params: parameters });
};

export default { get };
