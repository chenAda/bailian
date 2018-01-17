define(function(){
	function fn(){
		$.getJSON("json/data2.json",function(json){
					var conStr="";
					for(var attr in json){
						var list = json[attr];
						for(var i=0;i<list.length;i++){
							var product = list[i];
							conStr +=`<li>
							<div class="pro-show">
								<div class="pro-img">
									<a href="#">
										<img src="images/${product.src}"/>
									</a>
								</div>
								<div class="pro-name">
									<a href="#">${product.name}</a>
								</div>
								<div class="pro-money">
									<div class="money-fl">
										￥<span style="font-size: 18px;">${product.money}</span>
										<a href="#" class="geta"><i class="iconfont iconfont-like"></i>收藏</a>
									</div>
								</div>
							</div>
						</li>`;
						}
					}
					$(".like_class").html(conStr);
		})
	}
	return {
		fn : fn
	}
})