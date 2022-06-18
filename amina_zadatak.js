/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  curr = l1;
  while (curr.next !== undefined) {
    console.log(curr.val);
    console.log(curr.next);
    curr = curr.next;
  }
  curr = l2;
  while (curr.next !== undefined) {
    console.log(curr.val);
    console.log(curr.next);
    curr = curr.next;
  }
  return l1;
};
