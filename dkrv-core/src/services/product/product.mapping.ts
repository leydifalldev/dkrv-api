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
        type: 'nested',
      },
      collection: {
        type: 'keyword',
      },
      recipes: {
        type: 'keyword',
      },
      description: {
        type: 'text',
      },
      spicy: {
        type: 'integer',
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
      notation: {
        type: 'integer',
      },
      likes: {
        type: 'integer',
      },
      placeid: {
        type: 'keyword',
      },
      placename: {
        type: 'keyword',
      },
      placelogo: {
        type: 'keyword',
      },
      placezone: {
        type: 'keyword',
      },
      location: {
        type: 'geo_point',
      },
      pictures: {
        type: 'object',
      },
      menu_available: {
        type: 'boolean',
      },
    },
  },
};

export default productMapping;
