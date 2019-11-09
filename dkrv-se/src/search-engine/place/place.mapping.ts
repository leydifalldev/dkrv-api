const placeMapping = {
  index: 'place',
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
      type: {
        type: 'keyword',
      },
      category: {
        type: 'keyword',
      },
      gastronomies: {
        type: 'nested',
      },
      notation: {
        type: 'integer',
      },
      travel_time: {
        type: 'integer',
      },
      ocean_near: {
        type: 'boolean',
      },
      likes: {
        type: 'integer',
      },
      address: {
        type: 'keyword',
      },
      zone: {
        type: 'keyword',
      },
      cpc: {
        type: 'keyword',
      },
      location: {
        type: 'geo_point',
      },
      temporaly_place: {
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
