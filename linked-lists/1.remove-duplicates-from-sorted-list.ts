class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

const deleteDuplicates = (head: ListNode | null): ListNode | null => {
    let current = head

    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            // Duplicate found, remove the duplicate node
            current.next = current.next.next
        } else {
            // Move to the next node
            current = current.next
        }
    }

    return head
}

