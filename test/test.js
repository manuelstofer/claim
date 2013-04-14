var claim = require('claim');

describe('claim', function () {

    it('should return true for the claimed node', function () {
        var root = document.querySelector('.a1').cloneNode(true),
            mine = claim(root);

        mine(root).should.be.true;
    });

    it('should return false for the root node when only children are claimed', function () {
        var root        = document.querySelector('.a1').cloneNode(true),
            mine        = claim(root, false),
            theirNode   = root.querySelector('.a1-1');

        claim(theirNode, false);
        mine(root).should.be.false;
        mine(theirNode).should.be.true;
    });

    it('should return true for child node', function () {
        var root = document.querySelector('.a1').cloneNode(true),
            mine = claim(root);

        mine(root.querySelector('.a1-1')).should.be.true;
    });

    it('should return false for node above', function () {
        var root = document.querySelector('.a1').cloneNode(true),
            mine = claim(root.querySelector('.a1-1'));

        mine(root).should.be.false;
    });

    it('should work when subview claimed a node', function () {
        var root    = document.querySelector('.a1').cloneNode(true),
            mine    = claim(root),
            theirs  = claim(root.querySelector('.a1-1'));

        mine(root.querySelector('.a1-1')).should.be.false;
        mine(root.querySelector('.a1-2-1')).should.be.true;
        theirs.release();
        mine(root.querySelector('.a1-1')).should.be.true;
        mine.release();
        mine(root).should.be.false;
    });
});
