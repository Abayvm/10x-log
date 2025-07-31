//75. Sort Colors
var sortColors = function(nums) {
    let l = 0;
    let r = nums.length-1;
    let i =0;
    while(i<=r){
        if(nums[i]===0){
            let tempStorage = nums[l];
            nums[l] = nums[i];
            nums[i] = tempStorage;
            l++;
            i++;
        }else if(nums[i]===1){
            i++;
        }else{
            let tempStorage = nums[r];
            nums[r] = nums[i];
            nums[i] = tempStorage;
            r--
        }
    }
};