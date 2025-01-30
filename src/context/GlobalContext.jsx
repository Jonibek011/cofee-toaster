import { createContext } from "react";
import { useReducer } from "react";

export const MainContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "CARD1":
      return { ...state, item1: payload };
    case "CARD2":
      return { ...state, item2: payload };
    case "CARD3":
      return { ...state, item3: payload };
    case "CARD4":
      return { ...state, item4: payload };
    case "CARD5":
      return { ...state, item5: payload };
    default:
      return state;
  }
};

export function MainContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    item1: { title: "----" },
    item2: { title: "----" },
    item3: { title: "----" },
    item4: { title: "----" },
    item5: { title: "----" },
  });
  return (
    <MainContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
}
