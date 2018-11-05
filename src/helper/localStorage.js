export function loadState() {
    try {
        const serialized = localStorage.getItem('state');
        if (serialized === null) {
            return undefined;
        }
        // if (key) {
        //     return JSON.parse(serialized)[key];
        // }
        return JSON.parse(serialized);
    } catch (e) {
        return undefined;
    }
}

export function saveState(state) {
    try {
        const serialized = JSON.stringify(state);
        localStorage.setItem('state', serialized);
    } catch (e) {

    }
}