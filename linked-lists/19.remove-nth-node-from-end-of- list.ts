function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head.next === null) {
        return null
    }

    let dummyCount = 0
    let dummyHead = head
    while (dummyHead) {
        dummyHead = dummyHead.next
        dummyCount += 1
    }

    console.log(dummyCount, n)
    if (dummyCount === n) {
        return head.next
    }

    // Now we know the position, we'll delete the node
    let count = 0
    let prev = head
    let present = head
    while (present) {
        prev = present
        present = present.next
        count++

        if (count === dummyCount - n) {
            prev.next = present.next
            present = null
            break
        }
    }

    return head
}
