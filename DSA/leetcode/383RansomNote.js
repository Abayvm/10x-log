var canConstruct = function(ransomNote, magazine) {
    let magazineWordFreq = new Map();
    for(let letter of magazine){
        magazineWordFreq.set(letter, (magazineWordFreq.get(letter)||0)+1);
    }
    for(let letter of ransomNote){
        if(!magazineWordFreq.get(letter)){
            return false
        }
        magazineWordFreq.set(letter, (magazineWordFreq.get(letter)||0)-1);
    }
    return true;
};