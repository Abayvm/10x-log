var singleNumber = function(nums) {
    const frequencyMap = new Map();
    for(let num of nums){
        frequencyMap.set(num, (frequencyMap.get(num) || 0) +1);
    }
    for(let [key, value] of frequencyMap.entries()){
        if(value == 1){
            return key;
        }
    }
};