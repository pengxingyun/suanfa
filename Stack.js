class Stack {
    constructor() {
        let items = [];
        this.size = () => {
            return items.length;
        }
        this.pop = () => {
            return items.pop();
        }
        this.top = () => {
            return items[items.length - 1];
        }
        this.push = (item) => {
            return items.push(item);
        }
        this.isEmpty = () => {
            return items.length === 0;
        }
        this.clear = () => {
            items.length = 0;
        }
    }
}