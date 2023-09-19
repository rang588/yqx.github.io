let native = document.querySelector('.game-property-native')//总天赋点
let n = 20//总天赋点
let finish1 = 0//先天分配天赋阶段
let finish2 = 0//后天分配天赋阶段
let addnative = document.querySelectorAll('.game-property-native-add')//获取加号按钮
let subnative = document.querySelectorAll('.game-property-native-sub')//获取减号按钮
let ramnative = document.querySelectorAll('.game-property-native-random')//获取后天(随机)按钮

let nativetxt = document.querySelectorAll('.game-property-row div')//文字 例如 智慧：100

let nativename = ['智慧', '情商', '体魄', '家境', '灵根']
let nativenamedata = [0, 0, 0, 0, 0]
let nativef = [0, 0, 0, 0, 0]




///*******/
let nativeclick = document.querySelector('.game-property ')
//利用事件委托子元素向父元素冒泡实现只绑定一次（避免循环，提高性能）
nativeclick.addEventListener('click', function (e) {//必须用e生成形参对象


  //加号按钮
  if (e.target.classList.contains('game-property-native-add')) {//类名不要加点
    i = e.target.parentElement.dataset.id//查看目标的父元素
    if (finish1 == 1) return;
    n--
    nativenamedata[i]++
    native.innerHTML = `天赋点:${n}`
    nativetxt[i].innerHTML = `${nativename[i]}:${nativenamedata[i]}`
    if (n <= 0) { finish1 = 1; return; }
  }

  //减号按钮
  if (e.target.classList.contains('game-property-native-sub')) {//类名不要加点
    i = e.target.parentElement.dataset.id//查看目标的父元素
    if (n >= 20) return;
    if (finish1 == 1) return;
    n++
    nativenamedata[i]--
    native.innerHTML = `天赋点:${n}`
    nativetxt[i].innerHTML = `${nativename[i]}:${nativenamedata[i]}`
  }

  //随机后天天赋
  if (e.target.classList.contains('game-property-native-random')) {//类名不要加点
    i = e.target.parentElement.dataset.id//查看目标的父元素
    if (finish2 == 5) return;
    if (nativef[i] == 1) return;
    if (finish1 == 1) {
      let a = Math.floor(Math.random() * 81)
      nativenamedata[i] += a
      nativetxt[i].innerHTML = `${nativename[i]}:${nativenamedata[i]}`
      nativef[i] = 1
      finish2++
    }
    else { alert('请先完成先天分配天赋') }

  }




})





