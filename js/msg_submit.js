$("#sub").click(function(){
	var m=$("#msg");
	var n=$("#uname");
    var html = '';
    
    if(sessionStorage['UserLoginName']===undefined){$("#login").click();}else{
	$.ajax({
		type:"post",
		url:"data/msg_submit.php",
		data:{uname:n.val(),msg:m.val()},

		success:function(data){
			$.each(data,function(i,obj){
					html+=` <blockquote><p>${obj.msg}</p><footer>${obj.uname}</footer>
					<footer><cite title="Source Title">${obj.time}</cite></footer></blockquote>
					`;
				});
            $("#msgboard").html(html); 
		},
		error:function(){
			console.log('cuowu');
			}
		});}
	})
	