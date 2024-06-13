window.addEventListener('DOMContentLoaded', (event) => {
    const titles = document.querySelectorAll('.jesusblue');
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
// script.js
// script.js
document.addEventListener('DOMContentLoaded', function () {
    // 获取到.site-header元素
    var siteHeader = document.querySelector('.site-header');

    // 当页面滚动时触发事件
    window.addEventListener('scroll', function () {
        // 计算页面滚动的绝对距离
        var scrollDistance = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollDistance === 0) {
            // 如果页面滚动到了顶部（或者几乎到顶部），则隐藏header
            siteHeader.style.top = '-700px'; // 你可以根据header高度设置top值为负值
        } else {
            // 如果页面不是在顶部，则显示header
            siteHeader.style.top = '0';
        }
    });
});
// JavaScript代码实现樱花飘落效果
// JavaScript代码，请将它添加到 "JavaScript/js.js" 文件中
document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.cover-image'); // 确保选择器能匹配到正确的元素
    const sakuraCount = 350; // 设置桜花的总数

    const createSakuras = () => {
        for (let i = 0; i < sakuraCount; i++) {
            createSakura();
        }
    };

    const createSakura = () => {
        var sakura = document.createElement('div');
        sakura.classList.add('flower');
        sakura.style.left = `${Math.random() * 100}vw`; // 随机X坐标
        sakura.style.top = '0'; // Y坐标始终从顶部开始
        sakura.style.width = `${Math.random() * 8 + 7}px`; // 随机宽度
        sakura.style.animationDuration = `${Math.random() * 8 + 4}s`; // 随机持续时间
        sakura.style.animationDelay = `-${Math.random() * 10}s`; // 随机延迟
        container.appendChild(sakura);
    };

    // 一次性生成所有桜花
    createSakuras();
});
/////
////
//
document.addEventListener('DOMContentLoaded', function () {
    const scrollbar = document.querySelector('.scrollbar');
    const maxScrollHeight = document.body.scrollHeight - window.innerHeight;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercentage = scrollTop / maxScrollHeight;

        scrollbar.style.width = `${(100 * scrollPercentage).toFixed(2)}%`; // 将滚动条宽度设置为滚动的百分比
    });
});
///
//
//
document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.scroll-button');
    const coverImage = document.querySelector('.cover-image');

    // 确保图片加载完成后设置滚动函数
    const img = coverImage.querySelector('img');
    const checkAndBindScroll = function () {
        if (img.complete) {
            // 图片加载完成后定义滚动到图片底部的函数
            const windowTop = window.pageYOffset || document.documentElement.scrollTop;
            const coverImageRect = coverImage.getBoundingClientRect();
            const coverImageTop = coverImageRect.top;
            const coverImageBottom = coverImageRect.bottom;

            // 判断图片何时到达视窗底部
            const scrollAmount = coverImageBottom > window.innerHeight ?
                (coverImageBottom - windowTop) :
                (coverImageHeightInPx - windowTop);

            scrollCoverImage = function () {
                window.scrollBy({
                    top: scrollAmount, // 实际滚动的距离
                    left: 0,
                    behavior: 'smooth'
                });
            };

            // 绑定点击事件到按钮
            button.addEventListener('click', scrollCoverImage);
        } else {
            // 图片还未加载完成，延迟检查
            setTimeout(checkAndBindScroll, 100);
        }
    };

    // 获取图片的高度
    let coverImageHeightInPx = coverImage.offsetHeight;
    // 开始检查图片是否加载
    checkAndBindScroll();
});
//
//
//