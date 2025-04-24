// reducer/stationaryReducer.js
export const stationaryReducer = (state, action) => {
    switch (action.type) {
      case "SET_ITEMS":
        return { ...state, items: action.payload };
      case "ADD_ITEM":
        return { ...state, items: [action.payload, ...state.items] };
      case "UPDATE_ITEM":
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        };
      case "DELETE_ITEM":
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload),
        };
      default:
        return state;
    }
  };
  