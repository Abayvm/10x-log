var evalRPN = function(tokens) {
    let stack = [];
    const opMap = new Map([
        ["+", (a, b) => a + b],
        ["-", (a, b) => a - b],
        ["*", (a, b) => a * b],
        ["/", (a, b) => Math.trunc(a / b)]
    ]);


    for(let i=0; i<tokens.length; i++){
        if(!opMap.has(tokens[i])){
            let num = Number(tokens[i]);
            stack.push(num);
        }else{
            let num1 = stack.pop();
            let num2 = stack.pop();
            let operator = tokens[i];
            let result = opMap.get(operator)(num2, num1);
            stack.push(result);
        }
    }
    return stack[0];
};

//more optimal solution without using Map

var evalRPN = function(tokens) {
    let stack = [];

    for(let i=0; i<tokens.length; i++){
        if(tokens[i]=="+"){
            let num1 = stack.pop();
            let num2 = stack.pop();
            let res = num1+num2;
            stack.push(res);
        }else if(tokens[i]=="*"){
            let num1 = stack.pop();
            let num2 = stack.pop();
            let res = num1*num2;
            stack.push(res);
        }else if(tokens[i]=="-"){
            let num1 = stack.pop();
            let num2 = stack.pop();
            let res = num2-num1;
            stack.push(res);
        }else if(tokens[i]=="/"){
            let num1 = stack.pop();
            let num2 = stack.pop();
            let res = Math.trunc(num2 / num1);
            stack.push(res);
        }else{
            let num = Number(tokens[i]);
            stack.push(num);
        }
    }
    return stack[0];
};