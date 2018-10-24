import { loadModuleDefault, errorModuleLoading } from 'utils/route-util';

export default {
  path: 'hello',
  getComponent(location, callback) {
    import('pages/HelloWorld').then(loadModuleDefault(callback)).catch(errorModuleLoading);
  },
};
