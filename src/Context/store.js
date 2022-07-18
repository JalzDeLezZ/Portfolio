import { createContext, useReducer } from "react";
import Reducer from "./reducer";


const INITIAL_STATE = {
    s_element: {id: 4,  image: "https://i.ytimg.com/vi/HDigj8phT0o/maxresdefault.jpg",  title: "Crypto fffff",  github: "https://github.com",  demo: "https://dribble.com/Aliens_pixels"},
    s_modal: false,
}

export const AllContext = createContext(INITIAL_STATE);

export const AllProvider = ({children}) => {
  const [state, xDispatch] = useReducer(Reducer, INITIAL_STATE);
    return(
        <AllContext.Provider
            value={{
                state,
                xDispatch
            }}
        >
            {children}
        </AllContext.Provider>
    )
}
// id: 4,  image: "https://i.ytimg.com/vi/HDigj8phT0o/maxresdefault.jpg",  title: "Crypto fffff",  github: "https://github.com",  demo: "https://dribble.com/Aliens_pixels",