import { addSalesData, getFetchListByCategories, setOrdersListToTable } from "../api";
import { createAction } from "../utils";

export const SET_LOADING = 'SET_LOADING';
export const setLoading = createAction(SET_LOADING);

export const SET_MENU_LIST = 'SET_MENU_LIST';
export const setMenuList = createAction(SET_MENU_LIST);

export const SET_SALES_LIST = 'SET_SALES_LIST';
export const setSalesList = createAction(SET_SALES_LIST);

export const SET_ORDERS_LIST = 'SET_ORDERS_LIST';
export const setOrderList = createAction(SET_ORDERS_LIST);

export const ADD_MENU_ITEM = 'ADD_MENU_ITEM';
export const addMenuItemToOrderList = createAction(ADD_MENU_ITEM);

export const REMOVE_ORDER_ITEM = 'REMOVE_ORDER_ITEM';
export const removeOrderItem = createAction(REMOVE_ORDER_ITEM);

export const OVERWRITE_ORDER_ITEM = 'OVERWRITE_ORDER_ITEM';
export const overwriteOrderListItem = createAction(OVERWRITE_ORDER_ITEM);

export const TIE_THE_ORDER_TO_THE_TABLE = 'TIE_THE_ORDER_TO_THE_TABLE';
export const tieTheOrderToTheTable = createAction(TIE_THE_ORDER_TO_THE_TABLE);

export const CLEAR_ORDER_LIST_FROM_THE_TABLE = 'CLEAR_ORDER_LIST_FROM_THE_TABLE';
export const clearOrderListFromTheTable = createAction(CLEAR_ORDER_LIST_FROM_THE_TABLE);

export const CLEAR_ORDER_LIST = 'CLEAR_ORDER_LIST';
export const clearOrdersList = createAction(CLEAR_ORDER_LIST);

export const CALCULATE_THE_CLIENT = 'CALCULATE_THE_CLIENT';
export const calculateTheExtractor = createAction(CALCULATE_THE_CLIENT);

export const getMenuList = (params) => (dispatch, getState) => {
    dispatch(setLoading(true));
    getFetchListByCategories(params).then((data) => dispatch(setMenuList(data)))
        .finally(() => {
        dispatch(setLoading(false))
    })
}

export const tieOrder = (order) => (dispatch, getState) => {
    const { tables } = getState();
    const table = tables.find((item) => item.name === order.name);
    table.order.push(...order.list);
    dispatch(setLoading(true));
    setOrdersListToTable(table.id, table).then((data) => dispatch(tieTheOrderToTheTable(data)))
        .finally(() => {
            dispatch(setLoading(false))
        })
}

export const clearTableOrders = (id, order) => (dispatch, getState) => {
    const { tables } = getState();
    const rightTable = tables.find((item) => item.id === id);
    let newItem = { ...rightTable, order };
    dispatch(setLoading(true));
    setOrdersListToTable(id, newItem).then(() => dispatch(clearOrderListFromTheTable(id)))
        .finally(() => {
            dispatch(setLoading(false))
        })
}

export const saveSalesDate = (obj) => (dispatch, getState) => {
    dispatch(setLoading(true));
    addSalesData(obj).then((data) => dispatch(calculateTheExtractor(data)))
        .finally(() => {
            dispatch(setLoading(false))
        })
}

export const getSalesList = (params) => (dispatch, getState) => {
    dispatch(setLoading(true));
    getFetchListByCategories(params).then((data) => dispatch(setSalesList(data)))
        .finally(() => {
        dispatch(setLoading(false))
    })
}