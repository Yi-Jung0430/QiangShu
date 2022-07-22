/*
適合版本:koha_21.05
*/
// ========== 2022/07/08 copy 敏實 koha code ======================
var html_lang = $('html').attr('lang');

//頁頭設計 - 自訂LOGO -- 開始
// $(document).ready(function(){
// 	$(".mastheadsearch").before('<a class="custom_logo" target="_blank" href="https://lib.mitust.edu.tw"><img src="https://lib.mitust.edu.tw/var/file/13/1013/img/Lib.jpg" ></a>');
// });
//頁頭設計 - 自訂LOGO -- 結束


//頁頭設計 - 插入新的【圖書館首頁】 -- 開始
$(document).ready(function(){
	var new_html;
	if(html_lang == "en"){
		new_html = '<li><a target="_blank" href="https://lib.mitust.edu.tw"><i class="fa fa-home fa-icon-white"></i><span class="cartlabel">Home</span></a></li>';
	}else{
		new_html = '<li><a target="_blank" href="https://lib.mitust.edu.tw"><i class="fa fa-home fa-icon-white"></i><span class="cartlabel">圖書館首頁</span></a></li>';
	}
	$("#cartDetails + ul.nav").prepend(new_html);
});
//頁頭設計 - 插入新的【圖書館首頁】 -- 結束


//首頁把頁頭移到主內容裡 -- 開始
$(document).ready(function(){
	var html1 = $("#opacheader").html();
    var html2 = $("#opac-main-search").html();
    var html3 = $("#moresearches").html();
	$("#opacheader").remove();
    $("#opac-main-search").remove();
    $("#moresearches").remove();
	// $(".main").prepend('<div class="container-fluid"><div class="row">' + html1 + html2 + html3 + '</div></div></div>');
    $(".main").prepend( '<ul id="moresearches">'+ html3  +'</ul>');
    $(".main").prepend( '<div id="opac-main-search">'+ html2  +'</div>');
    $(".main").prepend( '<div id="opacheader">'+ html1  +'</div>');
});
//首頁把頁頭移到主內容裡 -- 結束


//頁尾設計 - 插入導覽列 -- 開始
$(document).ready(function(){
	var html = $(".breadcrumb").html();
	$(".breadcrumb").remove();
	$("#opaccredits").prepend('<div class="breadcrumb">' + html + '</div>');
	//
	$(".breadcrumb li:first-child a").prepend('<i class="fa fa-home"></i> ');
	$(".breadcrumb .divider").html(' <i class="fa fa-angle-right"></i> ');
});
//頁尾設計 - 插入導覽列 -- 結束

//最新消息的出版日期移到標題內 -- 開始
$(document).ready(function(){
	$("#news .newsitem").each(function(index, element) {
		var html = $(this).find(".newsfooter").html();
		$(this).find(".newsheader a").before("<div>" + html + "</div>");
	});
});
//最新消息的出版日期移到標題內 -- 結束

// ========== 2022/07/22 新增 ======================
// 把 #login 拿掉
$(document).ready(function(){
	$("#login").remove();
});

// 把 #notloggedin 拿掉
$(document).ready(function(){
	$("#notloggedin").remove();
});