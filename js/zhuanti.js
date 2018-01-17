//define(function(){
//	function fn(){
	$(function(){
		$(".zright").load("common.html .right-slidebar",function(){
			$("#right li").mouseenter(function(){
				 	$(this).addClass("activeLi")
				 			   .find("i")
				 			   .addClass("activeLi");
				 	$(this).find(".s").css("background","red").stop().animate({left : -61},600);
				}).mouseleave(function(){
					$(this).removeClass("activeLi")
				 			   .find("i")
				 			   .removeClass("activeLi");
				 	$(this).find(".s").css("background","#7a6e6e").stop().animate({left : 0},600);
				})
				
				
				$(".last").click(function(){
					 $("body,html").animate({scrollTop : 0},1000)
				})
		});
		$(".top").load("common.html .tools",function(){
			$(".login-button").click(function(){
				location.href = "login.html";
			})
			$(".registered").click(function(){
				location.href = "register.html";
			})
			if(document.cookie){
				str=JSON.parse(getCookie("prolist")).name;
				$(".login-button span").html(str);
			}
			$(".tools-leftfont").mouseenter(function(){
				$(this).nextAll(".divshow").css("display","block");
				$(this).nextAll(".divshow").children().css({"background-color":"#FFFFFF","z-index":2});
			}).mouseleave(function(){
				$(this).nextAll(".divshow").css("display","none");
				$(this).nextAll(".divshow").children().css({"background-color":"#FFFFFF","z-index":2});
			})
			$(".divshow").mouseenter(function(){
				$(this).css("display","block");
			}).mouseleave(function(){
				$(this).css("display","none");
			})
		});
		$(".zheader").load("common.html .header");
		$(".znav").load("common.html .nav",function(){
			$(".nav-leftfont").mouseenter(function(){
				$(this).nextAll(".show-nav").css("display","block");
			}).mouseleave(function(){
				$(".show-nav").css({"display":"none"});
			})
			$(".show-nav").mouseenter(function(){
				$(this).css({"display":"block"});
				
			}).mouseleave(function(){
				$(this).css({"display":"none"});
			})
			$("#item li").mouseenter(function(){
				$(this).css({"background":"#fff"});
				$(this).children("span").find("a").css("color","red");
				$(".left-ul-show ul").eq($(this).index()).css("display","block");
			}).mouseleave(function(){
				$(this).css({"background":""});
				$(this).children("span").find("a").css("color","");
				$(".left-ul-show ul").eq($(this).index()).css("display","none");
			})
			$(".site_cat").mouseover(function(){
				$(this).css("display","block");
			}).mouseout(function(){
				$(this).css("display","none");
			})
		});
		$(".zfooter").load("common.html .footer");
		
			var h = $(".sequences").offset().top;
		$(window).scroll(function(){
	
				var sTop =$(document).scrollTop();
				if(sTop>h){
					$(".sequences").css({"position":"fixed","top":0,"left":"80px","z-index":1000,"background":"#ffffff"})
				}else{
					$(".sequences").css({"position":""});
				}
			})
	
	})
	$.getJSON("json/zhuanti.json",function(json){
				var conStr="";
				for(var attr in json){
					var list = json[attr];
					//for(var i=0;i<list.length;i++){
						//var product = list[i];
					for(var j = 0;j<30;j++){
						conStr +=`<li>
							<div class="pro-show">
								<div class="pro-icon"></div>
								<div class="pro-img">
									<a href="javascript:;">
										<img src="images/${list[j].src}.jpg"/>
									</a> 
								</div>
								<div class="pro-money">
									<div class="money-fl">￥${list[j].money}</div>
								</div>
								<div class="product-comment">
									<div class="pro-name two-line">
										<a href="javascript:;">${list[j].name}</a>
									</div>
								</div>
								<div class="pro-assess">
									<div class="pro-assess-right">${list[j].form}</div>
								</div>
								<div class="pro-button">
									<button type="button" class="btn btn-primary addCard">加入购物车</button>
								</div>
							</div>
						</li>`;
						//}
					}
				}
				$(".pro-class").html(conStr);
				
				$('.M-box').pagination({
				pageCount: Math.ceil(list.length/30),
			    callback:function(api){
			        var data = {
			            page: api.getCurrent(),
			        };
			        var index = data.page;
			    $.getJSON("json/zhuanti.json",function(json){
			            console.log(json);
			            var str = "";
			            for(var attr in json){
			            	var list = json[attr];
				            for( var i = (index-1)*30;i<index*30 ; i++ ){
				            	if( i < list.length ){
	
				            		
					            	str += `<li>
												<div class="pro-show">
													<div class="pro-icon"></div>
													<div class="pro-img">
														<a href="javascript:;">
															<img src="images/${list[i].src}.jpg"/>
														</a> 
													</div>
													<div class="pro-money">
														<div class="money-fl">￥${list[i].money}</div>
													</div>
													<div class="product-comment">
														<div class="pro-name two-line">
															<a href="javascript:;">${list[i].name}</a>
														</div>
													</div>
													<div class="pro-assess">
														<div class="pro-assess-right">${list[i].form}</div>
													</div>
													<div class="pro-button">
														<button type="button" class="btn btn-primary addCard">加入购物车</button>
													</div>
												</div>
											</li>`
				            	}
				            	$(".pro-class").html(str);
				            	dongtai();
				            }
			            }
			        });
			    }
			});
				dongtai();
			})
		//})
					
		function dongtai(){
			$(".list-class span").mouseenter(function(){
					$(this).find("img").css("display","none");
					$(this).find("i").css({"display":"block","background":"#f7edda"});
					$(this).parent().css({"border":"1px solid orange"})
				}).mouseleave(function(){
					$(this).find("img").css("display","block");
					$(this).find("i").css("display","none");
					$(this).parent().css("border","1px solid #eee")
				})
					var flag = true;
					$(".frbutton3").click(function(){
						if(flag){
							flag=false;
							$(this).parent().next().children(".show1").css("display","none");
							$(this).parent().next().children(".multiselect").css("display","block");
							$(this).parent().next().children(".multiselect").children(".showbutton").css("display","block");
							
						}else{
							flag=true;
							$(this).parent().next().children(".show1").css("display","block");
							$(this).parent().next().children(".multiselect").css("display","none");
							$(this).parent().next().children(".multiselect").children(".showbutton").css("display","block");
						}
					})
					$(".frbutton2").click(function(){
						if(flag){
							flag=false;
							$(this).html("收起");
							$(this).parent().next().children(".show1").css({"overflow":"visible"});
						}else{
							flag = true;
							$(this).html("展开");
							$(this).parent().next().children(".show1").css({"overflow":"hidden"});
						}
						
					})
			
					/*$(".frbutton3").click(function(){
						$(this).parent().next().children(".show1").css("display","block");
						$(this).parent().next().children(".multiselect").css("display","none");
					})*/
				
				
				$(".pro-img").click(function(){
					location.href = "xiangqing.html";
				})
				$(".pro-class li").mouseenter(function(){
					$(".pro-show").eq($(this).index()).css("border","1px solid #e6133c");
				}).mouseleave(function(){
					$(".pro-show").eq($(this).index()).css("border","");
				})
				/*$(".pro-class li").each(function(index){
					$(this).eq(index).find(".btn-primary").css({"background":"#e6133c","color":"white"});
				})*/
				$(".btn-primary").mouseenter(function(){
					$(this).css({"background":"#e6133c","color":"white"});
				}).mouseleave(function(){
					$(this).css({"background":"white","color":"#e6133c"});
				})
		}
	//}
	/*return {
		fn : fn
	}*/
//})