
 $(document).ready(function () {
	$('#names>img').animate({opacity:1},'slow','swing');
	$('#btn1').on('click',function(){
		var name_Men=$('#nameMen').val();
		var name_Women=$('#nameWomen').val();
		$('#names').animate('slow').addClass('add_transform');
		$('#imgs').show();
		$('#imgs ul li').on('click',function(){
		var imglist=$(this).children().attr('src');
		$(this).attr('class','selected').siblings().attr('class','');
		$('#btn2').on('click',function(){
			$('#imgs').hide();
			$('#sentiments').show()
		})
		$('#btn3').on('click',function(){
			var senfont=$('#sentiment').val();
			$('#sentiments').hide()
			$('#show_bg').show();
			$('.show_img .img_bg').attr('src',imglist);
			$('.show_txt #name1').html(name_Men);
			$('.show_txt #name2').html(name_Women);
			$('.show_txt #sent').html(senfont);
		})
	})
	})
	var viewHeight = window.innerHeight; //获取可视区域高度
	$("input").focus(function()
	{
	    $("#main").css("height",viewHeight);
	}).blur(function()
	{
	    $("#main").css("height","100%");
	});
	
	
});