/**
 * function to generate random number
 *
 * @param min - minimum number to generate
 * @param max - maximum number to generate
 * @returns {number}
 */
function randomNoGenerator(min, max) {
  if(typeof(max) !== 'number' && typeof(min) !== 'number') {
    min = 0;  max = 1;
  }
 return (Math.random() * (max-min)) + min;
}

module.exports = randomNoGenerator;
