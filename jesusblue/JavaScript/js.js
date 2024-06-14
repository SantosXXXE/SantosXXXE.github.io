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
            siteHeader.style.top = '-1000px'; // 你可以根据header高度设置top值为负值
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
    const fullSizeImg = document.querySelector('.full-size-img');

    const scrollToImageBottom = function () {
        const imageBottomOffset = fullSizeImg.offsetTop + fullSizeImg.offsetHeight;
        button.addEventListener('click', function () {
            window.scrollTo({
                top: imageBottomOffset,
                left: 0,
                behavior: 'smooth'
            });
        });
    };

    scrollToImageBottom();

    // 监听滚动事件来控制按钮的显示
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const coverImageTop = coverImage.getBoundingClientRect().top;
        if (scrollPosition >= coverImageTop + coverImage.offsetHeight - window.innerHeight) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
});
///
///
///
// 在页面加载时执行
// 设置起始时间为2024年6月5日11分37秒
document.addEventListener('DOMContentLoaded', function () {
    function formatTimeUnit(unit) {
        return unit < 10 ? '0' + unit : unit;
    }

    function updateTime() {
        const now = new Date();
        const timeDifference = now - startTime;
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // 使用辅助函数formatTimeUnit格式化时间单位
        const formattedSeconds = formatTimeUnit(seconds);
        const runtimeText = `${days}天 ${hours}小时 ${minutes}分钟 ${formattedSeconds}秒`;

        document.querySelector('.site-footer p:first-child').textContent = `开站时间：${runtimeText}`;
    }

    const startTime = new Date('2024-06-05 11:37:00'); // 设定起始时间
    updateTime(); // 页面加载时运行一次
    setInterval(updateTime, 1000); // 每秒更新一次运行时间
});