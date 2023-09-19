let exp =0
let f = [0, 0]//判断是否到达突破条件



function xiu() {
    let xiuxing = document.querySelector('#修行值')
    let jingjie = document.querySelector('#境界')
     console.log(exp)
    //炼气期
    if (exp <= 9.99) {
        eolve()

        if (f[0] == 0) exp = exp + 0.1
        else exp = exp + 0.01

        xiuxing.innerHTML = `修行值：${exp.toFixed(2)} <small class="gray">+0.1</small>`
        if (exp < 3) jingjie.innerHTML = `境界：炼气初期`
        else if (exp < 6) jingjie.innerHTML = `境界：炼气中期`
        else if (exp < 9) jingjie.innerHTML = `境界：炼气后期`
        else jingjie.innerHTML = `境界：炼气大圆满`

    }

    else if (exp < 99.9) {
        eolve()

        if (f[1] == 0) exp = exp + 1
        else exp = exp + 0.1

        xiuxing.innerHTML = `修行值：${exp.toFixed(2)} <small class="gray">+0.1</small>`
        if (exp < 33) jingjie.innerHTML = `境界：筑基初期`
        else if (exp < 66) jingjie.innerHTML = `境界：筑基中期`
        else if (exp < 99) jingjie.innerHTML = `境界：筑基后期`
        else jingjie.innerHTML = `境界：筑基大圆满`

    }




}

function eolve() {

    // 炼气期-->筑基期
    if (exp > 9) {
        f[0] = 1
        let po = document.querySelector('#突破')
        po.style.display = 'block'

        po.addEventListener('click', function () {
        exp+=0.01
        po.style.display = 'none'
        })


        // if (exp >= 9.98) {
        //     alert('修正')
        //     exp=9.99
        // }
        //bug
    }




}

