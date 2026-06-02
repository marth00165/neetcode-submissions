class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}



class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map();

        // Initialize dummy head and tail
        this.head = new Node(null, null);
        this.tail = new Node(null, null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /*
     - need add 
        - make it the next node after head 
        - Head - new node - prev Next
     - need remove
        - Prev Node - "remove Node" - Prev Next
     */

    add(node) {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        /*
        1. check cache or return -1
        2. get the node from cache
        3. remove node
        4. add it back LRU
         */

        if (!this.cache.has(key)) {
            return -1
        }

        let node = this.cache.get(key);

        this.remove(node);
        this.add(node);

        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        /*
        1. check if the cache has the node and remove it
        2. recreate the node as a new node
        3. add it to the LRU
        4. add it to the cache
        5. check to see if the capacity has been exceded
        6. if overCapacity remove last Node aka  tail.prev
        
         */


        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }

        let node = new Node(key, value);
        this.add(node)
        this.cache.set(key, node);

        
        if (this.cache.size > this.capacity) {
            let lastNode = this.tail.prev;

            this.remove(lastNode);
            this.cache.delete(lastNode.key)
        }
    }
}
