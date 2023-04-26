export function debounce(wait = 0, callback) {
  let timeoutId = null;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setTimeout(() => {
      callback(...args);
    }, wait);
  };
}
