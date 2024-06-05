class Rain {
    constructor(x, y, speed, width, height) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.isDead = false;
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.isDead = true;
        }
        const context = canvas.getContext('2d');
        context.beginPath();
        context.fillStyle = '#fff';
        context.fillRect(this.x, this.y, this.width, this.height);
        context.closePath();
    }
}

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const rains = [];
for (let i = 0; i < 120; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speed = Math.random() * 30 + 25;
    const width = Math.random() * 2 + 0.5;
    const height = Math.random() * 36 + 1;
    rains.push(new Rain(x, y, speed, width, height));
}

function update() {
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < rains.length; i++) {
        rains[i].update();
        if (rains[i].isDead) {
            const x = Math.random() * canvas.width;
            const y = -10;
            const speed = Math.random() * 30 + 25;
            const width = Math.random() * 2 + 0.3;
            const height = Math.random() * 36 + 1;
            rains[i] = new Rain(x, y, speed, width, height);
        }
    }

    requestAnimationFrame(update);
}

update();
const username = document.getElementById('username');
const password = document.getElementById('password')
const confirm_password = document.getElementById('confirm_password')
const username_icon = document.getElementsByTagName('svg')[0];
const password_icon = document.getElementsByTagName('svg')[1];
const confirm_password_icon = document.getElementsByTagName('svg')[2];

function addEventListeners(input, icon) {
    // 若找不到元素，打印一条错误信息到控制台而不是执行下面的代码
    if (!input || !icon) {
        console.error('An input or icon element was not found.');
        return;
    }

    // 依然使用事件监听器
    input.addEventListener("focus", function () {
        input.parentNode.className = "focus";
        icon.style.fill = "#4de680";
    });
    input.addEventListener("blur", function () {
        input.parentNode.className = "input";
        icon.style.fill = "#9b9b9b";
    });
}

// ...

// 在 DOM 完全加载后添加事件监听器
document.addEventListener('DOMContentLoaded', function () {
    inputs.forEach((input, index) => {
        addEventListeners(input, icons[index]);
    });
});