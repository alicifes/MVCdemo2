import $ from "jquery";
import './selectBox.css'

const eventBus = $({})
const m = {
    data:{

    },
    create(){},
    delete(){},
    update(){

    },
    get(){}
}
const v = {
    el:null,
    selectBoxHtml: `
         <div class="selectBoxContainer">
            <ol class="nav">
                <li class="nav1">111</li>
                <li class="nav2">222</li>
            </ol>
            <ol class="navContent">
                <li class="content1 disSelected">111111</li>
                <li class="content2 disSelected">222222</li>
            </ol>
        </div>`,
    init(container) {
        v.el = $(container)
    },
    render(){
        $(v.selectBoxHtml).appendTo(v.el)
    }
}
const c = {
    init(container) {
        v.init(container)
        v.render()
        c.bindMethods()
        $('.nav').children().eq(0).trigger('click') //设置默认触发trigger事件
    },
    bindMethods:()=>{
        v.el.children().on('click','li',(e)=>{
            //区别current和currentTarget
            const $li = $(e.currentTarget)
            $li.addClass('navSelected').siblings().removeClass('navSelected')
            const index = $li.index()
            $('.navContent').children().eq(index).removeClass('disSelected').siblings().addClass('disSelected')
        })
    }
}
export default c
