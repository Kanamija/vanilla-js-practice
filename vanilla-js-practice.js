class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(1);
const b = new Node(6);
const c = new Node(0);
const d = new Node(3);
const e = new Node(-6);
const f = new Node(2);
const g = new Node(2);
const h = new Node(2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = g;
c.right = f;
f.right = h;


//     a                           1
//    / \                         / \   
//   b   c                       6   0    
//  / \   \                     / \   \   
// d   e   f                   3   -6  2
//    /     \                      /    \   
//   g       h                    2      2   

const treeSum = (root) => {
    if (root === null) return [];
    let sumVal = 0;
    const queue = [ root ];

    while (queue.length > 0) {
        const current = queue.shift();
        sumVal += current.val;
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return sumVal;
}

console.log(treeSum(a));





