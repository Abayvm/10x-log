var isPalindrome = function(s) {
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let l=0;
    let r= cleanedString.length-1;
    while(r>l){
        if(cleanedString[l]!==cleanedString[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
};