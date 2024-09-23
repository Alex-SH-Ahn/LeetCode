/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if (head === null) return;
	    
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    console.log(`prev.val: ${prev.val}`)
    
    let current = prev.next;
    console.log(`current.val: ${current.val}`)

    for (let i = 0; i < (right - left); i++) {
        const temp = current.next;
        console.log(`temp: ${temp.val}`)
        current.next = temp.next;
        temp.next = prev.next;
        prev.next = temp;
        console.log(`${i}th: current -> ${current.val}, temp -> ${temp.val}, prev -> ${prev.val}`)
    }
    
    head = dummy.next;
    console.log(`head: ${head.val}`)
    return head;
};