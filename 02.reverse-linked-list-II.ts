class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function reverseBetween(
    head: ListNode | null,
    left: number,
    right: number
): ListNode | null {
    if (!head || left === right) {
        return head;
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let leftPrev = dummy;

    // Move to the node before the sub-list to be reversed
    for (let i = 1; i < left; i++) {
        leftPrev = leftPrev.next!;
    }

    let rightNext = leftPrev.next;
    let prev : ListNode | null = null;
    let current = leftPrev.next;

    // Reverse the sub-list from left to right
    for (let i = left; i <= right; i++) {
        let next = current!.next;
        current!.next = prev;
        prev = current;
        current = next;
    }

    // Connect the reversed sub-list to the rest of the list
    leftPrev.next = prev;
    rightNext!.next = current;

    return dummy.next;
}
