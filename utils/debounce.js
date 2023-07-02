export function useDebounce(fn, debounceTime) {
  let timout;
  function wrapper() {
    if (timout) {
      clearTimeout(timout);
      timout = setTimeout(async () => {
        await fn.apply(this, arguments);
      }, debounceTime);
      return;
    }
    timout = setTimeout(() => {
      fn.apply(this, arguments);
    }, debounceTime);
  }
  return wrapper;
}
