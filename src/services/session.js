export default {
  set: (key, data) => {
    sessionStorage.setItem(key, JSON.stringify(data));
  },

  clear: () => {
    sessionStorage.clear();
  },

  get: (key) => {
    return JSON.parse(sessionStorage.getItem(key));
  },
};
