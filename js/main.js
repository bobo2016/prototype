(function($){
	$(function(){
		var $thumbnail = $("#productGrid .thumbnail");
		$thumbnail.hover(function(){
			$(this).find(".overlay").removeClass('hidden');
		},function(){
			$(this).find(".overlay").addClass('hidden');
		});

		var $nav = $(".glyphicon"),
			$navList = $(".nav");
		$nav.click(function(){
			$navList.toggleClass("show");
		})
	})
})(window.jQuery)