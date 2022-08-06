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
  },
  beforeDestroy: async function (criteria, cb) {
    const theater = await TheaterHall.find(criteria).populate('events')
    if (!theater || theater.length == 0) return cb(false);
    theater.forEach(async function (beforeDestroyE) {
      await TheEvent.destroy({
        id: {
          in: beforeDestroyE.events.map((rel) => {
            return rel.id
          })
        }
      });
    });
    cb();
  }
};

