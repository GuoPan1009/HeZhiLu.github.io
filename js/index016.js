$(function(){
	$.ajax({type:"get",url:"../json/index006.json",cache:"false",success:
		function(lunboo){
			// @media (min-width: 768px)屏幕大于等于768px的轮播图实现 
			// 创建li标签，并插入到li里面
			for (var i = 0; i < lunboo.heard[0].lunbourl.length; i++) {
					$("#lb-l").append($("<li></li>"));
				}
			// 对li进行遍历，给每个li添加一个id
			$("#lb-l li").each(function(){
				var index=$("#lb-l li").index(this);
				$("#lb-l li").eq(index).attr("id","imgCard"+index);
			})
			// 对li进行遍历并且插入图片信息
			$("#lb-l li").each(function(){
				var index=$("#lb-l li").index(this);//获取下标方法一
				for (var i = 0; i < lunboo.heard[0].lunbourl.length; i++) {
					if (i==index) {
						$("#lb-l li").eq(i).append($("<a href="+"'"+lunboo.heard[0].lunbourl[i]+"'"+"><span style="+"'"+"opacity:0.4;"+"'"+"></span></a>"+"<img src="+"'"+lunboo.heard[1].lunboimg[i]+"'"+" class="+"'"+"img-responsive center-block"+"'"+" atl="+"'"+lunboo.heard[2].lunboat[i]+"'"+" title="+"'"+lunboo.heard[2].lunboat[i]+"'"+">"+"<p>"+lunboo.heard[3].lunbop[i]+"</p>"))
					};
				}
			});
			// 给#imgCard0下的span和p标签添加特殊样式，用来作为第一个显示
			$("#imgCard0 span").attr("style","opacity:0");
			$("#imgCard0 p").attr("style","bottom:0");

			//轮播方法
			var len=$(".main_banner li").length;
			var index_2=0;
			var timer=800;
			var intervaltimer=0;
			var isMoving=false;

			
			function slide(slideMode){		
				if (isMoving==false){
					isMoving=true;
					var prev; var next; var hidden;
					var curr=$("#imgCard"+index_2);//当前正中显示
					
					if(index_2==0){								//当前正中显示的是第0张时 prev为最后一张
						prev=$("#imgCard"+(len-1));					
					}else{												//否则  序列号-1
						prev=$("#imgCard"+(index_2-1)); 		
					}
					if(index_2==(len-1)){					//当前正中显示的是最后一张时 next为第0张
						next=$("#imgCard0");
					}else{											//否则  序列号+1
						next=$("#imgCard"+(index_2+1));
					}
			
					if(slideMode){			//slideMode为1(true)，执行slide(1)，上一张
						if(index_2-2>=0){									//index_2						2		3		4
							hidden=$("#imgCard"+(index_2-2));//									0		1		2
						}else{													//index_2		0		1
							hidden=$("#imgCard"+(len+index_2-2));//			3		4
						}
						prev.css("z-index","5");			//点击prev按钮  让prev位置上的这张图片 层级最高 显示
						next.css("z-index","1");
						curr.css("z-index","2");			
						hidden.css("z-index","1");
						//当index_2自减，各图片往右运动效果
						hidden.css({width:"38.14%",height:"64.29%",top:"21.43%","left":"0rem","opacity":0});
						hidden.stop(true,true).animate({width:"49.15%",height:"85.71%",top:"7.14%",left:"0rem",opacity:1},timer);
						curr.stop(true,true).animate({width:"49.15%",height:"85.71%",top:"7.14%",left:"50.85%",opacity:1},timer);
						next.stop(true,true).animate({width:"38.14%",height:"64.29%",top:"21.43%","left":"61.86%","opacity":0},timer,function(){next.find("span").css("opacity",0); isMoving = false;});
						//prev  -->  curr     prev中的图片li轮换到curr的位置      其他一次轮换
						prev.find("span").css("opacity",0);
						$(".main_banner_box li").find("p").css({"bottom":"-50px"});//所有标题隐藏
						prev.stop(true,true).animate({width:"56.78%",height:"100%",left:"21.61%",top:0,opacity:1},timer,function(){
							$(this).find("p").animate({"bottom":"0rem"});	//当前这张图片的标题运动出来
						});
						index_2--;
					}else{			//执行next 操作
						if(index_2+2>=len){								//index_2								3		4	
							hidden=$("#imgCard"+(index_2+2-len));//										0		1
						}else{													//index_2		0		1		2
							hidden=$("#imgCard"+(index_2+2));//						2		3		4
						}
						prev.css("z-index","1");
						next.css("z-index","5");			//点击next按钮  让next位置上的这张图片 层级最高 显示
						curr.css("z-index","2");
						hidden.css("z-index","1");
						//当index_2自增，各图片往左运动效果
						hidden.css({width:"38.14%",height:"64.29%",top:"21.43%","left":"61.86%","opacity":0});
						hidden.stop(true,true).animate({width:"49.15%",height:"85.71%",top:"7.14%",left:"50.85%",opacity:1},timer);							
						curr.stop(true,true).animate({width:"49.15%",height:"85.71%",top:"7.14%",left:"0rem",opacity:1},timer);
						//next  -->  curr     next中的图片li轮换到curr的位置      其他一次轮换
						next.find("span").css("opacity",0);
						$(".main_banner_box li").find("p").css({"bottom":"-17.86%"});//所有标题隐藏
						next.stop(true,true).animate({width:"56.78%",height:"100%",left:"21.61%",top:0,opacity:1},timer,function(){
							$(this).find("p").animate({"bottom":"0rem"});	//当前这张图片的标题运动出来
						});
						prev.stop(true,true).animate({width:"38.14%",height:"64.29%",left:"0rem",top:"21.43%",opacity:0},timer,function(){
							isMoving = false;
						}); 
						index_2++;	
					}//if else
			
					hidden.find("span").css("opacity",0.5);
					curr.find("span").css("opacity",0.5);
			
					if(index_2==len) index_2=0;
					if(index_2<0) index_2=len+index_2;			//限制index_2的范围
					$(".btn_list span").removeClass('curr').eq(index_2).addClass('curr');//给序列号按钮添加、移除样式
				}
			}//slide()


			if(len>3){
				//序列号按钮 跳序切换 方法
				$(".btn_list span").click(function(event){
					
					if (isMoving ) return;
					var oIndex=$(this).index();
			
					if(oIndex==index_2) return;//点击按钮的序列号与当前图片的序列号一致，return
					clearInterval(intervaltimer)
					intervaltimer=null;
			
					var flag=false;
					//当前显示图片的序列号  和  被点击按钮的序列号  间隔超过1且不是首尾两个的时候
					if(Math.abs(index_2-oIndex)>1&&Math.abs(len-Math.abs(index_2-oIndex))!=1){
						//统一样式
						$(".main_banner_box li").css({width:"25.42%",height:"42.86%",left:"50.85%",top:"21.43%",opacity:0});
						//如果当前的序列号   比    被点击按钮序列号     大     而且     不相邻、不是首尾  
						if(index_2>oIndex&&len-Math.abs(index_2-oIndex)!=1){
							flag=true;
							index_2=oIndex+1;		//oIndex+1    通过slide()  运动回上一张    oIndex
						}else{//比   小     而且     不相邻、不是首尾
							index_2=oIndex-1;		//oIndex-1     通过slide()  运动到下一张    oIndex
							if(index_2<0) index_2=len-1;
						}
					}else{//当前 比 被点击  大	且   相邻									//从0    跳到     4		要执行上一张方法
						if((index_2>oIndex&&len-(index_2-oIndex)!=1)||(index_2<oIndex&&len+(index_2-oIndex)==1)){
							flag=true;			//执行上一张
						}
					}
					slide(flag);
					intervaltimer=setInterval(slide,2000);//自动轮播
					
				});
			
				$(".main_banner_box li").on("mousemove",function(){
					if($(this).css("width")=="56.78%"){//鼠标移入为当前正中显示的图片li，则清除定时器
						clearInterval(intervaltimer);
						intervaltimer=null;
					}
				}).on("mouseout",function(){//鼠标移除重新滚动
						clearInterval(intervaltimer);
						intervaltimer=null;
						intervaltimer=setInterval(slide,2000);
				});
				
				$(".js_pre").click(function(event){//上一张
					if (isMoving ) return;
					clearInterval(intervaltimer);
					intervaltimer=null;
					slide(1);
					intervaltimer=setInterval(slide,2000);
				});
			
				$(".js_next").click(function(event){//下一张
					if (isMoving ) return;
					clearInterval(intervaltimer);
					intervaltimer=null;
					slide();
					intervaltimer=setInterval(slide,2000);        
				});
				
				intervaltimer=setInterval(slide,2000);
				
			}else{				
				$(".js_pre").hide();
				$(".js_next").hide();	
			}//if else

			// @media (max-width: 767px)屏幕小于等于767px的轮播图实现 
			// 创建li标签，并插入到li里面
			for (var i = 0; i < lunboo.heard[0].lunbourl.length; i++) {
					$(".swiper-wrapper").append($("<li></li>"));
				}
			//给li添加class名
			$(".swiper-wrapper li").addClass("swiper-slide");
			// 对li进行遍历并且插入图片信息
			$(".swiper-wrapper li").each(function(){
				var index=$(this).index();//获取下标方法二
				for (var i = 0; i < lunboo.heard[0].lunbourl.length; i++) {
					if (i==index) {
						$(".swiper-wrapper li").eq(i).append($("<a class='moph-ahref' href='"+lunboo.heard[0].lunbourl[i]+"'> <img src="+"'"+lunboo.heard[1].lunboimg[i]+"'"+" atl="+"'"+lunboo.heard[2].lunboat[i]+"'"+" title="+"'"+lunboo.heard[2].lunboat[i]+"'"+">"+"<div></div>"+"<p>"+lunboo.heard[3].lunbop[i]+"</p> </a>"))
					};
				};
			})
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
		}
	});

	
	// 我们的城市
	var imgh=$(".normalatl h2 a").height();
	$(".normalatl h2 img").width(imgh)

	var yuanh=$("#our-city .yuan").width();
	$("#our-city .yuan").height(yuanh);
	$(window).resize(function(){
		var yuanh=$("#our-city .yuan").width();
		$("#our-city .yuan").height(yuanh);	
	})

	var li0h=$("#our-city li").eq(0).height();
	var li1h=$("#our-city li").eq(1).height();
	var li2h=$("#our-city li").eq(2).height();
	var li3h=$("#our-city li").eq(3).height();
	var lihmax=Math.max(li0h,li1h,li2h,li3h)
	$("#our-city li").height(lihmax);
	$("#our-city li").eq(4).height(0);
	$("#our-city ul").height(lihmax);
	$("#our-city li").each(function(){
		var index=$(this).index();
		$(this).mouseenter(function(){
			$(".yuan .yuan-a"+index).css({
				borderRightColor:"#FFFF00",
				borderTopColor:"#FFFF00",
				borderLeftColor:"#FF8247",
				borderBottomColor:"#FF8247",
				transform:"rotate(360deg)"
			});	
		})
		$(this).mouseleave(function(){
			$(".yuan .yuan-a"+index).css({
				borderColor:"#CDC5BF",
				transform:"rotate(0deg)"
			})
		})
	})
	// @media (max-width: 1281px)
	var pk=$("#our-city").width();
	if (window.screen.width<=1281) {
		var pk=$("#our-city").width();
		$("#our-city li p").width(pk);
		$("#our-city li p").height($("#our-city li").height());
		$("#our-city li").each(function(){
			var index=$(this).index();
			var panduan=0;
			$("#our-city li").eq(index).on("click",function(){
				if (panduan==0) {
					$(this).find("p").show();
					$("#our-city li div").hide();
					$("#our-city li h4").hide();
					panduan=1;
				}else{
					$(this).find("p").hide();
					$("#our-city li div").show();
					$("#our-city li h4").show();
					panduan=0;
				};
			});
		})
	};
	//我们的景点
	$.ajax({type:"get",url:"../json/index006.json",cache:"false",success:function(ourviewss){
		// 给ul添加li标签
		for (var i = 0; i < ourviewss.ourview[0].ourviewurl.length; i++) {
			$("#our-view ul").append($("<li class='ourviewli"+i+"'"+"></li>"));
		}
		$("#our-view ul li").each(function(){
			var index=$("#our-view ul li").index(this);
			for (var i = 0; i < ourviewss.ourview[0].ourviewurl.length; i++) {
				if (i==index) {
					$("#our-view ul li").eq(i).append($("<a href='"+ourviewss.ourview[0].ourviewurl[i]+"'>"+"<img src="+ourviewss.ourview[1].ourviewimg[i]+" alt="+ourviewss.ourview[2].ourviewat[i]+" title="+ourviewss.ourview[2].ourviewat[i]+">"+"<div class='our-viewxia'>"+ourviewss.ourview[2].ourviewat[i]+"</div>"+"<div class='our-viewyin'><p>"+ourviewss.ourview[3].ourviewp[i]+"</p></div>"+"</a>"))
				};
			};
			if (window.screen.width>1281) {
					var lih=$("#our-view ul img").height();
				$("#our-view ul li").height(lih);
				$(window).resize(function(){
					var lih2=$("#our-view ul img").height();
					$("#our-view ul li").height(lih2);
				})
				$("#our-view ul li").eq(index).on("mouseenter",function(){
					console.log(index);
					$(".ourviewli"+index+" .our-viewxia").hide(0,function(){
						$(".ourviewli"+index+" .our-viewyin").animate({
							bottom:"0px"
						},300);
					})
				})
				$("#our-view ul li").eq(index).on("mouseleave",function(){
					console.log(index);
					$(".ourviewli"+index+" .our-viewyin").animate({
						bottom:-lih+"px"
					},300,function(){
						$(".ourviewli"+index+" .our-viewxia").show(0)
					});
					
				})
			};
			
		})}
	})
	// 我们的习俗
	var flokaysimgh=$(".flokays-div1 img").height();
	$(".flokays-div1,.flokays-div3").height(flokaysimgh);
	$("#flokways li").height(flokaysimgh);
	$(".flokays-div1 div,.flokays-div3 div").height(flokaysimgh);

	$(".flokways-li1").on("mouseenter",function(){
		$(".flokays-div1 img").animate({left:0},100);
		$(".flokays-div1 div").animate({left:"5%"},100);
	});
	$(".flokways-li1").on("mouseleave",function(){
		$(".flokays-div1 img").animate({left:"-5%"},100);
		$(".flokays-div1 div").animate({left:0},100);
	});

	$(".flokways-li2").on("mouseenter",function(){
		$(".flokays-div3 img").animate({right:0},100);
		$(".flokays-div3 div").animate({right:"5%"},100);
	});
	$(".flokways-li2").on("mouseleave",function(){
		$(".flokays-div3 img").animate({right:"-5%"},100);
		$(".flokays-div3 div").animate({right:0},100);
	});

	// var flokaysh1=$("flokays-div2").height();
	// var flokaysh2=$("flokays-div4").height();
	// var flokaysmaxh=Math.max(flokaysh1,flokaysh2);
	// $("#flokways li").height(flokaysmaxh);
	// 洛游讯息
	// 视频控制
	$(".news-div1").on("mouseenter",function(){
		$(".news-div1 span").show(0,function(){
			$(".news-div1").on("mouseleave",function(){
				$(".news-div1 span").hide()
			})
		})
	})
	var playor=0;
	$(".news-div1").on("click",function(){
		if (playor==0) {
			$(".news-div1 video").get(0).play();
			playor=1;
		}else{
			$(".news-div1 video").get(0).pause();
			playor=0;
		}
	})
	// 新闻加载
	$.ajax({type:"get",url:"../json/index008.json",cache:"false",success:function(newss){
		$(".news-div2 li").each(function(){
			var index=$(this).index();
			$("#newli"+index+" a").attr({href:newss.newal[0].newurl[index],alt:newss.newal[1].newat[index],title:newss.newal[1].newat[index]});
			$("#newli"+index+" a .newsflt-aspan1").html(newss.newal[1].newat[index]);
			$("#newli"+index+" a .newsflt-aspan2").html(newss.newal[2].newtime[index]);
		})
	}})

	// 关于我们
	$("#aboutus-div1").height($("#aboutus-div1 img").height());

})