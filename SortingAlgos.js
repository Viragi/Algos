//Bubble sort: swap and the largest number is placed first at the position

function bubbleSort(arr){
    let swap = false;
    for(let i=0;i<arr.length;i++){
        if(swap){
            swap = false;
        }else{
            break;
        }
        for(let j=0 ;j< arr.length-i;j++){
            while(arr[j-1] && arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1] , arr[j]];
                swap = true;
            }
        }
    }
}

//TC: O(n square) SC: O(1) as inplace 

// Selection Sort: find smallest element from arr and place it first , later search smallest element from 0+i ..n ;

function selectionSort(arr){
   let minIndex = 0;
   let minval = arr[0] ;
    for(let i=0;i<arr.length;i++){
        for(let j=i; j < arr.length; j++ ) {
            if (arr[j] < minval) {
                minval = arr[j];
                minIndex = j;
            }
        }
        [arr[i] , arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    
   return arr;
}


// Insertion Sort

function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let j = i+1;
        while (j > 0 &&  arr[j] < arr[j-1]) {
           [arr[j] , arr[j-1]] = [arr[j-1], arr[j]];
           j--;
        } 
     }
     
    return arr;
}


//Merge Sort
function mergeSortArray(array) {
   
    if( array.length  < 2){
        return array;
    }
    let mid = Math.floor(array.length/2);
    
    let leftArray = array.slice(0,mid);
    let rightArray = array.slice(mid);
    
    let leftSorted = mergeSortArray(leftArray);
    let rightSorted = mergeSortArray(rightArray);
    console.log(leftSorted,rightSorted );
    return merge(leftSorted, rightSorted);

}

function merge(l1, l2){
    let p1 = 0;
    let p2 = 0;
    let result = [];
    console.log( l1, l2);
    while (p1< l1.length && p2 < l2.length){
        if(l1[p1] <= l2[p2]){
            result.push(l1[p1]);
            p1++;
        }else{
            esult.push(l2[p2]);
            p2++;
        }
    }
    while(p1< l1.length){
        result.push(l1[p1]);
        p1++;
    }
    while(p2< l2.length){
        result.push(l2[p2]);
        p2++;
    }
    
    return result;
}
