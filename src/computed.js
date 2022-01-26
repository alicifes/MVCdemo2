import $ from "jquery";


//数据相关的放在m,m有四个方法
const m = {
    currentNumber:localStorage.getItem('currentNumber')*1,
    create(){},
    delete(){},
    update(data){
        let newData = data.n
        localStorage.setItem('currentNumber',newData.toString())
        c.render()
    },
    get(){}
}
//视图相关的放在v
const v = {
    el:null,  //要挂载到哪里
    computedHtml :`
        <div class="showNumber">
            <span class="output">{{currentNumber}}</span>
        </div>
        <button class="add">+10</button>
        <button class="sub">-10</button>
        <button class="multiply">*2</button>
        <button class="divide">÷2</button>
    `,
    init:(container)=>{
        v.el = $(container)
    }

}
//方法相关的放在c
const c = {
    init:(container)=>{
        v.init(container)
        c.render()
    },
    render:()=>{
        let newHtml =  v.computedHtml.replace(/{{currentNumber}}/,m.currentNumber+'')//replace这里是返回
        v.el.html(newHtml)
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
        m.update({n:m.currentNumber+=10})
    },
    sub:()=>{
        m.update({n:m.currentNumber-=10})
    },
    multiply:()=>{
        m.update({n:m.currentNumber*=2})
    },
    divide:()=>{
        m.update({n:m.currentNumber/=2})
    }

}


export default c


