import {api} from "../../utils/api"
export const getAvailableProducts = () => {
    return async (dispatch) => {
        try {
            const products = await api.get("https://raw.githubusercontent.com/cartrawler/mobility-react-native-assessment/master/assets/availability.json").catch(error => console.log(error))
            dispatch({type: "SET_PRODUCTS", payload: products.data})
        }catch (e) {
            console.log(e)
            dispatch({type: "SET_WARNING", payload: e})
        }
    }
}
export const setSelectedProduct = (availabilityId) => {
    return {
        type: "SET_SELECTED_PRODUCT",
        payload: availabilityId
    }
}
export const setOrder = (order) => {
    return {
        type: "SET_ORDER",
        payload: order
    }
}