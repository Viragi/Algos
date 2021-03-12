/*
Q- Find element in a sorted Linked List - searchLL
Q- Given a linked list, limit the number of repetitions of each element to k. - limitElementToK
Q- Given a linked list, remove all nodes with odd values from the list. - removeOddValue
Q- Check if linkedlist is sorted  - LinkedListSorted
*/ 

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


function limitElementToK( ll, k){
  if(k == 0 || !ll){
    return [];
  }
  let reqHash = {};
  reqHash[ll.value] = 1;
  
  let node = ll;

  while (node) {
    if (!node.next) {
      break;
    }
    let key = node.next.value;
    if (reqHash[key] && reqHash[key] > k ) {
      node.next = node.next.next;

    } else { 
      reqHash[key] = reqHash[key]+1 || 1;
      node = node.next;
    }
  }
}

function removeOddValue(ll){
  if (!ll) {
    return [];
  }

  while(ll && ll.value % 2 != 0) {
    ll = ll.next;
  }
  let head = ll;
  let node = ll;
  while (node) {
    if (node.next && node.next.value % 2 != 0 ) {
      node.next = node.next.next;
    }else {
      node = node.next;
    }
  }
  return head;
}

function LinkedListSorted(node) {
  if (!node) {return true}
  if (node.next && node.value <= node.next.value) {
    return LinkedListSorted(node.next);
  } else if (!node.next) {
    return true;
  }else {
    return false;
  }
  
}