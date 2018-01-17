define(function(){
	function fn(){
$(function(){
	$(".xqright").load("common.html .right-slidebar",function(){
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
	//头部
	$(".xqtools").load("common.html .tools",function(){
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
	
	if(document.cookie){
		str=JSON.parse(getCookie("prolist")).name;
		$(".login-button span").html(str);
	//alert(str)
	}
	
	$(".xqheader").load("common.html .header");
	$(".xqnav").load("common.html .nav",function(){
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
	$(".xqfooter").load("common.html .footer");
	
	//var f = $(".xqfooter").offset().top;
	var h = $(".basket-content").offset().top;
	//var wh = $(window).innerHeight();
			
	$(window).scroll(function(){
		var sTop =$(document).scrollTop();
		sTop = sTop-(h*4);
		if(sTop<h){
			$(".basket-content").css({"position":"fixed","top":"sTop","z-index":1000,"background":"#ffffff"});
		}else{
			$(".basket-content").css({"position":""});
		}
		//console.log(sTop);
		//console.log(h+"dd");
	})
})
$.getJSON("json/xiangqing2.json",function(json){
	
				var conStr = "";
				for(var attr in json){
					var list = json[attr];
					for(var i = 0;i<list.length;i++){
						var product = list[i];
						conStr+=`<li class="noleft">
									<div class="border-frame">
										<a href="javascript:;" class="pic">
											<img src="images/${product.src}.jpg" class="lazytag"/>
										</a>
										<div class="comment">
											<a href="javascript:;" class="intro">
												${product.infor}
											</a>
											<div class="price">
												<i>￥</i>${product.money}
												<font class="s17"></font>
											</div>
										</div>
										<i class="arrow"></i>
										<button class="buy-button"></button>
										<span style="display:none" data-infor="${product.infor}" data-money="${product.money}" data-src="${product.src}" ></span>
									</div>
								</li>`;
					}
				}
				$(".three-commodity").html(conStr);
				$(".buy-button").hover(function(){
					$(this).css("background-position-y",-32);
				},function(){
					$(this).css("background-position-y",0);
				})
				var arr = [];
				
				//点击按钮添加
				$(".three-commodity").on("click","button",function(){
					
					var flag = true;
					var proJson = {
						infor : $(this).next().data("infor"),
						src : $(this).next().data("src") ,
						money : $(this).next().data("money"),
						count : 1
					}
					var oldcookie = getCookie("list");
					if(oldcookie.length!=0){
						arr == oldcookie;
						for(var i = 0;i<arr.length;i++){
							if(proJson.infor==arr[i].infor){
								arr[i].count++;
								flag = false;
								break;
								
							}
							
						}
					}
					
					if(flag){
						arr.push(proJson);
					}
					setCookie( "list", JSON.stringify(arr) );
					//console.log(arr);
					var str = "";
					for(var i = 0;i<arr.length;i++){
						var shop = arr[i];
						nm = shop.money * shop.count;
						str +=`<li style="" class="lis">
									<div class="single">
										<a href="javascript:;" class="del" title="删除"></a>
										<div class="pic">
											<img src="images/${shop.src}.jpg" width="70" height="70" style="display: inline;"/>
										</div>
										<div class="comment-frame">
											<div class="price">
												<i>¥</i><i class="pi">${nm}</i>
											</div>
											<input type="hidden" value="${shop.count}" name="totalSum">
											<input type="hidden" value="${shop.money}" name="danjia">
											<input type="hidden" value="${shop.infor}" name="goodName" >
											<div class="numberframe">
												<div class="addnumber" data-count="${shop.count}" data-infor="${shop.infor}" data-money="${shop.money}">
													<input type="text" class="addtext" name="count" placeholder="" id="" maxlength="3" value="${shop.count}">
													<a href="javascript:void(0);" class="updateCount add" data-number="1"></a>
													<a href="javascript:void(0);" class="updateCount minus" data-number="-1"></a>
													<span style="display:none" data-sum="${shop.count*shop.money}" class="zong">${shop.count*shop.money}</span>
												</div>
											</div>
										</div>
									</div>
								</li>`;
								
								
								/*parseFloat(shop.count * shop.money).toFixed(1)*/
					}
					
					$(".slides").html(str);
					jiesuan();
					$(".word1 .greyfont").html("已选择"+(Number(sumCount))+"件商品，");
								$(".word1 .redfont").html("还差"+0+"件");
								$(".word2 .redfont").html("篮筐价："+parseFloat(moneyCount).toFixed(1) +"元 已节省：0.00元");
								
								
					$(".updateCount").click(function(){
						var pinfor = $(this).parent().data("infor");
						var num =$(this).parent().find(".addtext").val();//当前商品数量
						//proJson.count = $(".addtext").val(++num);
						var sign = $(this).data("number");
						if(sign==-1&&num==1){
							
							return ;
						}
						for(var i = 0;i<arr.length;i++){
							if(pinfor==arr[i].infor){
								sign==1?arr[i].count++ : arr[i].count--;
								
								setCookie("list",JSON.stringify(arr));
								$(this).parent().find(".addtext").val(arr[i].count);
								//arr[i].count+=arr[i].count;
								
								var nl = $(this).parent().parent().parent().find(".price").html("￥"+parseFloat(arr[i].count * arr[i].money).toFixed(1));
								jiesuan();
								
								$(".word1 .greyfont").html("已选择"+sumCount+"件商品，");
								$(".word1 .redfont").html("还差"+0+"件");
								
								$(".word2 .redfont").html("篮筐价："+ parseFloat(moneyCount+((arr[i].count-1) * arr[i].money)).toFixed(1)+"元 已节省：0.00元");
								break;
								/*parseFloat(arr[i].count * arr[i].money).toFixed(1)*/
							}
						}
					})
					$(".lis").mouseenter(function(){
						$(this).find(".del").css("display","block");
					})
					$(".lis").mouseleave(function(){
						$(this).find(".del").css("display","none");
					})
					$(".del").click(function(){
						var pinfor = $(this).parent().find(".addnumber").data("infor");
						for( var i = 0 ; i < arr.length ; i++ ){
							jiesuan()
							if( pinfor == arr[i].infor ){ //确定了要删除的商品  
								//删除 i 位置处的 商品  splice
								arr.splice(i,1);
								//重新设置cookie
								setCookie("list",JSON.stringify(arr));
								break;
							}
						}
						$(this).parent().parent().remove();
						nc = $(this).parent().find(".addtext").val();
						nmc = $(this).parent().find(".zong").html();
						/*alert(nmc);
						alert(Number(moneyCount)-nmc);*/
						$(".word1 .greyfont").html("已选择"+(Number(sumCount)-Number(nc))+"件商品，");
						
						$(".word2 .redfont").html("篮筐价："+0.00+"元 已节省：0.00元");
						if((Number(sumCount)-Number(nc)) ==0){
								$(".word1 .redfont").html("还差"+1+"件");
								$(".word2 .redfont").html("篮筐价："+0.00+"元 已节省：0.00元");
						}else{
							$(".word2 .redfont").html("篮筐价："+(parseFloat(moneyCount).toFixed(1)-parseFloat(nmc))+"元 已节省：0.00元");
						}
					})
					//setCookie("list",JSON.stringify(arr));
					//console.log(document.cookie);
				})
			
			
		});
		//结算
		
		function jiesuan(){
			 sumCount = 0;
			 moneyCount = 0;
			$(".slides li").each(function(){
				sumCount += Number($(this).find(".addtext").val());
				moneyCount += Number($(this).find(".zong").html());
				
			})
			
		}
		
	}	
	return {
		fn : fn
	}
})		