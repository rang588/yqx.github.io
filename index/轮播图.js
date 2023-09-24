//轮播图-------------------------------------------------------------------------------------------
let data = [
    { url: 'images/bz01.png', title: '夏日运动时间', color: ' rgb(202, 79, 161)' },
    { url: 'images/bz02.png', title: '夏日动画游乐场', color: ' rgb(100, 79, 161)' },
    { url: 'images/bz03.png', title: '8月动漫新番', color: ' rgb(15, 79, 161)' },
    { url: 'images/bz04.png', title: '星穹铁道', color: ' rgb(100, 10, 161)' },
    { url: 'images/bz05.jpg', title: '显卡攻略指南', color: ' rgb(2, 2, 61)' },
    { url: 'images/bz06.jpg', title: '李玉刚独家专访', color: ' rgb(22, 10, 11)' },
    { url: 'images/bz07.jpg', title: 'steam暖雪', color: ' rgb(100, 10, 50)' },
    { url: 'images/bz08.jpg', title: '寒假指南', color: ' rgb(10, 10, 61)' },
]


//获取元素
let img = document.querySelector('.slider-wrapper img')//轮播images
let footer = document.querySelector('.slider-footer')//背景
let next = document.querySelector('.next')//右按钮
let prev = document.querySelector('.prev')//左按钮
let p = document.querySelector('.slider-footer p')//下文字
let slider = document.querySelector('.slider-box')//获取大盒子，做离开自动轮播

//左右按钮
let co = 0
next.addEventListener('click', function () {
    co++
    if (co >= data.length) co = 0
    img.src = data[co].url
    p.innerHTML = data[co].title
    footer.style.backgroundColor = data[co].color
    document.querySelector('.slider-indicator .active').classList.remove('active')//持续获取最新得active
    document.querySelector(`.slider-indicator li:nth-child(${co + 1})`).classList.add('active')
}
)
prev.addEventListener('click', function () {
    co--
    if (co < 0) co = data.length - 1
    img.src = data[co].url
    p.innerHTML = data[co].title
    footer.style.backgroundColor = data[co].color
    document.querySelector('.slider-indicator .active').classList.remove('active')
    document.querySelector(`.slider-indicator li:nth-child(${co + 1})`).classList.add('active')
}
)


//鼠标离开自动轮播 | 鼠标经过停止自动轮播
let timerId = setInterval(function () {
    next.click()//调用元素的事件
}, 2500)

slider.addEventListener('mouseleave', function () {
    timerId = setInterval(function () { next.click() }, 1300)//清除定时器时丧失了定义，重新定义     
})
slider.addEventListener('mouseenter', function () {
    clearInterval(timerId)
})


//点击小圆点跳转
let liclick = document.querySelector('.slider-indicator')
//利用事件委托子元素向父元素冒泡实现只绑定一次（避免循环，提高性能）
liclick.addEventListener('click', function (e) {//必须用e生成形参对象
    if (e.target.tagName === 'LI') {
        let i = e.target.dataset.id
        img.src = data[i].url
        p.innerHTML = data[i].title
        footer.style.backgroundColor = data[i].color
        document.querySelector('.slider-indicator .active').classList.remove('active')
        e.target.classList.add('active')
        co = i
    }


})

//轮播图-------------------------------------------------------------------------------------------