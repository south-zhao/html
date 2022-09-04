/* 自执行函数.会自动运行里面的内容*/
(function() {
    let player = document.getElementById('player'); /*通过id名找到标签.并把这个标签赋值给player变量*/
    let move = 50; /* 设置移动的距离. 按一下按键就移动50像素*/

    /* 监听事件. 让你做什么事的时候.程序就会执行相关的功能 --> 键盘监听.当我按下按键的时候就会触发一些代码 event事件*/
    document.addEventListener('keydown', function(ev) {
        let keyCode = ev.keyCode; /* 获取到按下的按键 */
        let left = player.offsetLeft; /* 获取皮卡丘的x坐标 横轴坐标*/
        let top = player.offsetTop; /* 获取皮卡丘的y坐标 纵轴坐标*/

        if (keyCode == 87) { /* w */
            top -= move;
        } else if (keyCode == 83) { /* s */
            top += move;
        } else if (keyCode == 65) { /* a */
            left -= move;
        } else if (keyCode == 68) { /* d */
            left += move;
        }

        player.style.left = left + 'px'; /* 修改player的x坐标位置*/
        player.style.top = top + 'px'; /* 修改player的y坐标位置*/

    });
})();