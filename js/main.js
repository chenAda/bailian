require.config({
	paths : {
		"jquery" : "jquery-1.11.1",
		"index" : "index",
		"also" : "also_like",
		"xq" : "xiangqing",
		"xq2" : "xiangqing2",
		//"zt" : "zhuanti",
		
	}
})
require(["jquery","index","also","xq","xq2"],function($,index,also,xq,xq2){
	
	index.fn();
	also.fn();
	xq.fn();
	xq2.fn();
	//zt.fn();
})