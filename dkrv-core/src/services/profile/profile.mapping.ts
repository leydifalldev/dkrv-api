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
        type: 'keyword',
      },
      lastname: {
        type: 'keyword',
      },
      artistname: {
        type: 'keyword',
      },
      gender: {
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
      description: {
        type: 'text',
      },
      birthdate: {
        type: 'date',
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
      tags: {
        type: 'keyword',
      },
      roles: {
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

export default profileMapping;
