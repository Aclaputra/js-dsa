// Stacks!
// functions: push, pop, peek, length

var letters = []; //stack
var word = "racecar";
var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}
console.log(letters); // stack

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
}
console.log(letters);

console.log(rword);

if (rword === word) {
    console.log(word + " is a palindrome");
} else {
    console.log(word + " is not a palindrome");
}
