import $ from 'jquery'
import './move.css'

$('.moveDiv').bind('click',()=>{
    if($('.moveDiv').hasClass('moving')) {
        $('.moveDiv').removeClass('moving')
    }else{
        $('.moveDiv').addClass('moving')
    }
})
