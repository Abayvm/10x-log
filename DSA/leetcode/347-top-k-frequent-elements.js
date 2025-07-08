var topKFrequent = function(nums, k) {
    let frequencyMap = new Map();
    for(let num of nums){
        frequencyMap.set(num, (frequencyMap.get(num)||0)+1);
    }
    const bucket = Array(nums.length+1).fill(null).map(()=>[]);
    for(let [num, frequency] of frequencyMap.entries()){
        bucket[frequency].push(num);
    }
    let result = [];
    for(let i=bucket.length-1; i>=0 && result.length<k; i--){
        for(let num of bucket[i]){
            result.push(num);
            if(result.length === k) break;
        }
    }
    return result;
};