import { createAction } from "../../utils";

export const ADD_MENU_ITEM = 'ADD_MENU_ITEM';
export const addMenuItemToOrderList = createAction(ADD_MENU_ITEM);

export const REMOVE_ORDER_ITEM = 'REMOVE_ORDER_ITEM';
export const removeOrderItem = createAction(REMOVE_ORDER_ITEM);

export const OVERWRITE_ORDER_ITEM = 'OVERWRITE_ORDER_ITEM';
export const overwriteOrderListItem = createAction(OVERWRITE_ORDER_ITEM);

export const TIE_THE_ORDER_TO_THE_TABLE = 'TIE_THE_ORDER_TO_THE_TABLE';
export const tieTheOrderToTheTable = createAction(TIE_THE_ORDER_TO_THE_TABLE);