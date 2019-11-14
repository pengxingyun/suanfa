class Queue {
    constructor() {
        let items = [];
        this.enqueue = (item) => {
            items.push(item);
        }
        this.dequeue = () => {
            return items.shift();
        }
        this.head = () => {
            return items[0];
        }
        this.front = this.head;
        this.size = () => {
            return items.length;
        }
        this.clear = () => {
            items.length = 0;
        }
        this.isEmpty = () => {
            return this.items.length === 0;
        }

    }
}