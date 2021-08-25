function randomNoGenerator(min, max) {
  console.log('random number generator')
  if(typeof(max) !== 'number' && typeof(min) !== 'number') {
    min = 0;  max = 1;
  }
 return (Math.random() * (max-min)) + min;
}
module.exports = randomNoGenerator;

