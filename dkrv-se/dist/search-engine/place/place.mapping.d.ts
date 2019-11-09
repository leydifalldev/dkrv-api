declare const placeMapping: {
    index: string;
    type: string;
    include_type_name: boolean;
    body: {
        properties: {
            id: {
                type: string;
            };
            name: {
                type: string;
            };
            phone: {
                type: string;
            };
            email: {
                type: string;
            };
            description: {
                type: string;
            };
            type: {
                type: string;
            };
            category: {
                type: string;
            };
            gastronomies: {
                type: string;
            };
            notation: {
                type: string;
            };
            travel_time: {
                type: string;
            };
            ocean_near: {
                type: string;
            };
            likes: {
                type: string;
            };
            address: {
                type: string;
            };
            zone: {
                type: string;
            };
            cpc: {
                type: string;
            };
            location: {
                type: string;
            };
            temporaly_place: {
                type: string;
            };
            logo: {
                type: string;
            };
            pictures: {
                properties: {
                    src: {
                        type: string;
                    };
                };
            };
        };
    };
};
export default placeMapping;
