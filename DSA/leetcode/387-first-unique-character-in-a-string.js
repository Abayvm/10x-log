var firstUniqChar = function(s) {
    const frequencyMap = new Map();
    for(let letter of s){
        frequencyMap.set(letter, (frequencyMap.get(letter)||0)+1);
    }
    for(let i=0; i<s.length; i++){
        if(frequencyMap.get(s[i])===1){
            return i;
        }
    }
    return -1;
};