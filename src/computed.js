import $ from "jquery";


//数据相关的放在m
const m = {
    currentNumber:null,
}
//视图相关的放在v
const v = {
    computedHtml :`
        <div class="showNumber">
            <span class="output">{{currentNumber}}</span>
        </div>
        <button class="add">+10</button>
        <button class="sub">-10</button>
        <button class="multiply">*2</button>
        <button class="divide">÷2</button>
`
}
//方法相关的放在c
const c = {
    init:()=>{
        m.currentNumber = localStorage.getItem('currentNumber')*1||$('.showNumber >span').text()*1
    },
    render:()=>{
        let newHtml =  v.computedHtml.replace(/{{currentNumber}}/,m.currentNumber+'')//replace这里是返回
        $('.computed').html(newHtml)


        c.bindMethods()
    },
    bindMethods:()=>{
        const hashMap={
            ".add":"add",
            ".sub":"sub",
            ".multiply":"multiply",
            ".divide":"divide"
        }
        for(let key in hashMap){
            const value = hashMap[key]
            const methods = c[value]
            $(key).bind('click',methods)
            // $(key).on('click',key,methods)
        }
    },
    add:()=>{
        console.log('here')
            let countEnd = m.currentNumber+=10
            localStorage.setItem('currentNumber',countEnd.toString())
            c.render()
    },
    sub:()=>{
        let countEnd = m.currentNumber-=10
        localStorage.setItem('currentNumber',countEnd.toString())
        c.render()
    },
    multiply:()=>{
        let countEnd =m.currentNumber*=2
        localStorage.setItem('currentNumber',countEnd.toString())
        c.render()

    },
    divide:()=>{
        let countEnd = m.currentNumber/=2
        localStorage.setItem('currentNumber',countEnd.toString())
        c.render()
    }

}

c.init()
c.render()


