module.exports = claim

function claim (claimedNode, claimRoot) {

    claimedNode.isClaimed = claimRoot === false ? 'children' : 'node';

    belongsTo.release = release;
    return belongsTo;

    function belongsTo (node) {
        var root = getRoot(node);
        return !!(root && root === claimedNode);
    }

    function release () {
        delete claimedNode.isClaimed;
    }

    function getRoot (node) {
        if (node.isClaimed === 'node') return node;
        do {
            node = node.parentNode;
        } while (node && !node.isClaimed);
        return node;
    }
}
