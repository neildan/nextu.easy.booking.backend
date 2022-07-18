module.exports = {
  tableName: 'theater_halls',
  attributes: {
    theater: {
      type: 'string',
      required: true
    },
    amount_chairs: {
      type: 'int',
      required: true
    }
  }
};

