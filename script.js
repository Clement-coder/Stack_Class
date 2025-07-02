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


    print(){
        let output = "";
        for(let i = this.length-1; i >= 0; i--){
            let seperator = ''
            if(i > 0 ) {
                    seperator = ' -> '
            }
            output += `${this.item[i]}${seperator}`
        }
        return output;
    }

    peek() {
        if(this.length == 0){
            return null
        }
            return this.item[this.length-1]

    }

    size() {
        return this .length;
    }
      isEmpty() {
        return this .length == 0;
    }

}
const stack = new Stack();
stack.push(10)
stack.push(500)
stack.push(20)
stack.push(40)

console.log(`* ${stack.isEmpty()}`)
console.log(`* ${stack.length}`)
console.log(`* ${stack.pop()}`)
console.log(`* ${stack.pop()}`)
console.log(`* ${stack.pop()}`)
console.log(`* ${stack.pop()}`)
console.log(`* ${stack.length}`)
console.log(`* ${stack.print()}`)
console.log(`* ${stack.peek()}`)
console.log(`* ${stack.item}`)
console.log(`* ${stack.size()}`)
console.log(`* ${stack.isEmpty()}`)