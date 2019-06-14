"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Node_1 = require("./Node");
class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const node = new Node_1.default(val);
        if (!this.head) {
            this.head = this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            if (this.length === 3) {
                this.tail.in = "in";
            }
            else if (this.length < 3) {
                this.tail.in = "";
            }
        }
        this.length += 1;
        return this;
    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let nextOne = current;
        while (current.next) {
            nextOne = current;
            current = current.next;
        }
        this.tail = nextOne;
        this.tail.next = null;
        this.length -= 1;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        const current = this.head;
        this.head = current.next;
        this.head.prev = null;
        this.length -= 1;
        return this;
    }
    *reverse() {
        let current = this.tail;
        while (current !== null) {
            yield current.val;
            current = current.prev;
        }
    }
}
exports.default = List;
//# sourceMappingURL=List.js.map