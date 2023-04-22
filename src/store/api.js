import { menuApi } from "../config";

export function getFetchListByCategories(params) {
    return fetch(menuApi + params).then((res) => res.json());
}

export function addEmploeeToTheDataList(user) {
    return fetch(menuApi + 'personnel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
}

export function removeEmploeeFromTheDataList(id) {
    return fetch(menuApi + 'personnel/' + id, {
        method: 'DELETE',
    })
}

export function addTableToTheDataList(item) {
    return fetch(menuApi + 'tables', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    })
}

export function removeTableFromTheDataList(id) {
    return fetch(menuApi + 'tables/' + id, {
        method: 'DELETE',
    })
}