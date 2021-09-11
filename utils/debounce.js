const { setTimeout, clearTimeout } = window;

/**
 * @param {Function|CallableFunction} callback
 * @param {number} [time] defaults to 300ms
 */
export function Debounce(callback, time = 300) {
  let timer;
  const now = (...args) => {
    clearTimeout(timer);
    callback.apply(this, args);
  };
  const debounced = (...args) => {
    clearTimeout(timer);
    timer = setTimeout(now, time, ...args);
  };
  debounced.now = now;
  return debounced;
}
