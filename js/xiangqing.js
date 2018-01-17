define(function(){
	function fn(){
		
		$(function(){
			$(".xright").load("common.html .right-slidebar",function(){
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
			$(".xtop").load("common.html .tools",function(){
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
			$(".xheader").load("common.html .header");
			$(".xnav").load("common.html .nav",function(){
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
			
			$("#bottom li").mouseenter(function(){
				var index = $(this).index();
				$("#small img").eq(index)
							   .show()
							   .siblings()
							   .hide();
				$("#big img").eq(index)
							 .show()
							 .siblings()
							 .hide();
				$("#mask").css({
					"backgroundImage":"url(images/"+(index+1)+"m.jpg)"
				})
			})
			$("#small").mouseover(function(){
				$("#layer").show();
				$("#mask").show();
				$("#big").show();
			}).mouseout(function(){
				$("#layer").hide();
				$("#mask").hide();
				$("#big").hide();
			}).mousemove(function(e){
				var e = e || event;
				var x = e.pageX - $("#small").offset().left - $("#mask").outerWidth()/2;
				var y = e.pageY - $("#small").offset().top - $("#mask").outerHeight()/2;
				var maxL = $("#box").outerWidth() - $("#mask").outerWidth();
				var maxT = $("#box").outerHeight() - $("#mask").outerHeight();
				
				x = Math.min( maxL , Math.max(0,x) );
				y = Math.min( maxT , Math.max(0,y) );
				
				$("#mask").css({
					"left" : x ,
					"top" : y ,
					"backgroundPositionX" : -x,
					"backgroundPositionY" : -y
				})
				//大图/小图 = 大图left / mask . left = 大图显示区 /小图显示区mask
				var bigImgX = x*$(".bigImage").width()/$("#small").width();
				var bigImgY = y*$(".bigImage").height()/$("#small").height();
				$(".bigImage").css({
					"left" : -bigImgX,
					"top" : -bigImgY
				})
			})
			$(".btn-down-disable").click(function(){
				var count = parseInt($("#itemnumber").val());
				if(count>1){
					$("#itemnumber").val(--count);
					
				}
			})
			$(".btn-add").click(function(){
				var count = parseInt($("#itemnumber").val());
				if(count<99){
					$("#itemnumber").val(++count);
				}
				
			})
			$("#itemnumber").blur(function(){
				if($("#itemnumber").val()==100){
					alert("限购99");
				}
			})
			/*xiding*/
			$(window).scroll(function(){
					var h = 1200;
					var sTop =$(document).scrollTop();
					if(sTop>h){
						$(".product-tab").css({"position":"fixed","top":0,"z-index":"2000"})
					}else{
						$(".product-tab").css({"position":""});
					}
			})
			$("#proinfo-main-menu li").click(function(){
				$(this).addClass("select")
						.siblings()
						.removeClass("select");
			})
			$(".xfoorter").load("common.html .footer");
			$("#proinfo-main-menu .ssl").click(function(){
				var _tops = $(".comment").offset().top;
				_tops-=40;
				$("body,html").animate({"scrollTop":_tops},100);
				console.log(_tops);
			})
		})
	}
	return {
		fn : fn
	}
})
