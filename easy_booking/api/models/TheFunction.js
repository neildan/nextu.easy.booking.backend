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
  },
  beforeDestroy: async function (criteria, cb) {
    const functionModel = await TheFunction.find(criteria).populate('spectatorFunction')
    if (!functionModel || functionModel.length == 0) return cb(false);
    functionModel.forEach(async function (beforeDestroyE) {
      await SpectatorFunction.destroy({
        id: {
          in: beforeDestroyE.spectatorFunction.map((rel) => {
            return rel.id
          })
        }
      });
    });
    cb();
  }
};

