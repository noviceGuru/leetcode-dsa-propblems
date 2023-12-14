function deleteMiddle(head: ListNode | null): ListNode | null {
    if(head.next === null) {
        return null
    }
    // find the middle
    let fast = head
    let slow = head
    let prevSlow = head

    while(fast && fast.next){
        fast = fast.next.next
        prevSlow = slow
        slow = slow.next
    }

    // delete
    prevSlow.next = slow.next
    slow.next = null

    return head
}