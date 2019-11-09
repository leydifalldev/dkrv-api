const eventMapping = {
  index: 'event',
  include_type_name: true,
  body: {
    properties: {
      id: {
        type: 'keyword',
      },
      name: {
        type: 'keyword',
      },
      start_date: {
        type: 'date',
      },
      end_date: {
        type: 'date',
      },
      placeid: {
        type: 'keyword',
      },
      placename: {
        type: 'keyword',
      },
      zone: {
        type: 'keyword',
      },
      price: {
        type: 'nested',
      },
      phone: {
        type: 'keyword',
      },
      email: {
        type: 'keyword',
      },
      address: {
        type: 'keyword',
      },
      category: {
        type: 'keyword',
      },
      description: {
        type: 'text',
      },
      notation: {
        type: 'integer',
      },
      likes: {
        type: 'integer',
      },
      logo: {
        type: 'keyword',
      },
      placezone: {
        type: 'keyword',
      },
      location: {
        type: 'geo_point',
      },
      pictures: {
        properties: {
          src: {
            type: 'keyword',
          },
        },
      },
    },
  },
};

export default eventMapping;
