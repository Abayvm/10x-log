var customSortString = function(order, s) {
    let sMap = new Map();
    let answer = [];
    for(let letter of s){
        sMap.set(letter, (sMap.get(letter)||0)+1);
    }
    for(let i=0; i<order.length; i++){
        if(sMap.has(order[i])){
            let val = sMap.get(order[i])
            for(let k=0; k<val; k++){
                answer.push(order[i]);
                sMap.set(order[i], (sMap.get(order[i])||0)-1);
            }
        }
    }
    for(let i=0; i<s.length; i++){
        if(sMap.get(s[i])>0){
            answer.push(s[i]);
            sMap.set(s[i], (sMap.get(s[i])||0)-1);
        }
    }
    return answer.join('');
};