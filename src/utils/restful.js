import axios from 'axios';

// create a instance for common api config
const instance = axios.create({
  timeout: 3000,
});

export const get = function getWithAXIOSInstance({ path, parameters = {}, config = {} }) {
  return instance.get(path, { ...config, params: parameters });
};

export default { get };
