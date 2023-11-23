class ListNode {
    val: number
    next: ListNode | null
    prev: ListNode | null

    constructor(val: number) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

(() => {
    const node1: ListNode = new ListNode(1);
    const node2: ListNode = new ListNode(2);
    const node3: ListNode = new ListNode(3);

    // Connect nodes
    node1.next = node2;
    if (node2) {
        node2.prev = node1;
        node2.next = node3;
    }
    if (node3) {
        node3.prev = node2;
    }

    console.table([node1, node2, node3]);
})()
