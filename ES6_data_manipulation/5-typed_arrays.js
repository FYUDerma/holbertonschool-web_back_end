const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  const data = new DataView(buffer);

  if (position >= length) {
    throw new Error('Position outside range');
  }

  data.setInt8(position, value);

  return data;
};

export default createInt8TypedArray;
