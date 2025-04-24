// context/StationaryContext.jsx
import { createContext, useContext, useReducer } from "react";
import { stationaryReducer } from "../reducer/stationaryReducer";

const StationaryContext = createContext();

export const StationaryProvider = ({ children }) => {
  const initialState = { items: [] };
  const [state, dispatch] = useReducer(stationaryReducer, initialState);

  return (
    <StationaryContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StationaryContext.Provider>
  );
};

export const useStationary = () => useContext(StationaryContext);
