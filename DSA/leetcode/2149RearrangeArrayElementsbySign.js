var rearrangeArray = function(nums) {
    let ans = new Array(nums.length);
    let p=0;
    let n=1;
    for(let num of nums){
        if(num<0){
            ans[n] = num;
            n+=2;
        }else{
            ans[p] = num;
            p+=2;
        }
    }
    return ans;
};