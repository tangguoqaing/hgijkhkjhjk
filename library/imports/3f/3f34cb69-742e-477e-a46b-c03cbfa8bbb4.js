"use strict";
cc._RF.push(module, '3f34ctpdC5HfqRrwDy/qLu0', 'Star');
// scripts/Star.js

"use strict";

cc.Class({

    properties: {
        // 星星和主角之间的距离小于这个数值时，就会完成收集
        pickRadius: 0,
        // 暂存 Game 对象的引用
        game: {
            default: null,
            serializable: false
        }
    }
});

cc._RF.pop();