import { identity, throttle, get, noop } from 'lodash';
import GA from 'react-ga';

const DURATION = 1000;
const OPTIONS = { leading: true, trailing: false };

const middleware = [
  'initialize',
  'set',
  'pageview',
  'modalview',
  'timing',
  'ga',
  'event',
  'exception',
  'outboundLink',
  'plugin.require',
  'plugin.execute',
].map(i => {
  const fn = get(GA, i, noop);
  const throttled = throttle(fn, DURATION, OPTIONS);
  return {
    type: i,
    value: {
      method: (...args) => {
        throttled(...args);
        return identity;
      },
      resolve: (...args) => identity(...args),
    }
  }
});

export default middleware;
