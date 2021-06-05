// Creates a stack
var Stack = function(value) {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns the value at the end ofthe stack
    this.pop = function() {
        if(this.count === 0) {
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function() {
        return this.count;
    }

    // Returns the value at the end of the stacks
    this.peek = function(value) {
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("Acla Putra");
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.peek());