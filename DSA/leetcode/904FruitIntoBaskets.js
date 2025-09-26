var totalFruit = function(fruits) {
    let l = 0;
    let r = 0;
    let fruitCounter = new Map();
    let result = 0;
    while(r<fruits.length){
        fruitCounter.set(fruits[r], (fruitCounter.get(fruits[r])||0)+1);
        if(fruitCounter.size>2){
            fruitCounter.set(fruits[l], (fruitCounter.get(fruits[l])||0)-1);
            if(fruitCounter.get(fruits[l])===0){
                fruitCounter.delete(fruits[l]);
            }
            l++
        }
        r++
        result = Math.max(result, r-l);
    }
    return result;
};