window.addEventListener('DOMContentLoaded', (event) => {
    const titles = document.querySelectorAll('.site-title');
    let angle = 90; // 开始角度

    // 使用requestAnimationFrame创建平滑的动画效果
    const updateGradient = () => {
        for (const title of titles) {
            // 更新渐变方向
            title.style.backgroundImage = `linear-gradient(${angle}deg, #eff964, #0d40d9)`;
        }
        // 增加角度，值根据动画的平滑程度进行调整
        angle = (angle + 0.1) % 360;

        // 递归调用requestAnimationFrame以维持动画
        requestAnimationFrame(updateGradient);
    };

    updateGradient(); // 启动动画
});
// script.js
var color = function (element) {
    // 定义生成随机颜色的函数
    function getRandomColor() {
        return b[Math.floor(Math.random() * b.length)];
    }

    // 定义生成随机ASCII字符的函数
    function getRandomChar() {
        return String.fromCharCode(94 * Math.random() + 33);
    }

    // 定义生成多个随机字符span元素并设置其颜色的函数
    function createSpans(count) {
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < count; i++) {
            var span = document.createElement("span");
            span.textContent = getRandomChar();
            span.style.color = getRandomColor();
            fragment.appendChild(span);
        }
        return fragment;
    }

    // 定义动画递归函数
    function animate() {
        var currentText = o[c.skillI];
        if (c.step) {
            c.step--;
        } else {
            c.step = g;
            if (c.prefixP < l.length) {
                if (c.prefixP >= 0) {
                    c.text += l[c.prefixP];
                }
                c.prefixP++;
            } else {
                if (c.direction === "forward") {
                    if (c.skillP < currentText.length) {
                        c.text += currentText[c.skillP];
                        c.skillP++;
                    } else {
                        if (c.delay) {
                            c.delay--;
                        } else {
                            c.direction = "backward";
                            c.delay = a;
                        }
                    }
                } else {
                    if (c.skillP > 0) {
                        c.text = c.text.slice(0, -1);
                        c.skillP--;
                    } else {
                        c.skillI = (c.skillI + 1) % o.length;
                        c.direction = "forward";
                    }
                }
            }
        }
        element.textContent = c.text;
        element.appendChild(createSpans(
            c.prefixP < l.length ?
                Math.min(s, s + c.prefixP) :
                Math.min(s, currentText.length - c.skillP)
        ));
        setTimeout(animate, d);
    }

    var l = ""; // 未知变量，可能需要具体情境定义
    var o = ["记录美好生活"].map(function (word) {
        return word + "";
    });
    var a = 2; // 延迟时间
    var g = 1; // 步进
    var s = 5; // 创建字符数
    var d = 75; // 动画帧率
    var b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"];

    var c = {
        text: "",
        prefixP: -s,
        skillI: 0,
        skillP: 0,
        direction: "forward",
        delay: a,
        step: g
    };

    // 启动动画
    animate();
};

// 使用方法，给定DOM元素ID初始化color函数
color(document.getElementById('color'));