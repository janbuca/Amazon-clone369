// import React, { createContext, useContext, useReducer } from 'react';

// // Prepares the dataLayer
// export const StateContext = createContext();

// // Wrap our app and provide the Data layer
// export const StateProvider = ({ reducer, initialState, children }) => (
//     <StateContext.Provider value={useReducer(reducer, initialState)}>
//         {children}
//     </StateContext.Provider>
// );

// //Push and Pull Information from the Data layer
// export const useStateValue = () => useContext(StateContext);





import React, { createContext, useContext, useReducer } from 'react';
export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);

