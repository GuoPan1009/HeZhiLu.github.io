$(document).ready(function () {
	var mySwiper = new Swiper('.swiper-container',{
		loop:true,
		effect : 'fade',
		fade: {
  			crossFade: false,
		},
		autoplay: 2000,
		autoplayDisableOnInteraction : false,//用户操作swiper之后，是否禁止autoplay,默认为true：停止.false不停止
		touchAngle : 10,//允许触发拖动的角度值，即使触摸方向不是完全水平也能拖动slide
		paginationClickable :true,//分页器是否能够点击
		preventClicks : false,//当swiper在触摸时阻止默认事件（preventDefault），用于防止触摸时触发链接跳转,false为可以跳转
		noSwiping : true,
		pagination : '.swiper-pagination',//分页器
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',//导航按钮
	})
})
