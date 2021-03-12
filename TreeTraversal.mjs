//BFS
// find max element
function bfs(root){
    let queue= [];
    let max= root.value;
    queue.push(root);
    while(queue.length > 0){
        let temp = queue.shift();
        max = Math.max(max, temp.val);
        if(temp.left){
            queue.push(temp.left);
        }
        if(temp.right){
            queue.push(temp.right);
        }
    }

    return max;
}

function dfs(root){
    if(!root){
        return;
    }
    return Math.max(dfs(root.left), dfs(root.right));
}

function helper(node, max){
    if(!root){
        return;
    }
    let result = Math.max(helper());
}