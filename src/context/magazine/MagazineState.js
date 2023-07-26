import { useReducer, useContext, React } from "react";
import magazineReducer from "./MagazineReducer";
import magazineContext from "./MagazineContext";

const MagazineState = ({ children }) => {
  const initialState = {
    products: [
      {
        name: "Coffee Brazil1",
        price: 2000,
        country: "Brazil",
        id: 1,
        quantity: 1,
      },
      {
        name: "Coffee Brazil2",
        price: 4000,
        country: "Brazil",
        id: 2,
        quantity: 1,
      },
      {
        name: "Coffee Brazil3",
        price: 3000,
        country: "Brazil",
        id: 3,
        quantity: 1,
      },
    ],
    count: 1000000,
  };
  const [magazine_state, magazine_dispatch] = useReducer(
    magazineReducer,
    initialState
  );

  return (
    <magazineContext.Provider value={[magazine_state, magazine_dispatch]}>
      {children}
    </magazineContext.Provider>
  );
};
export default MagazineState;
