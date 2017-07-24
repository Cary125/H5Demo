
 $(document).ready(function () {
	
	$('#btn1').on('click',function(){
		var name_Men=$('#nameMen').val();
		var name_Women=$('#nameWomen').val();
		var nemelist=name_Men+name_Women
		$('#sentiments').hide()
		$('#names').hide();
		$('#imgs').show();
		$('#imgs img').on('click',function(){
		var imglist=$(this).attr('src');
		$('#btn2').on('click',function(){
			$('#imgs').hide();
			$('#sentiments').show()
		})
		$('#btn3').on('click',function(){
			var senfont=$('#sentiment').val();
			$('#sentiments').hide()
			$('#show_bg').show();
			$('img').attr('src',imglist);
			$('.show_txt #show_name').html(nemelist);
			$('.show_txt #sent').html(senfont);
		})
	})
	})
	
	
	
});