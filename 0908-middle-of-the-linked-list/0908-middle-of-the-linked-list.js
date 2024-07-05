/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let temp = head;
    let length = 0;
    while (temp !== null) {
        temp = temp.next;
        length++;
    }
    console.log(length);
    let midNode;
    if (length % 2 == 0) {
        midNode = length / 2;
        console.log(`midNode: ${midNode}`);
    } else {
        midNode = Math.trunc(length / 2);
        console.log(`midNode: ${midNode}`);
    }

    temp = head;
    for (let i = 0; i < midNode; i++) {
        head = head.next;
    }
    return head;
};