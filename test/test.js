var claim = require('claim');



describe('claim', function () {

    it('should return true for the claimed element', function () {
        var root = document.querySelector('.a1').cloneNode(true);
        var mine = claim(root);
        mine(root).should.be.true;
    });

    it('should return true for child elements', function () {
        var root = document.querySelector('.a1').cloneNode(true);
        var mine = claim(root);
        mine(root.querySelector('.a1-1')).should.be.true;
    });

    it('should return false for elements above', function () {
        var root = document.querySelector('.a1').cloneNode(true);
        var mine = claim(root.querySelector('.a1-1'));
        mine(root).should.be.false;
    });

    it('should work with claimed sub element', function () {
        var root = document.querySelector('.a1').cloneNode(true);
        var mine = claim(root);
        var theirs = claim(root.querySelector('.a1-1'));
        mine(root.querySelector('.a1-1-1')).should.be.false;
        mine(root.querySelector('.a1-2-1')).should.be.true;
        theirs.release();
        mine(root.querySelector('.a1-2-1')).should.be.true;
        mine.release();
        mine(root).should.be.false;
    });
});
