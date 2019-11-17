import React from "react";

const RootContext = React.createContext({});

export const RootProvider = RootContext.Provider;
export const RootConsumer = RootContext.Consumer;
export default RootContext;
