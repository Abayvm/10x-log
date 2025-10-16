var middleNode = function(head) {
    let fastPtr = head;
    let slowPtr = head;
    while(fastPtr && fastPtr.next){
        fastPtr = fastPtr.next.next;
        slowPtr = slowPtr.next;
    }
    return slowPtr;
};