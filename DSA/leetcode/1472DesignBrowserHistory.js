class PageNode {
    constructor(url) {
        this.page = url;
        this.prevpage = null;
        this.nextpage = null;
    }
}

var BrowserHistory = function(homepage) {
    this.page = new PageNode(homepage);
};

BrowserHistory.prototype.visit = function(url) {
    const newPage = new PageNode(url);
    this.page.nextpage = newPage;
    newPage.prevpage = this.page;
    this.page = newPage;
};

BrowserHistory.prototype.back = function(steps) {
    let currentPage = this.page;
    let countDown = 0;
    while(countDown < steps){
        if(!currentPage.prevpage){
           break;
        }
        countDown++;
        currentPage = currentPage.prevpage;
    }
    this.page = currentPage;
    return this.page.page;
};

BrowserHistory.prototype.forward = function(steps) {
    let currentPage = this.page;
    let countDown = 0;
    while(countDown < steps){
        if(currentPage.nextpage == null){
            break;
        }
        countDown++;
        currentPage = currentPage.nextpage;
    }
    this.page = currentPage;
    return this.page.page;
};

