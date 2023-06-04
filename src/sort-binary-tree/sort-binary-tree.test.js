const sortBinaryTree = require('./sort-binary-tree')
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left  = left;
        this.right = right;
    }
}

describe('sortBinaryTree', () => {
    const treeOne =
        new Node(2,
            new Node(8,
                new Node(1),
                new Node(3)
            ),
            new Node(9,
                new Node(4),
                new Node(5)
            )
        );
    test('test 1', () => {
        expect(sortBinaryTree(treeOne)).toEqual([2,8,9,1,3,4,5])
    })
    const treeTwo =
        new Node(1,
            new Node(8,
                null,
                new Node(3)
            ),
            new Node(4,
                null,
                new Node(5,
                    null,
                    new Node(7)
                )
            )
        );
    test('test 2', () => {
        expect(sortBinaryTree(treeTwo)).toEqual([1,8,4,3,5,7])
    })
})