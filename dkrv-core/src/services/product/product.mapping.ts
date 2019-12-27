const productMapping = {
  index: 'product',
  type: 'product',
  include_type_name: true,
  body: {
    properties: {
      id: {
        type: 'keyword',
      },
      name: {
        type: 'keyword',
      },
      categories: {
        type: 'keyword',
      },
      gastronomies: {
        type: 'keyword',
      },
      collection: {
        type: 'keyword',
      },
      tags: {
        type: 'keyword',
      },
      recipes: {
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
      spicy: {
        type: 'keyword',
      },
      price: {
        type: 'float',
      },
      discount: {
        type: 'float',
      },
      quantity: {
        type: 'float',
      },
      size: {
        type: 'keyword',
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
      hasmenu: {
        type: 'boolean',
      },
      account: {
        type: 'keyword',
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

export default productMapping;
