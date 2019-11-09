"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productMapping = {
    index: 'food',
    type: 'product',
    include_type_name: true,
    body: {
        properties: {
            id: {
                type: 'text',
            },
            name: {
                type: 'text',
            },
            category: {
                type: 'text',
            },
            gastronomies: {
                type: 'nested',
            },
            recipes: {
                type: 'nested',
            },
            description: {
                type: 'text',
            },
            spicy: {
                type: 'integer',
            },
            price: {
                type: 'integer',
            },
            discount: {
                type: 'float',
            },
            quantity: {
                type: 'float',
            },
            size: {
                type: 'text',
            },
            notation: {
                type: 'integer',
            },
            likes: {
                type: 'integer',
            },
            placeid: {
                type: 'text',
            },
            placename: {
                type: 'text',
            },
            placelogo: {
                type: 'text',
            },
            placezone: {
                type: 'text',
            },
            location: {
                type: 'geo_point',
            },
            picture: {
                type: 'text',
            },
            menu_available: {
                type: 'boolean',
            },
        },
    },
};
exports.default = productMapping;
//# sourceMappingURL=product.mapping.js.map