var checkInclusion = function(s1, s2) {
    let freqS1 = new Map();
    let freqCopy = new Map();
    let l = 0;
    let r = s1.length;
    for(let letter of s1){
        freqS1.set(letter, (freqS1.get(letter)||0)+1);
    }
    for(let i=0; i<s1.length; i++){
        freqCopy.set(s2[i], (freqCopy.get(s2[i]) || 0)+1);
    }
    while(r<s2.length){
        let isEqual = true;
        for(let [key, value] of freqS1){
            if(freqCopy.get(key) !== value){
                isEqual = false;
                break;
            }
        }
        if(isEqual === true) return true;
        freqCopy.set(s2[l], freqCopy.get(s2[l]) - 1);
        if (freqCopy.get(s2[l]) === 0) freqCopy.delete(s2[l]);
        if(r < s2.length){
            freqCopy.set(s2[r], (freqCopy.get(s2[r]) || 0) + 1);
        }
        l++;
        r++;
    }
    let isEqual = true;
    for(let [key, value] of freqS1){
        if(freqCopy.get(key) !== value){
            isEqual = false;
            break;
        }
    }
    if(isEqual === true) return true;
    return false;
};