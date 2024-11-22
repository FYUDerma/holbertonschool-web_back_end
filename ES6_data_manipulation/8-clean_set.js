const cleanSet = (set, startString) => {
  if (!startString || typeof startString !== 'string') return '';
  const result = [];
  set.forEach((value) => {
    if (value && value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
  });
  return result.join('-');
};

export default cleanSet;
