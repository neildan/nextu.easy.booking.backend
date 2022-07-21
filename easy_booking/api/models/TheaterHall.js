module.exports = {
  tableName: 'theater_halls',
  primaryKey: 'id',
  attributes: {
    theater: {
      type: 'string',
      required: true
    },
    amount_chairs: {
      type: 'number',
      required: true
    },
    events: {
      collection: 'theEvent',
      via: 'theater_hall_id'
    }
  }
};

