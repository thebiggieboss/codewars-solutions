function treeByLevels (rootNode) {
    const result = []
    const rec = (tree, level) => {
        if (!tree) {
            return;
        }
        if (result[level]) {
            result[level].push(tree.value);
        } else {
            result[level] = [tree.value];
        }
        rec(tree.left, level + 1);
        rec(tree.right, level + 1);
    }
    rec(rootNode, 0)
    return result.flat()
}

module.exports = treeByLevels;