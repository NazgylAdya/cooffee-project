import {
  ADD_PRODUCT,
  DECREASE_COUNT,
  INCREASE_COUNT,
  REMOVE_PRODUCT,
} from "../Types";
const magazineReducer = (state, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const productIndex = state.products.findIndex((item) => {
        return item.id !== action.payload.id;
      });
      if (productIndex === -1) {
        return {
          ...state,
          products: [
            {
              name: action.payload.name,
              country: action.payload.country,
              price: action.payload.price,
              id: action.payload.id,
              quantity: 1,
            },
            ...state.products,
          ],
        };
      } else {
        return {
          ...state,
          products: [
            ...state.products.slice(0, productIndex),
            {
              ...state.products[productIndex],
              quantity: state.products[productIndex].quantity + 1,
            },
            ...state.products.slice(productIndex + 1),
          ],
        };
      }

    case REMOVE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter((item) => item.id !== action.payload),
        ],
      };

    case INCREASE_COUNT:
      return { ...state, count: state.count + action.payload };

    case DECREASE_COUNT:
      return { ...state, count: state.count - action.payload };
  }
};
export default magazineReducer;
