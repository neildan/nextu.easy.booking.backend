module.exports = {
  tableName: 'funtions',
  primaryKey: 'id',
  attributes: {
    hour: {
      type: 'string',
      required: true
    },
    event_id: {
      model: 'theEvent'
    },
    spectatorFunction: {
      collection: 'spectatorFunction',
      via: 'function_id'
    }
  }
};

