class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')
const g = new Node('g');


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
f.left = g;

//      a
//     / \
//    b   c
//   / \   \
//  d   e   f  
    //    /
    //    g        


// const depthFirstValues = (root) => {
//     if (root === null) return [];
//     const values = [];
//     const stack = [ root ];
//     while (stack.length > 0) {
//         const current = stack.pop();

//         // console.log('current.val', current.val)
//         values.push(current.val);

//         // console.log('current.right', current.right);
//         // console.log('current.left', current.left);

//         if (current.right) stack.push(current.right);
//         if(current.left) stack.push(current.left);
//     }
//     return values;

// }



// console.log(depthFirstValues(null));

const depthFirstValues = (root) => {
    if (root === null) return [];
    const leftValues = depthFirstValues(root.left);
    const rightValues = depthFirstValues(root.right); 
     console.log('leftValues', leftValues);
     console.log('rightValues', rightValues);
    return [root.val, ...leftValues, ...rightValues];
}


console.log(depthFirstValues(a));