define(function(){
	function fn(){
		$(function(){
			//头部
			$(".itools").load("common.html .tools",function(){
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
			
			$(".login-button").click(function(){
				location.href = "login.html";
			})
			$(".registered").click(function(){
				location.href = "register.html";
			})
			/*var str = location.href;
			if(str.indexOf("?")!=-1){
				var arr = str.split("?")[1];
				//setCookie("username",JSON.stringify(arr));
				arr = getCookie("name");
				console.log(arr);
				$(".lg").html(`<span>欢迎光临本店！</span>${arr}`);
				
			}*/
			if(document.cookie){
				str=JSON.parse(getCookie("prolist")).name;
				$(".login-button span").html(str);
				alert(str+"欢迎光临本店！");
			}
			
			
			
			/*轮播banner*/
			var timer = setInterval(autoPlay , 3000);
			var index = 0;
			/*$(".progress-bar-ol li").click(function(){
				var index4 = $(this).index();
				$(".progress-bar-ol li").eq(index4).addClass().addClass("current")
								  .siblings()
								  .removeClass("current");
				$(".main-top-scroll li").eq(index4).toggle(100);
			})*/
			function autoPlay(){
				index++;
				if( index == 8 ){
					index = 0;
				}
				$(".progress-bar-ol li").eq(index)
										.addClass("current")
										.siblings()
										.removeClass("current");
				$(".rollBody ul li").eq(index)
									.fadeIn(2000)
									.siblings()
									.fadeOut(2000);
			}
			$(".progress-bar-ol li").mouseenter(function(){
					clearInterval(timer);
					$(this).addClass("current")
						   .siblings()
						   .removeClass("current")
						   
					index = $(this).index();//重点！！轮播图片要根据当前划过的li的下标出现，就要找到li的下标
					
					$(".rollBody ul li").eq(index)
							  .fadeIn(2000)
							  .siblings()
							  .fadeOut(2000)
				
				})
				
				$(".progress-bar-ol li").mouseleave(function(){
					 timer = setInterval(autoPlay , 3000);
				
				})
				$(".rollBody ul li").mouseenter(function(){
					clearInterval(timer);
				}).mouseleave(function(){
					 timer = setInterval(autoPlay , 3000);
				})
			/*$(".rollBody").mouseenter(function(){
				clearInterval(timer);
				$(".pagechange-div span").css("display","block");
				
			}).mouseleave(function(){
				timer=setInterval(autoPlay , 2000);
				$(".pagechange-div span").css("display","none");
			})*/
			
			/*$(".pagechange-div .prev").click(function(){
				左右按钮
			})*/
			
			
			
			/*轮播右侧*/
			$(".ban_tit2_ul li").mouseover(function(){
				//先清空所有标题样式
				$(".ban_tit2_ul li").eq($(this).index()).css({"background":"#FFFFFF","border-bottom":0});
				//留下当前操作的标题样式
				//this.style.background = "pink";
				$(this).css("background","#ffffff");
				
				//隐藏所有的内容
				$(".ban_tit2_ol li").css("display","none");
				
				//留下当前
				$(".ban_tit2_ol li").eq( $(this).index() ).css("display","block");
			}).mouseout(function(){
				$(".ban_tit2_ul li").eq($(this).index()).css({"background":"#FFFFFF","border-bottom":""});
			})
			/*banner end*/
			$.getJSON("json/data.json",function(json){
					var conStr="";
					for(var attr in json){
						var list = json[attr];
						for(var i=0;i<list.length;i++){
							var product = list[i];
							conStr +=`<li>
									<div class="new_czt_show">
										<a href="#">
											<img src="images/${product.src}"/>
										</a>
										<div class="new_czt_name">
											<a href="#">${product.name}</a>
										</div>
										<div class="new_czt_money">
											<div class="money">￥<span style="font-size: 16px;">${product.money}</span>
												
											</div>
											<div class="price">参考价：￥${product.price}</div>
										</div>
									</div>
								</li>`;
						}
					}
					$(".new_czt_ul").html(conStr);
					
					$(".new_czt_show img").mouseenter(function(){
						
						$(this).stop().animate({"width":145,"height":145},500)
							   .siblings()
							   .stop().animate({"width":140,"height":140},500)
					}).mouseleave(function(){
						$(this).stop().animate({"width":140,"height":140},500);
					})
				})
			
			$(".new_czt_next").click(function(){
				//先将ul向左运动到-966
			 	$(".new_czt_ul").animate({marginLeft : -966},2000,function(){
			 		$(".new_czt_prev").css("display","block");
			 		$(".new_czt_next").css("display","none");
			 	})
			 	
			})
			$(".new_czt_prev").click(function(){
				//控制ul运动的目标值 到0
				$(".new_czt_ul").animate({marginLeft:0},2000,function(){
					$(".new_czt_next").css("display","block");
			 		$(".new_czt_prev").css("display","none");
				})
			})
			$(".new_czt_l img").mouseenter(function(){
					$(this).stop().animate({"width":234,"height":260},500);
			}).mouseleave(function(){
					$(this).stop().animate({"width":224,"height":250},500);
			})
			
			
			$(".new_tm_r img").mouseenter(function(){
				$(this).stop().animate({"width":300,"height":200},500);
			}).mouseleave(function(){
					$(this).stop().animate({"width":285,"height":180},500);
			})
			/*floor*/
			$(".floor_main img").mouseenter(function(){
				$(this).stop().animate({"margin-left":"-10px"},500)
							   .siblings()
							   .stop().animate({"margin-left":"0"},500);
			}).mouseleave(function(){
				$(this).stop().animate({"margin-left":"0"},500);
			})
			$(".floor_mainb_b img").mouseenter(function(){
				$(this).stop().animate({"opacity":0.5,"margin-left":"0"},500)
						.siblings()
						.stop().animate({"opacity":1,"margin-left":"0"},500);
			}).mouseleave(function(){
				$(this).stop().animate({"opacity":1,"margin-left":"0"},500);
			})
			$(".helpnav a").hover(function(){
				$(this).css({"color":"red"});
			},function(){
				$(this).css({"color":""});
			})
			//window.onscroll = function(){
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
					
					
					/*$(".last").click(function(){
						 $("body,html").animate({"scrollTop" : 0},1000)
					})*/
			//}
					
					/*louti*/
					var h = $(".floor1").outerHeight();
					window.onscroll = function(){
						var scrollTop = $(document).scrollTop()-$(".floor1").offset().top; 
						$("#floor>.floor").each(function(index){
							if(scrollTop<-h/2){
								$("#stairs").css("display","none");
							}else if(scrollTop>$("#floor").outerHeight()-h/2){
								$("#stairs").css("display","none");
							}else if( scrollTop > (h*index-h/2)){
								$("#stairs").css("display","block");
								$("#stairs>li").find("span").css({"display":"none","background":"darkred"});
								$("#stairs>li").eq(index).css("background","white").find("span").css("display","block");
							}
						})
						
					}
					$(".last").click(function(){
						$("body,html").animate({"scrollTop" : 0 },1000);
					})
					$("#LoutiNav li:not(.last)").click(function(){
							$(this).find("span")
									.addClass("active")
									.end()
									.siblings()
									.find("span")
									.removeClass("active");
							var _top = $(".floor").eq($(this).index()).offset().top;		
							$("body,html").animate({"scrollTop":_top},1000);
							
					})
				var index2 = 0;
				var timer1 =setInterval(auto,3000);
				function auto(){
					index2++;
					if(index2==3){
						index2=0;
					}
					$("#floor>.floor").each(function(index3){
						$("#floor>.floor").eq(index3).find(".main-top-scroll2 li")
													.eq(index2)
													.css("display","block")
													.siblings()
													.css("display","none");
						$("#floor>.floor").eq(index3).find(".pagechange-bar-ol li")
													.eq(index2)
													.css("background","#889285")
													.siblings()
													.css("background","white");
						
					})
					
				}
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
				$(".new_tm_r").on("click","li",function(){
					location.href = "xiangqing2.html";
				})
				$(".site_cat1 .clearfix h2 a").click(function(){
					location.href = "zhuanti.html";
				})
		})
	}
	return {
		fn : fn
	}
})
