var longestSubarray = function(nums) {
    let l=0;
    let r=0;
    let size = 0;
    let zeroCounter = 0;
    while(r<nums.length){
        if(nums[r]===0){
            zeroCounter++;
        }
        r++
        while(zeroCounter>1){
            if(nums[l]===0){
                zeroCounter--;
            }
            l++;
        }
        size = Math.max(size, r-l-1);
    }
    return size;
};
