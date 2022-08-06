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
  },
  beforeDestroy: async function (criteria, cb) {
    const event = await TheEvent.find(criteria).populate('theFunction')
    if (!event || event.length == 0) return cb(false);
    event.forEach(async function (beforeDestroyE) {
      await TheFunction.destroy({
        id: {
          in: beforeDestroyE.theFunction.map((rel) => {
            return rel.id
          })
        }
      });
    });
    cb();
  }
};

