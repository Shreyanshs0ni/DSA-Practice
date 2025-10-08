function timeLimit(fn, t) {
  return function (...args) {
    const fnPromise = fn(...args); //run the actual function
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeding"), t); //reject after timeout
    });
    return Promise.race([fnPromise, timeoutPromise]); //race both
  };
}

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
