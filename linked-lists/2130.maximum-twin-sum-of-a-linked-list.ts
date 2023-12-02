class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function pairSum(head: ListNode | null): number {
    // Find the middle
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow!.next
        fast = fast.next.next
    }
    console.log(slow)
    // Reverse the second half, starting from slow
    let prev: ListNode | null = null
    let curr = slow
    while (curr) {
        let nextNode = curr.next
        curr.next = prev
        prev = curr
        curr = nextNode
    }
    console.log(prev)

    // Now, sum up prev and slow
    let ans = 0
    while (prev) {
        ans = Math.max(ans, head!.val + prev.val)
        head = head!.next
        prev = prev.next
    }

    return ans
}
