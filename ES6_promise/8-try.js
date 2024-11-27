export default function divideFunction(numerator, denominator) {
  return Promise.try(() => {
    if (denominator === 0) {
      throw new Error('Cannot divide by zero');
    }
    return numerator / denominator;
  }).catch((error) => error);
}
