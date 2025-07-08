var frequencySort = function(s) {
    const frequencyMap = new Map();
    for(let letter of s){
        frequencyMap.set(letter, (frequencyMap.get(letter)||0)+1);
    }
    const bucket = Array(s.length + 1).fill(null).map(() => []);
    for(let [letter, frequency] of  frequencyMap.entries()){
        bucket[frequency].push(letter);
    }
    const sortedCharacters = [];
    for(let i=bucket.length-1; i>=0; i--){
        for (let char of bucket[i]) {
            sortedCharacters.push(char.repeat(i));
        }
    }
    return sortedCharacters.join('');
};