class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

var MyLinkedList = function() {
    this.head = null; 
    this.size = 0;
};


MyLinkedList.prototype.get = function(index) {
    if(index>=this.size){
        return -1;
    }
    let i=0;
    let currNode = this.head
    while(i<=index){
        if(i=== index){
            return currNode.val;
        }
        currNode = currNode.next;
        i++;
    }
};


MyLinkedList.prototype.addAtHead = function(val) {
    let newHead = new Node(val);
    if(this.head){
        this.head.prev = newHead;
        newHead.next = this.head;
        this.head = newHead;
    }else{
        this.head = newHead;
    }
    this.size+=1;
};


MyLinkedList.prototype.addAtTail = function(val) {
    let newTail = new Node(val);
    let currNode = this.head;
    if(!this.head){
        this.head = newTail;
        this.size+=1;
        return;
    }
    while(currNode){
        if(currNode.next === null){
            currNode.next = newTail;
            newTail.prev = currNode;
            this.size++;
            return;
        }
        currNode=currNode.next;
    }
};


MyLinkedList.prototype.addAtIndex = function(index, val) {
    let newNode = new Node(val);
    let currNode = this.head;
    let i = 0;
    if(index<0 || index>this.size){
        return;
    }
    if(index===0){
        this.addAtHead(val);
        return;
    }
    while(i<index){
        currNode = currNode.next;
        i++;
    }
    if(currNode === null){
        this.addAtTail(val);
        return;
    }
    currNode.prev.next = newNode;
    newNode.prev = currNode.prev;
    currNode.prev = newNode;
    newNode.next = currNode;
    this.size++;
    return;
};


MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index >= this.size){
        return;
    }
    let i=0;
    let currNode = this.head;
    while(i<=index){
        if(i === index){
            if(currNode.prev){
                currNode.prev.next = currNode.next;
            }else{
                this.head = currNode.next;
            }
            if(currNode.next){
                currNode.next.prev = currNode.prev;
            }
            this.size--;
            return
        }
        i++;
        currNode = currNode.next;
    }
};
