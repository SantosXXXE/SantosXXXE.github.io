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