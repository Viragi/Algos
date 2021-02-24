class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function searchLL(head,  target) { 
    if(!head){
      return false;
    }
  
    while(head){
      if(head.value > target){
        break;
      }else if(head.value == target){
        return true;
      }
      head = head.next;
    }
  
  return false;
}

// Test Cases
let LL1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(10)))))))
console.log(searchLL(null, 1)) // false
console.log(searchLL(LL1, 2)) // true
console.log(searchLL(LL1, 4)) // false
console.log(searchLL(LL1, -1)) // false
console.log(searchLL(LL1, 10)) // true
console.log(searchLL(LL1, 11)) // false