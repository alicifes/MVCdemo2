import $ from "jquery";



const eventBus = $({})
//数据相关的放在m,m有四个方法
const m = {
    currentNumber:localStorage.getItem('currentNumber')*1,
    create(){},
    delete(){},
    update(data){
        Object.assign(m.currentNumber,data)  //将生成的data赋值到原来的东西之上
        eventBus.trigger('currenNumberUpdated')
        localStorage.setItem('currentNumber',m.currentNumber.toString())
        // let newData = data.n
        // c.render()
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
    },
    render:(n)=>{
        if(v.el.children.length!==0){
            v.el.empty()
        }
        $(v.computedHtml.replace(/{{currentNumber}}/,n)).appendTo(v.el)
        // let newHtml =  v.computedHtml.replace(/{{currentNumber}}/,m.currentNumber+'')//replace这里是返回
        // v.el.html(newHtml)
        //c.bindMethods() 虽然可以每次在render之后重新对按钮进行绑定，但是存在将事件绑定在父元素上就可以避免重新更新的问题
    }

}
//方法相关的放在c
const c = {
    init:(container)=>{
        v.init(container)
        v.render(m.currentNumber)//核心的关键点，view = render(data)
        c.bindMethods()
        eventBus.on('currenNumberUpdated',()=>{
            v.render(m.currentNumber)
        })
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
            v.el.on('click',key,methods)
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


