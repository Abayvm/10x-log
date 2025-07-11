var containsDuplicate = function(nums) {
    const numFrequency = new Set();
    for(let num of nums){
        if(numFrequency.has(num)){
            return true;
        }
        numFrequency.add(num);
    }
    return false;
};