/* eslint-disable no-console */
export const errorModuleLoading = err => console.error('Dynamic page loading failed', err);


export const loadModuleDefault = cb => (module) => {
  cb(null, module.default);
};
export const loadModule = cb => (module) => {
  cb(null, module);
};
