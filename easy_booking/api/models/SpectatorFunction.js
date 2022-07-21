module.exports = {
  tableName: 'spectators_funtions',
  primaryKey: 'id',
  attributes: {
    chair: {
      type: 'number',
      required: true
    },
    spectator_id: {
      model: 'spectator'
    },
    function_id: {
      model: 'theFunction'
    },
  }
};

