var runningSum = function(nums) {
    let l = 0;
    let result = [];
    result.push(nums[l])
    for(let r=1; r<nums.length; r++){
        result.push(result[l]+nums[r]);
        l++;
    }
    return result;
};