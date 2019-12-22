const profileMapping = {
  index: 'profile',
  type: 'profile',
  include_type_name: true,
  body: {
    properties: {
      id: {
        type: 'keyword',
      },
      fullname: {
        type: 'keyword',
      },
      firstname: {
        type: 'date',
      },
      lastname: {
        type: 'date',
      },
      gender: {
        type: 'keyword',
      },
      birthdate: {
        type: 'keyword',
      },
      address: {
        type: 'keyword',
      },
      zone: {
        type: 'keyword',
      },
      email: {
        type: 'keyword',
      },
      roles: {
        type: 'nested',
      },
      permissions: {
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

export default profileMapping;
