module.exports = {
  tableName: 'spectators',
  primaryKey: 'id',
  attributes: {
    email: {
      type: 'string',
      required: true
    },
    phone: {
      type: 'string',
      required: true
    },
    spectatorFunction: {
      collection: 'spectatorFunction',
      via: 'spectator_id'
    }
  }
};

