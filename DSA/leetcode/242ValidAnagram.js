var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let sFreq = new Map();
    for(let letter of s){
        sFreq.set(letter, (sFreq.get(letter)||0)+1);
    }
    for(let letter of t){
        if(!sFreq.has(letter) || sFreq.get(letter)==0){
            return false
        }else{
            sFreq.set(letter, sFreq.get(letter)-1);
        }
    }
    return true;
};