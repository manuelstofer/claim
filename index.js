var claimId = 0;

module.exports = claim

function claim (claimedNode) {
    var id = claimedNode.claimId = ++claimId;


    function belongsTo (node) {
        var root = getRoot(node);
        return !!(root && root.claimId === id);
    }

    function release () {
        delete claimedNode.claimId;
    }

    function getRoot (el) {
        while (el && el.parentNode && typeof el.claimId === 'undefined') {
            el = el.parentNode;
        }
        return el;
    }

    belongsTo.release = release;
    return belongsTo;
}
