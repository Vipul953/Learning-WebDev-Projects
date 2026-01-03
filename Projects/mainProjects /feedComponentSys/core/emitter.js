export function createEmitter() {
  const listeners = new Set();

  return {
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    emit() {
      listeners.forEach((fn) => fn());
    },
  };
}
