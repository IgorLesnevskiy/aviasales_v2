import localForage from "localforage";

localForage.config({
    name: "aviasales",
});

export default {
    instance: localForage,
    getItem,
    setItem,
    removeItem,
};

function getItem(key) {
    return localForage.getItem(key);
}

function setItem(key, value) {
    return localForage.setItem(key, value);
}

function removeItem(key) {
    return localForage.removeItem(key);
}
