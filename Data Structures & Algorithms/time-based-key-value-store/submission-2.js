class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        console.log("SET", {key, value, timestamp})
        let currMap = this.keyStore.get(key) ?? new Map();
        currMap.set(timestamp, value);
        this.keyStore.set(key, currMap);
        console.log(this.keyStore)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        console.log("GET", {key, timestamp})
        let currMap = this.keyStore.get(key);
        if (!currMap) return "";

        for (let i = timestamp; i > 0; i--) {
            if (currMap.has(i)) {
                return currMap.get(i)
            }
        }

        return ""
    }
}