var MyStack = function() {
    this.stack = [];
};


MyStack.prototype.push = function(x) {
    this.stack.push(x);
};


MyStack.prototype.pop = function() {
    return this.stack.pop();
};


MyStack.prototype.top = function() {
    let topElement = this.stack[this.stack.length-1];
    return topElement;
};


MyStack.prototype.empty = function() {
    return this.stack.length === 0;
};
