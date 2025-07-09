var lengthOfLongestSubstring = function(s) {
    const window = new Set();
    let l = 0;
    let r = 0;
    let length = 0;
    let result = 0;
    while(r<s.length){
        if(!window.has(s[r])){
            window.add(s[r]);
            result = Math.max(result, r-l+1);
            r++;
        }else{
            window.delete(s[l]);
            l++;
        }
    }
    return result;
};