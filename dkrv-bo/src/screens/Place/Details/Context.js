import React from "react";

const PlaceContext = React.createContext({});

export const PlaceProvider = PlaceContext.Provider;
export const PlaceConsumer = PlaceContext.Consumer;
export default PlaceContext;
