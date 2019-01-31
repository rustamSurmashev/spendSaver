export class ProductLocalStorage {
    constructor(){
        const savedItems = JSON.parse(localStorage.getItem('products'));
        if (savedItems !==null) {
            this.items = savedItems;
        } else {
            this.items = [];
        }
    }
    add(item) {
        this.items.push(item);
        this.save();
    }
    remove(item) {
        const index = this.items.indexOf(item);
        if (index !== -1){
            this.items.splice(index, 1);
            this.save();
        }
    }
    up(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            [this.items[index], this.items[index - 1]] =
                [this.items[index - 1], this.items[index]];
            this.save();
        }
    }
    down(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            [this.items[index], this.items[index + 1]] =
                [this.items[index + 1], this.items[index]];
            this.save();
        }
    }
    save() {
        localStorage.setItem('products', JSON.stringify(this.items));
    }
    deleteAll() {
        localStorage.clear();
    }
}
export class TaskInMemoryStorage {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    remove(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }
    up(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            [this.items[index], this.items[index - 1]] =
                [this.items[index - 1], this.items[index]];
        }
    }
    down(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            [this.items[index], this.items[index + 1]] =
                [this.items[index + 1], this.items[index]];
        }
    }
}