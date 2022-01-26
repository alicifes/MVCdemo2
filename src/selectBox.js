import $ from "jquery";
import './selectBox.css'

const selectBoxHtml = `
         <div class="selectBoxContainer">
            <ol class="nav">
                <li class="nav1">111</li>
                <li class="nav2">222</li>
            </ol>
            <ol class="navContent">
                <li class="content1 disSelected">111111</li>
                <li class="content2 disSelected">222222</li>
            </ol>
        </div>`
$('.selectBox').html(selectBoxHtml)

const $navBar = $('.nav')
const $navContent = $('.navContent')


$navBar.on('click','li',(e)=>{
    //区别current和currentTarget
    const $li = $(e.currentTarget)
    $li.addClass('navSelected').siblings().removeClass('navSelected')
    const index = $li.index()
    $navContent.children().eq(index).removeClass('disSelected').siblings().addClass('disSelected')
})

$navBar.children().eq(0).trigger('click') //设置默认触发trigger事件

// $('.nav1').bind('click',()=>{
//     $('.nav1').addClass('navSelected').siblings().removeClass('navSelected')
//     $('.content1').removeClass('disSelected').siblings().addClass('disSelected')
// })
// $('.nav2').bind('click',()=>{
//     $('.nav2').addClass('navSelected').siblings().removeClass('navSelected')
//     $('.content2').removeClass('disSelected').siblings().addClass('disSelected')
// })
