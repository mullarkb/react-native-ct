const initialState = {
    order: "eta",
    availableProducts: [],
    selectedProduct: "",
    error: ""
};

export default function mobilityReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_ORDER":
            return {
                ...state,
                order: action.payload,
            };
        case "SET_PRODUCTS":
            return {
                ...state,
                availableProducts: [...action.payload]
            }
        case "SET_SELECTED_PRODUCT":
            return {
                ...state,
                selectedProduct: action.payload,
            }
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
