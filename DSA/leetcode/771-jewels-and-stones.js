var numJewelsInStones = function(jewels, stones) {
    const jewelMap = new Map();
    for(let jewel of jewels){
        jewelMap.set(jewel, (jewelMap.get(jewel) || 0) +1);
    }
    let output = 0;
    for(let i=0; i<stones.length; i++){
        if(jewelMap.has(stones[i])){
            output++;
        }
    }
    return output;
};