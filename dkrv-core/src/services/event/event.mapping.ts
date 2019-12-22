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
      address: {
        type: 'keyword',
      },
      zone: {
        type: 'keyword',
      },
      price: {
        type: 'object',
        properties: {
          class: {
            type: 'keyword',
          },
          value: {
            type: 'integer',
          },
        },
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
      place: {
        type: 'object',
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
        type: 'object',
      },
      pictures: {
        properties: {
          src: {
            type: 'keyword',
          },
          size: {
            type: 'keyword',
          },
        },
      },
    },
  },
};

export default eventMapping;
