"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            category: {
                type: 'keyword',
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
                properties: {
                    type: 'keyword',
                },
            },
            menu_available: {
                type: 'boolean',
            },
        },
    },
};
exports.default = productMapping;
//# sourceMappingURL=product.mapping.js.map