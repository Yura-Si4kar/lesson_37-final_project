import { initialValue } from "../../config";
import { ADD_MENU_ITEM, OVERWRITE_ORDER_ITEM, REMOVE_ORDER_ITEM, TIE_THE_ORDER_TO_THE_TABLE } from "../actions/actions";

export default function reducer(state = initialValue, { type, payload }) {
    switch (type) {
        case ADD_MENU_ITEM:
            return addMenuItem(state, payload);
        case REMOVE_ORDER_ITEM:
            return removeOrderItem(state, payload);
        case OVERWRITE_ORDER_ITEM:
            return overwriteItem(state, payload);
        case TIE_THE_ORDER_TO_THE_TABLE:
            return addOrderToTheTable(state, payload);
        default:
            return state;
    }
}

function addMenuItem(state, item) {
    return {
        ...state, 
            orders: [...state.orders, {...item, id: Date.now()}]
    }
}

function removeOrderItem(state, id) {
    return {
        ...state,
            orders: state.orders.filter((item) => item.id !== id)
    }
}

function overwriteItem(state, item) {
    return {
        ...state,
        orders: state.orders.map((element) => element.id !== item.id ? element : item)
    }
}

function addOrderToTheTable(state, item) {
    return {
        ...state,
        tables: state.tables.map((table) => table.name === item.name ? {...table, order: [...table.order, item]} : table)
    }
}