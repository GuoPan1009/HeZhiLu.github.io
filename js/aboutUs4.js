$(function(){
	var alGao=window.screen.height;
	$(".slide1").height(alGao);
	var mySwiper = new Swiper ('.swiper-container',{
		direction: 'vertical',
    	loop: false,
    	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
			swiperAnimateCache(swiper); //隐藏动画元素 
			swiperAnimate(swiper); //初始化完成开始动画
		},
		onSlideChangeEnd: function(swiper){ 
			swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		}
	});

	if (window.screen.width<=1281) {
		var bianhuan=0;
		$(".about-div1-1").on("click",function(){
			if (bianhuan==0) {
				$(".about-div1-1 p").show(0);
				bianhuan=1;
			}else{
				$(".about-div1-1 p").hide();
				bianhuan=0;
			};
		})
	};
	if (window.screen.width-window.screen.height>0) {
		if (window.screen.width<=1281 && window.screen.width>=1024) {
			$(".slide1 .about-div1").css("marginTop","10%");
			$(".slide1 .about-divxiao1").css("marginTop","0%");
			$(".slide1 .about-div1 img").css("left","47%")
		};
	};
	if (window.screen.width==768&&window.screen.height==1024) {
		$(".slide1 .about-div1 img").css("left","46%");
		$(".slide1 .about-divxiao2").css("marginTop","16%");
	};
	if (window.screen.width<1024) {
		if (window.screen.width/window.screen.height>1.5) {
			$(".slide1 .about-div1").css("marginTop","0%");
			$(".slide1 .about-div1 h4").css("marginTop","4%");
			$(".slide1 .about-div1 img").css("left","45.5%");
			$(".slide1 .about-div2").css("top","100%");
			$(".slide1 .about-divxiao2").css("marginTop","15%");
			$(".slide1 .about-div3 .about-p1").css("marginTop","4%");
			$(".slide1 .about-div3 .about-p2").css("marginTop","5%");
		};
	};

	if (window.screen.width<=1281) {
		$("#foot-div1").css("marginTop","0%")
	}
	$(window).resize(function(){
		var alGao=window.screen.height;
		$(".slide1").height(alGao);
		if (window.screen.width<1024) {
			if (window.screen.width/window.screen.height>1.5) {
				$(".slide1 .about-div1").css("marginTop","0%");
				$(".slide1 .about-div1 h4").css("marginTop","4%");
				$(".slide1 .about-div1 img").css("left","45.5%");
				$(".slide1 .about-div2").css("top","100%");
				$(".slide1 .about-divxiao2").css("marginTop","15%");
				$(".slide1 .about-div3 .about-p1").css("marginTop","4%");
				$(".slide1 .about-div3 .about-p2").css("marginTop","5%");
			};
		};
		if (window.screen.width<1024) {
			if (window.screen.width/window.screen.height<0.7) {
				$(".slide1 .about-div1-1").css("marginTop","20%");
				$(".slide1 .about-div1 img").css("left","42.5%");
				$(".slide1 .about-divxiao2").css("marginTop","30%");
			};
		};
		if (window.screen.width==768&&window.screen.height==1024) {
			$(".slide1 .about-div1 img").css("left","46%");
			$(".slide1 .about-divxiao2").css("marginTop","16%");
		};
		if (window.screen.width-window.screen.height>0) {
			if (window.screen.width<=1281 && window.screen.width>=1024) {
				$(".slide1 .about-div1").css("marginTop","10%");
				$(".slide1 .about-divxiao1").css("marginTop","0%");
				$(".slide1 .about-div1 img").css("left","47%")
			};
		};
	})
});