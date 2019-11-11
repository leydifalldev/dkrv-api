const eventMapping = {
  index: 'event',
  type: 'event',
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
      manager: {
        properties: {
          id: {
            type: 'keyword',
          },
          name: {
            type: 'keyword',
          },
          phone: {
            type: 'keyword',
          },
          email: {
            type: 'keyword',
          },
          picture: {
            type: 'keyword',
          },
        },
      },
      address: {
        type: 'keyword',
      },
      categories: {
        type: 'nested',
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
      location: {
        type: 'geo_point',
      },
      hosts: {
        type: 'nested',
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
