import $ from 'jquery'
import './round.css'

$('.roundDiv').bind('mouseenter',()=>{
        $('.roundDiv').addClass('colorful')
}).bind('mouseleave',()=>{
    $('.roundDiv').removeClass('colorful')
})
