let anniu = document.querySelector('.game-brith .anniu')
let wenzi = document.querySelector('.game-run-wenzi-box .game-run-wenzi')
let year = 0//年龄
let brith = 0//是否已诞生
let death = 0//是否已诞生
let t //接受修行与暂停的定时器



anniu.addEventListener('click', yearbri)

function yearbri() {//诞生
  //诞生时触发的事件
  if (brith == 0 && finish2 == 5) {
    selectlin()
    getname()
    wenzi.value = `${year}岁时：  \n`
    wenzi.scrollTop = wenzi.scrollHeight;//
    anniu.innerHTML = '修行'

    //属性面板变化
    let life = document.querySelector('#寿元')
    life.innerHTML = `年龄 ： ${year} 岁/ 寿元 : ${30 + nativenamedata[2]} 年`
    brith = 1
  }

  //时间流动---------------------------------------------------------------------
  else if (year > 0 || brith == 1) {
    if (year >= 30 + nativenamedata[2]) { yeardeath(); }//结束后检测死亡

    if (anniu.innerHTML == '修行') {

      anniu.innerHTML = '暂停'
      t = setInterval(() => { //时间流动计时器
        year++
        if (year >= 30 + nativenamedata[2]) { yeardeath(); }//定时器内自动检测死亡

        wenzi.value = wenzi.value + `${year}岁时：  \n`;
        wenzi.scrollTop = wenzi.scrollHeight;//
        
        //属性面板变化
        let life = document.querySelector('#寿元')
        life.innerHTML = `年龄 ： ${year} 岁/ 寿元 : ${30 + nativenamedata[2]} 年`

        xiu()//修行函数
       

      }, 300);

    }
    //时间暂停------------------
    else if (anniu.innerHTML == '暂停') {
      anniu.innerHTML = '修行'
      clearInterval(t)
    }


  }
  //---------------------------------------------------------------------
}

function yeardeath() {//死亡

  anniu.innerHTML = "已死亡"
  wenzi.value = wenzi.value + `${30 + nativenamedata[2]}岁时：死亡\n`;
  wenzi.scrollTop = wenzi.scrollHeight;//

  //属性面板变化
  let life = document.querySelector('#寿元')
  life.innerHTML = `年龄 ： ${30 + nativenamedata[2]} 岁(已死亡)/ 寿元 : ${30 + nativenamedata[2]} 年`

  //都移除
  clearInterval(t)
  anniu.removeEventListener(yearbri)

}






