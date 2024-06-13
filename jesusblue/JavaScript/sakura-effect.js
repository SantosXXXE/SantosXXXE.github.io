document.addEventListener('DOMContentLoaded', function () {
    const sakuraContainer = document.getElementById('sakuraContainer');
    const sakuraCount = 30; // 根据需要调整樱花数量

    function createSakura() {
        const sakuraSize = Math.random() * 5 + 2; // 大小在2px到7px之间
        const sakuraElem = document.createElement('span');
        sakuraElem.className = 'sakura-petals';
        sakuraElem.textContent = '✿'; // 使用樱花符号
        sakuraElem.style.left = Math.random() * 100 + 'vw'; // 水平位置随机
        sakuraElem.style.fontSize = sakuraSize + 'px'; // 根据大小设置字体大小
        sakuraContainer.appendChild(sakuraElem);

        return sakuraElem;
    }

    // 预生成所有樱花元素并添加到页面
    for (let i = 0; i < sakuraCount; i++) {
        createSakura();
    }
});