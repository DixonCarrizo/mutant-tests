const NEXT = 2;
export default (fn) => (...args) => fn(...args).catch(args[NEXT]);
