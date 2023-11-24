class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

function hasCycle(head: ListNode | null): boolean {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        //@ts-expect-error
        slow = slow?.next
        fast = fast.next.next
        if(slow?.val === fast?.val){
            return true
        }
    }

    return false
}
