
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '100c3Ew/KBHCo/cazxrighO', 'player');
// script/player.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // 主角跳跃高度
    jumpHeight: 0,
    // 主角跳跃持续时间
    jumpDuration: 0,
    // 最大移动速度
    maxMoveSpeed: 0,
    // 加速度
    accel: 0
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var jumpAction = this.runJumpAction();
    cc.tween(this.node).then(jumpAction).start();
  },
  start: function start() {},
  runJumpAction: function runJumpAction() {
    var jumpUp = cc.tween().by(this.jumpDuration, {
      y: this.jumpHeight
    }, {
      esaing: "sineOut"
    });
    var jumpDown = cc.tween().by(this.jumpDuration, {
      y: -this.jumpHeight
    }, {
      easing: "sineIn"
    });
    var tween = cc.tween().sequence(jumpUp, jumpDown);
    return cc.tween().repeatForever(tween);
  } // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxwbGF5ZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJqdW1wSGVpZ2h0IiwianVtcER1cmF0aW9uIiwibWF4TW92ZVNwZWVkIiwiYWNjZWwiLCJvbkxvYWQiLCJqdW1wQWN0aW9uIiwicnVuSnVtcEFjdGlvbiIsInR3ZWVuIiwibm9kZSIsInRoZW4iLCJzdGFydCIsImp1bXBVcCIsImJ5IiwieSIsImVzYWluZyIsImp1bXBEb3duIiwiZWFzaW5nIiwic2VxdWVuY2UiLCJyZXBlYXRGb3JldmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVjtBQUNBQyxJQUFBQSxVQUFVLEVBQUUsQ0FGRjtBQUdWO0FBQ0FDLElBQUFBLFlBQVksRUFBRSxDQUpKO0FBS1Y7QUFDQUMsSUFBQUEsWUFBWSxFQUFFLENBTko7QUFPVjtBQUNBQyxJQUFBQSxLQUFLLEVBQUU7QUFSRyxHQUhMO0FBY1A7QUFFQUMsRUFBQUEsTUFoQk8sb0JBZ0JHO0FBQ04sUUFBSUMsVUFBVSxHQUFHLEtBQUtDLGFBQUwsRUFBakI7QUFDQVYsSUFBQUEsRUFBRSxDQUFDVyxLQUFILENBQVMsS0FBS0MsSUFBZCxFQUFvQkMsSUFBcEIsQ0FBeUJKLFVBQXpCLEVBQXFDSyxLQUFyQztBQUNILEdBbkJNO0FBcUJQQSxFQUFBQSxLQXJCTyxtQkFxQkMsQ0FBRSxDQXJCSDtBQXVCUEosRUFBQUEsYUF2Qk8sMkJBdUJTO0FBQ2QsUUFBSUssTUFBTSxHQUFHZixFQUFFLENBQ1pXLEtBRFUsR0FFVkssRUFGVSxDQUVQLEtBQUtYLFlBRkUsRUFFWTtBQUFFWSxNQUFBQSxDQUFDLEVBQUUsS0FBS2I7QUFBVixLQUZaLEVBRW9DO0FBQUVjLE1BQUFBLE1BQU0sRUFBRTtBQUFWLEtBRnBDLENBQWI7QUFJQSxRQUFJQyxRQUFRLEdBQUduQixFQUFFLENBQ2RXLEtBRFksR0FFWkssRUFGWSxDQUVULEtBQUtYLFlBRkksRUFFVTtBQUFFWSxNQUFBQSxDQUFDLEVBQUUsQ0FBQyxLQUFLYjtBQUFYLEtBRlYsRUFFbUM7QUFBRWdCLE1BQUFBLE1BQU0sRUFBRTtBQUFWLEtBRm5DLENBQWY7QUFJQSxRQUFJVCxLQUFLLEdBQUdYLEVBQUUsQ0FBQ1csS0FBSCxHQUFXVSxRQUFYLENBQW9CTixNQUFwQixFQUE0QkksUUFBNUIsQ0FBWjtBQUVBLFdBQU9uQixFQUFFLENBQUNXLEtBQUgsR0FBV1csYUFBWCxDQUF5QlgsS0FBekIsQ0FBUDtBQUNELEdBbkNNLENBcUNQOztBQXJDTyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIC8vIOS4u+inkui3s+i3g+mrmOW6plxyXG4gICAganVtcEhlaWdodDogMCxcclxuICAgIC8vIOS4u+inkui3s+i3g+aMgee7reaXtumXtFxyXG4gICAganVtcER1cmF0aW9uOiAwLFxyXG4gICAgLy8g5pyA5aSn56e75Yqo6YCf5bqmXHJcbiAgICBtYXhNb3ZlU3BlZWQ6IDAsXHJcbiAgICAvLyDliqDpgJ/luqZcclxuICAgIGFjY2VsOiAwLFxyXG4gIH0sXHJcblxyXG4gIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICBvbkxvYWQgKCkge1xyXG4gICAgICB2YXIganVtcEFjdGlvbiA9IHRoaXMucnVuSnVtcEFjdGlvbigpO1xyXG4gICAgICBjYy50d2Vlbih0aGlzLm5vZGUpLnRoZW4oanVtcEFjdGlvbikuc3RhcnQoKTtcclxuICB9LFxyXG5cclxuICBzdGFydCgpIHt9LFxyXG5cclxuICBydW5KdW1wQWN0aW9uKCkge1xyXG4gICAgdmFyIGp1bXBVcCA9IGNjXHJcbiAgICAgIC50d2VlbigpXHJcbiAgICAgIC5ieSh0aGlzLmp1bXBEdXJhdGlvbiwgeyB5OiB0aGlzLmp1bXBIZWlnaHQgfSwgeyBlc2Fpbmc6IFwic2luZU91dFwiIH0pO1xyXG5cclxuICAgIHZhciBqdW1wRG93biA9IGNjXHJcbiAgICAgIC50d2VlbigpXHJcbiAgICAgIC5ieSh0aGlzLmp1bXBEdXJhdGlvbiwgeyB5OiAtdGhpcy5qdW1wSGVpZ2h0IH0sIHsgZWFzaW5nOiBcInNpbmVJblwiIH0pO1xyXG5cclxuICAgIHZhciB0d2VlbiA9IGNjLnR3ZWVuKCkuc2VxdWVuY2UoanVtcFVwLCBqdW1wRG93bik7XHJcblxyXG4gICAgcmV0dXJuIGNjLnR3ZWVuKCkucmVwZWF0Rm9yZXZlcih0d2Vlbik7XHJcbiAgfSxcclxuXHJcbiAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=