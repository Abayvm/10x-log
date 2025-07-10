var maxProfit = function(prices) {
    let buy = 0;
    let sell = 0;
    let profit = sell - buy;
    for(let i=0; i<prices.length; i++){
        if(prices[buy]>prices[sell]){
            buy=sell;
        }
        let temp = prices[sell] - prices[buy]; 
        sell++;
        profit = Math.max(profit, temp);
    }
    return profit;
};