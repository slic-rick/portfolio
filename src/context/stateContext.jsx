import { useState,createContext,useContext } from "react";

const StateContext = createContext();


export const ContextProvider = ({children}) => {
    const [showAnimate,setShowAnimate] = useState(true);

    return(
        <StateContext.Provider value={{showAnimate,setShowAnimate}}>
            {children}
        </StateContext.Provider>
    );

}

export const useStateContext = () => useContext(StateContext)