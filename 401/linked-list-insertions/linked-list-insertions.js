insertAfter(element, newElement) {
    if(!this.head) {
    let node = new Node(element);
    this.head = node;
    } else {
    let newNode = new Node(newElement)
    if (this.head === element){
    this.head.next = newNode
    } else {
    let currentNode = this.head;
    while(currentNode) {
    if(currentNode.next.value === element){
    currentNode.next.next = newNode
    return
    } else{
    currentNode = currentNode.next
    }