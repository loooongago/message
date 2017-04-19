//$("#sub").click(function(){
//	var m=$("#msg");
//  var html = '';
//	$.ajax({
//		type:"post",
//		url:"data/msg_submit.php",
//		data:{uname:"qiangdong",msg:m.val()},
//
//		success:function(data){
//			$.each(data,function(i,obj){
//					html += ` 
//					 <li><b>${obj.uid}</b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${obj.msg}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${obj.time}</li>
//					`;
//				});
//          $("#msgboard").html(html); 
//			
//			
//		},
//		error:function(){
//			console.log('cuowu');
//			}
//		});
//	})
//		
$(function(){
    var html = '';
	$.ajax({
		type:"get",
		url:"data/msg_show.php",
		success:function(data){
			$.each(data,function(i,obj){
					html += ` 
					 <li><b>${obj.uid}</b>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${obj.msg}&nbsp&nbsp&nbsp&nbsp&nbsp${obj.time}</li>
					`;
				});
            $("#msgboard").html(html); 	
		},
		error:function(){
			console.log('cuowu');
			}
		});
	})
	
	

















