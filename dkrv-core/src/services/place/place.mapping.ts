const placeMapping = {
  index: 'place',
  type: 'place',
  include_type_name: true,
  body: {
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
      description: {
        type: 'text',
      },
      categories: {
        type: 'keyword',
      },
      gastronomies: {
        type: 'nested',
      },
      notation: {
        type: 'integer',
      },
      oceanear: {
        type: 'boolean',
      },
      address: {
        type: 'keyword',
      },
      zone: {
        type: 'keyword',
      },
      location: {
        type: 'geo_point',
      },
      likes: {
        type: 'integer',
      },
      temporaly: {
        type: 'boolean',
      },
      logo: {
        type: 'keyword',
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

export default placeMapping;
