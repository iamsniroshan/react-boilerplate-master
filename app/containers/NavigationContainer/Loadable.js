/**
 *
 * Asynchronously loads the component for NavigationContainer
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
