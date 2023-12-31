//  Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function swapPairs(head: ListNode | null): ListNode | null {
    // Check edge case: linked list has 0 or 1 nodes, just return
    if (!head || !head.next) {
        return head
    }

    let dummy = head.next // Step 5
    let prev = null // Initialize for step 3
    while (head && head.next) {
        if (prev) {
            prev.next = head.next // Step 4
        }
        prev = head // Step 3

        let nextNode = head.next.next // Step 2
        head.next.next = head // Step 1

        head.next = nextNode // Step 6
        head = nextNode // Move to next pair (Step 3)
    }

    return dummy
}
