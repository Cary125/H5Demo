 $(document).ready(function (){
// 	function btn1(){
//	if(!$('#nameMen').value && !$('#nameWomen').value) {
//	alert("请输入姓名！"); 
//	$('#nameMen').focus();
//	$('#nameWomen').focus(); 
//	return false;
//	}
//	else {
//		window.location.href ="index2.html";
//	}
// }
// 	var name_Men=$('#nameMen').val();
//	var name_Women=$('#nameWomen').val();
//	var senfont=$('.ble_con').val();
//	var imglist=$(this).attr('title');
// 	$('.imgs li').on('click',function(){
// 		var imglist=$(this).attr('title');
//		$(this).attr('class','selected').siblings().attr('class','');
// })
	$('.btn_temp').on('click',function(){
		var name_Men=$('#nameMen').val();
		var name_Women=$('#nameWomen').val();
		$('#names').hide();
		$('#imgs').show();
		$('.imgs li').on('click',function(){
		var imglist=$(this).attr('title');
		$(this).attr('class','selected').siblings().attr('class','');
		$('.btn_full').on('click',function(){
			$('#imgs').hide();
			$('#sentiments').show()
		})
		$('.btn_generate').on('click',function(){
			var senfont=$('.ble_con').val();
			$('#sentiments').hide()
			$('#show_bg').show();
			$('.show_img ').attr('src',imglist);
			$('.show_name #name1').html(name_Men);
			$('.show_name #name2').html(name_Women);
			$('.show_txt .sent').html(senfont);
			$('.btn_share').on('click',function(){
				$('.share_date').animate({bottom:0},'slow');
				$('.share_date ').on('click',function(){
					var thisHeight=$('.share_date').height()
					$('.share_date').animate({bottom:-thisHeight},'slow');
				})
			})
		})
	})
	})
})