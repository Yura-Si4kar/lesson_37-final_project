import { initialValue } from "../../config";
import {
    ADD_EMPLOYEE,
    ADD_MENU_ITEM,
    ADD_TABLE,
    CALCULATE_THE_CLIENT,
    CLEAR_ORDER_LIST,
    DELETE_EMPLOYEE,
    DELETE_TABLE,
    OVERWRITE_ORDER_ITEM,
    REMOVE_ORDER_ITEM,
    TIE_THE_ORDER_TO_THE_TABLE
} from "../actions/actions";

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
        case CLEAR_ORDER_LIST:
            return clearOrders(state, payload);
        case CALCULATE_THE_CLIENT:
            return calculate(state, payload);
        case ADD_EMPLOYEE:
            return addWorker(state, payload);
        case DELETE_EMPLOYEE:
            return removeWorker(state, payload);
        case ADD_TABLE:
            return addTable(state, payload);
        case DELETE_TABLE:
            return removeTable(state, payload);
        default:
            return state;
    }
}

function addMenuItem(state, item) {
    return {
        ...state, 
            orders: [...state.orders, {...item, id: Date.now()}]        
    };
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
            tables: state.tables.map((table) => table.name === item.name ? { ...table, order: [...table.order, item] } : table),
    }
}

function clearOrders(state) {
    return {
        ...state,
            orders: [],
    }
}

function calculate(state, payload) {
    return {
        ...state,
            statistics: [...state.statistics, {...payload, id: Date.now()}]
    }
}

function addWorker(state, payload) {
    return {
        ...state,
            personnel: [...state.personnel, {...payload, id: Date.now()}]
    }
}

function removeWorker(state, id) {
    return {
        ...state,
        personnel: state.personnel.filter((worker) => worker.id !== id)
    }
}

function addTable(state, table) {
    return {
        ...state,
            tables: [...state.tables, {...table, id: Date.now(), order: []}]
    }
}

function removeTable(state, id) {
    return {
        ...state,
            tables: state.tables.filter((table) => table.id !== id)
    }
}