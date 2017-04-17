$(function(){
	var alGao=window.screen.height;
	var headerh=$(".container-fluid").height();
	var footerh=$("#footerbj").height();
	var conh=alGao-(headerh+footerh);
	$(".swiper-slide").height(conh);
	$(".folkways-sec").height(conh);
	var mySwiper = new Swiper ('.swiper-container',{
		mousewheelControl : true,
		direction:'vertical',
		mousewheelForceToAxis : true,
	    loop: false,
	    onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		}
	});
	if (window.screen.width/window.screen.height>1.5) {
		if(window.screen.width<=1281){
			$(".folkways-sec").hide();
			$(".folkways-sec2").show();
			$("#footerbj").height("100px");
			$("#foot-div1").css("marginTop","-3.5%")
		}
	};
	if (window.screen.width/window.screen.height<1.5) {
		if(window.screen.width<=1281){
			$(".folkways-sec2").hide();
		}	
	};
	if (window.screen.width==1024){
		$("#folkways-slide1-div1").css("marginTop","2%")
		$("#folkways-slide1-div3").css("marginTop","2%")
		$(".folkways-slide1-span1").css("width","25%")
		$("#foot-div1").css("marginTop","0%")
	}
	$(window).resize(function(){
		var alGao=window.screen.height;
		var headerh=$(".container-fluid").height();
		var footerh=$("#footerbj").height();
		var conh=alGao-(headerh+footerh);
		$(".swiper-slide").height(conh);
		$(".folkways-sec").height(conh);
		if (window.screen.width/window.screen.height<1) {
			$("#folkways-slide1-div1").css("marginTop","5%")
			$("#folkways-slide1-div3").css("marginTop","5%")
			$(".folkways-slide1-span1").css("width","40%")
		};
		if (window.screen.width==1024){
			$("#folkways-slide1-div1").css("marginTop","2%")
			$("#folkways-slide1-div3").css("marginTop","2%")
			$(".folkways-slide1-span1").css("width","25%")
			$("#foot-div1").css("marginTop","0%")
		}
	})
});