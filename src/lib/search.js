
import { writable } from "svelte/store";

export const createSearchStore = (data)=> {
    const { subscribe, set, update} = writable({
        data: data,
        filtered: data,
        search: ''
    })

    return {
        set,
        subscribe,
        update
    }
}

export const searchHandler = (store) => {
const searchTerm = store.search.toLowerCase() || "";
 store.filtered = store.data.filter((item) => {
    return item.searchTerms.toLowerCase().includes(searchTerm);
})
}