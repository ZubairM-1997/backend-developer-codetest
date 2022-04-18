const readAll = ({ ctx }) => {
  if (!ctx) {
    throw new Error('ctx must be supplied');
  }
  return [
    {
      id: '123',
      name: 'Asset Name',
      description: 'Asset 123',
    },
  ];
};

module.exports = {
  readAll,
};