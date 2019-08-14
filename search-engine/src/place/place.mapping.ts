const placeMapping = {
    index: 'food',
    type: 'product',
    include_type_name: true,
    body: {
      properties: {
        name: {
        type: 'text',
        },
        place_logo: {
          type: 'text',
        },
        price: {
          type: 'long',
        },
        phone: {
          type: 'text',
        },
        description: {
          type: 'text',
        },
        cooking_time: {
          type: 'integer',
        },
        location: {
          type: 'geo_point',
        },
        address: {
          type: 'text',
        },
        likes: {
          type: 'integer',
        },
        recipes: {
          type: 'nested',
        },
        place_name: {
          type: 'text',
        },
        place_ref: {
          type: 'text',
        },
        menus_link: {
          type: 'nested',
        },
        notation: {
          type: 'integer',
        },
        discount: {
          type: 'float',
        },
        size: {
          type: 'text',
        },
        quantity: {
          type: 'text',
        },
        spicy_level: {
          type: 'text',
        },
        category: {
          type: 'text',
        },
        pictures: {
          type: 'nested',
        },
        main_picture: {
          type: 'integer',
        },
        schedule: {
          type: 'nested',
        },
      },
    },
  };

export default placeMapping;
