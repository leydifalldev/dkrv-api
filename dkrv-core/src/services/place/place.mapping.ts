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
      description: {
        type: 'text',
      },
      categories: {
        type: 'keyword',
      },
      gastronomies: {
        type: 'keyword',
      },
      tags: {
        type: 'keyword',
      },
      contact: {
        type: 'object',
        properties: {
          email: {
            type: 'keyword',
          },
          phone: {
            type: 'keyword',
          },
        },
      },
      address: {
        type: 'object',
        properties: {
          full: {
            type: 'keyword',
          },
          zone: {
            type: 'keyword',
          },
          location: {
            type: 'geo_point',
          },
          ocean: {
            type: 'boolean',
          },
        },
      },
      ranking: {
        type: 'object',
        properties: {
          notation: {
            type: 'float',
          },
          likes: {
            type: 'integer',
          },
        },
      },
      temporaly: {
        type: 'boolean',
      },
      pictures: {
        type: 'object',
        properties: {
          main: {
            type: 'integer',
          },
          logo: {
            type: 'keyword',
          },
          gallery: {
            type: 'object',
            properties: {
              small: {
                type: 'keyword',
              },
              medium: {
                type: 'keyword',
              },
              big: {
                type: 'keyword',
              },
            },
          },
        },
      },
      facebook: {
        type: 'keyword',
      },
      twitter: {
        type: 'keyword',
      },
      CREATED_AT: {
        type: 'date',
      },
      LAST_UPDATE_DATE: {
        type: 'date',
      },
      LAST_UPDATE_USER: {
        type: 'keyword',
      },
    },
  },
};

export default placeMapping;
