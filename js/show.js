$(function(){
  loadProduct(1);
});


function loadProduct(pno){
	$.ajax({
		url:"data/msg.php?pageNum="+pno,
		 success:function(pager){
		 var html = "";
		 $.each(pager.data,function(i,obj){
					html+=` <blockquote><p>${obj.msg}</p><footer>${obj.uname}</footer>
					<footer><cite title="Source Title">${obj.time}</cite></footer></blockquote>
					`;
				});
			
            $("#msgboard").html(html);
            
            var html = "";
//          html += `<li>
//    <a href="#" aria-label="Previous">
//      <span aria-hidden="true">&laquo;</span>
//    </a>
//  </li>`;
var size = pager.pageCount;
for(var i=1;i<=size;i++){
   html += `<li><a href="#">${i}</a></li>`;
}
//          html += `<li>
//    <a href="#" aria-label="Next">
//      <span aria-hidden="true">&raquo;</span>
//    </a>
//  </li>`;
$("ul.pager").html(html);

	 }
});

}


//3:分页中添加点击事件
$("ul.pager").on("click","li a",function(e){
	//0:阻止默认事件行为

	e.preventDefault();
  //1:获得当前页数
	var pno = $(this).html();
	//2:调用函数 loadProduct
	loadProduct(pno);

});



$('ul.pager li').click(function(){
$('ul.pager li').addClass("active");


});