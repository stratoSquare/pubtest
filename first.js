console.log('first');

(async () => {
  if (true) {
    // import module for side effects
    await import("./sub/second.js");
  }
})();

/**

import('./sub/second.js').then(() => {
  console.log('imported');
});
*/
