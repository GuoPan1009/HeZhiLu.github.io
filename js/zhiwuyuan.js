$(function(){
	// 百度地图API功能
		var map = new BMap.Map("allmap");
		var point = new BMap.Point(116.404, 39.915);
		map.centerAndZoom("隋唐遗址植物园",15);
		map.enableScrollWheelZoom();
		var geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition(function(r){
			if(this.getStatus() == BMAP_STATUS_SUCCESS){
				var mk = new BMap.Marker(r.point);
				map.addOverlay(mk);
				map.panTo(r.point);
				console.log('您的位置：'+r.point.lng+','+r.point.lat);
				point=new BMap.Point(r.point.lng,r.point.lat);
				var transit = new BMap.TransitRoute(map, {
					renderOptions: {map: map, panel: "r-result"}
				});
				var driving = new BMap.DrivingRoute(map, {renderOptions: {map: map, panel: "r-result1", autoViewport: true}});
				var walking = new BMap.WalkingRoute(map, {renderOptions: {map: map, panel: "r-result2", autoViewport: true}});
				walking.search(point, "隋唐遗址植物园");
				transit.search(point, "隋唐遗址植物园");
				driving.search(point, "隋唐遗址植物园");
			}
			else {
				console.log('failed'+this.getStatus());
			}        
		},{enableHighAccuracy: true})


	if ($(".fengxiansi-p2").height()>$(".fengxiansi-p3").height()) {
		$(".qianxisi").height($(".fengxiansi-p2").height()+$(".qianxisi h4").height());
	}else{
		$(".qianxisi").height($(".fengxiansi-p3").height()+($(".qianxisi h4").height()*2));
	};
	var baiyuanh1=$(".baiyuan h4").height();
	var baiyuanh2=$(".baiyuan-div2").height();
	var baiyuanh3=$(".baiyuan-div1").height();
	var baiyuanh4=$(".baiyuanp").height();
	$(".baiyuan").height(baiyuanh1+baiyuanh2+baiyuanh3+baiyuanh4);
})