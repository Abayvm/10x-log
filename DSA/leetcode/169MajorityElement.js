var majorityElement = function(nums) {
    let freqMap = new Map();
    for(let i=0; i<nums.length; i++){
        let count = freqMap.get(nums[i]) || 0;
        freqMap.set(nums[i], count + 1);
    }
    for(let [key, val] of freqMap.entries()){
        if(val>nums.length/2){
            return key;
        }
    }
};