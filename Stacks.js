/** 
 * Creates a stack:
 * - Push = menambahkan nilai ke akhir dari stack.
 * - Pop = menghapus dan mengembalikan nilai ke akhir dari stack.
 * - Peek = mengembalikan nilai pada akhir stacks.
 * - Size = melihat ukuran dari nilai Stack.
 * */ 
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

    // Returns the value at the end of the stacks
    this.peek = function(value) {
        return this.storage[this.count-1];
    }

    this.size = function() {
        return this.count;
    }
}

var myStack = new Stack();

myStack.push('yolo');
myStack.push(69.99);
console.log(myStack.size());
console.log(myStack.peek());
// console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("Acla Putra");
console.log(myStack.storage);
// console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.storage);