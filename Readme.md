# claim

[![Build Status](https://travis-ci.org/manuelstofer/claim.png)](https://travis-ci.org/manuelstofer/claim)

Util to check if dom elements belong to a view or sub view.

This is useful in nested views to exclude results from .querySelector[All]
that belong to a sub view.


It assumes that sub views claim their root elements.

## Installation

```
$ component install manuelstofer/claim
```


## Example

```html
<div class="my-view">
    <button class="add">bla</button>
    <div class="a-sub-view">
        <button class="add">hello</button>
    </div>
</div>
```

```Javascript
var claim = require('claim');

var root    = document.querySelector('.my-view'),
    mine    = claim(root),
    theirs  = claim(document.querySelector('.a-sub-view'));

    buttons = root.querySelectorAll('button');

for (var i; i < buttons.length; i++) {

    var button = buttons[i],

    if (mine(button)) {
        // button belongs to the view
    }
}

mine.release();   // releases the claim
```
