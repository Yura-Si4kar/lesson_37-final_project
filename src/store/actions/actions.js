import { createAction } from "../utils";

export const ADD_MENU_ITEM = 'ADD_MENU_ITEM';
export const addMenuItemToOrderList = createAction(ADD_MENU_ITEM);

export const REMOVE_ORDER_ITEM = 'REMOVE_ORDER_ITEM';
export const removeOrderItem = createAction(REMOVE_ORDER_ITEM);

export const OVERWRITE_ORDER_ITEM = 'OVERWRITE_ORDER_ITEM';
export const overwriteOrderListItem = createAction(OVERWRITE_ORDER_ITEM);

export const TIE_THE_ORDER_TO_THE_TABLE = 'TIE_THE_ORDER_TO_THE_TABLE';
export const tieTheOrderToTheTable = createAction(TIE_THE_ORDER_TO_THE_TABLE);

export const CLEAR_ORDER_LIST = 'CLEAR_ORDER_LIST';
export const clearOrdersList = createAction(CLEAR_ORDER_LIST);

export const CALCULATE_THE_CLIENT = 'CALCULATE_THE_CLIENT';
export const calculateTheExtractor = createAction(CALCULATE_THE_CLIENT);

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const addEmployee = createAction(ADD_EMPLOYEE);

export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const deleteEmployee = createAction(DELETE_EMPLOYEE);

export const ADD_TABLE = 'ADD_TABLE';
export const addTable = createAction(ADD_TABLE);

export const DELETE_TABLE = 'DELETE_TABLE';
export const deleteTable = createAction(DELETE_TABLE);