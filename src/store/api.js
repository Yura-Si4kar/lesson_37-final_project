import { menuApi } from "../config";

export function getMenuListByCategories() {
    return fetch(menuApi).then((res) => res.json());
}