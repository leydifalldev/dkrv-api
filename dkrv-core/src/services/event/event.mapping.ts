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
      start: {
        type: 'date',
      },
      end: {
        type: 'date',
      },
      categories: {
        type: 'keyword',
      },
      description: {
        type: 'text',
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
      tags: {
        type: 'keyword',
      },
      place: {
        type: 'object',
        properties: {
          id: {
            type: 'keyword',
          },
          name: {
            type: 'keyword',
          },
          logo: {
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
        },
      },
      prices: {
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
      account: {
        type: 'keyword',
      },
      artists: {
        type: 'object',
      },
      hosts: {
        type: 'object',
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

export default eventMapping;
