class Stack {
    constructor() {
        this.item = [];
        this.length = 0;
        
    }
    push(item) {
        this.item[this.length] = item
        this.length += 1
        return this.length
    }

    pop(){
        if(this.length ==0) return undefined;
        const item = this.item[this.length -1]
        delete this.item[this.length -1]
        this.length -= 1
        return item
    }

}
const stack = new Stack();
stack.push(10)
stack.push(500)

console.log(stack.length)
console.log(stack.pop())
console.log(stack.length)