var removeNthFromEnd = function(head, n) {
    if (!head || !head.next) return null;

    let slwPtr = head;
    let fastPtr = head;

    for (let i = 0; i < n; i++) {
        fastPtr = fastPtr.next;
    }
    if (!fastPtr) {
        return head.next;
    }
    while (fastPtr.next) {
        slwPtr = slwPtr.next;
        fastPtr = fastPtr.next;
    }
    slwPtr.next = slwPtr.next.next;
    return head;
};
