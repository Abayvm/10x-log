var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let res = 10000000000000000;
    let l = 0;
    let r = 0;
    while(r<nums.length){
        sum = sum+nums[r];
        while(sum>=target){
            sum = sum-nums[l];
            l++;
            res = Math.min(res, r-l+2);
        }
        r++;
    }
    return res === 10000000000000000 ? 0 : res;
};