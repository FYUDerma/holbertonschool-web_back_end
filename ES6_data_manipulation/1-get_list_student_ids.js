const getListStudentIds = (ids) => {
  if (!Array.isArray(ids)) {
    return [];
  }
  const studentIds = ids.map((ids) => ids.id);

  return studentIds;
};

export default getListStudentIds;
