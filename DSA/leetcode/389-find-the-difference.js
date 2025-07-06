var findTheDifference = function(s, t) {
    const frequencyMap = new Map();
    for(let item of s){
        frequencyMap.set(item, (frequencyMap.get(item) || 0)+ 1);
    }
    for(let item of t){
        if(frequencyMap.has(item) && frequencyMap.get(item)>0){
            frequencyMap.set(item, frequencyMap.get(item)-1);
        }else{
            return item;
        }
    }
};