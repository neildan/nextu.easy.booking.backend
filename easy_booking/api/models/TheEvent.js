module.exports = {
  tableName: 'events',
  primaryKey: 'id',
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    url_image: {
      type: 'text',
      required: true
    },
    theater_hall_id: {
      model: 'theaterHall'
    },
    theFunction: {
      collection: 'theFunction',
      via: 'event_id'
    }
  }
};

