var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while(curr!=null){
        let tempPtr = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tempPtr;
    }
    return prev;
};