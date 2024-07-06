/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let dummy1 = new ListNode(0, null);
    let dummy2 = new ListNode(0, null);
    let less = dummy1;
    let more = dummy2;
    let current = head;
    
    while (current !== null) {
        if (current.val < x) {
            less.next = current;
            less = less.next;
        } else {
            more.next = current;
            more = more.next;
        }
        current = current.next;
    }
    more.next = null
    less.next = dummy2.next;
    return dummy1.next;
};