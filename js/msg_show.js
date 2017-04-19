$(function() {
			var html = '';
			$.ajax({
						type: "get",
						url: "data/msg_show.php",
						success: function(data) {
								$.each(data, function(i, obj) {
					html+=` <blockquote class = "blockquote-reverse"><p>${obj.msg}</p><footer>${obj.uname}<cite title="Source Title">${obj.time}</cite></footer></blockquote>
					`
					;
				});
			
            $("#msgboard").html(html);
            m.val()='';
		},
		error:function(){
			console.log('cuowu');
			}
		});
	})