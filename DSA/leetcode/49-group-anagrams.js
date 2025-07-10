var groupAnagrams = function(strs) {
    const frequencyMap = new Map();
    for(let i=0; i<strs.length; i++){
        let sortedWord = strs[i].split('').sort().join('');
        if(!frequencyMap.has(sortedWord)){
            frequencyMap.set(sortedWord, []);
        }
        frequencyMap.get(sortedWord).push(strs[i]);
    }
    return Array.from(frequencyMap.values());
};