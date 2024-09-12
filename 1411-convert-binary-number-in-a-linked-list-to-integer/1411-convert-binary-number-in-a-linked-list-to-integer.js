/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

var getDecimalValue = function(head) {
    let arr = [];
    while(head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    console.log(`arr: ${arr}`);

    let decimal = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            decimal += Math.pow(2, (arr.length - 1 - i));
        }
    }

    return decimal;
};

// binaryToDecimal() {
//     let decimal = 0;
//     while (this.length !== 0) {
//         if (this.head.value === 1) {
//             decimal += Math.pow(2, (this.length-1));
//             // console.log(Math.pow(2, (this.length-1)));
//         }
//         this.head = this.head.next;
//         this.length -= 1;
//     }
//     return decimal;
// }