import { loadModuleDefault, errorModuleLoading } from 'utils/route-util';
import HelloWorldRouteConfig from 'pages/HelloWorld/route';

export default [
  {
    path: '/',
    getComponent(location, callback) {
      import('containers/app').then(loadModuleDefault(callback)).catch(errorModuleLoading);
    },
    getChildRoutes(partialNextState, callback) {
      callback(null, [
        HelloWorldRouteConfig,
      ]);
    },
    onEnter: ({ location }) => {
      /* eslint-disable no-console */
      console.log('Location On Enter:', location);
      /* eslint-enable */
    },
    onChange: (prevState, location, replace) => {
      /* eslint-disable no-console */
      console.log('Prev State On Change:', prevState);
      console.log('Location On Change:', location);
      console.log('Replace On Change:', replace);
      /* eslint-enable */
    },
  },
];
