var findLucky = function(arr) {
    const frequencyMap = new Map();
    for(let num of arr){
        if(frequencyMap.has(num)){
            frequencyMap.set(num, frequencyMap.get(num)+1);
        }else{
            frequencyMap.set(num, 1);
        }
    }
    const luckyNums = []
    for(let [key, value] of frequencyMap.entries()){
        if(key === value){
            luckyNums.push(value);
        }
    }
    if(luckyNums.length === 0){
        return -1
    }
    for(let i=0; i<luckyNums.length-1; i++){
        for(let j=i+1; j<luckyNums.length; j++){
            if(luckyNums[i]>luckyNums[j]){
                [luckyNums[i], luckyNums[j]] = [luckyNums[j], luckyNums[i]]
            }
        }
    }
    return luckyNums[luckyNums.length-1];
};

//not an optimal solution coded up on my intuition