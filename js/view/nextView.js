var NextView = function (container,model) {

	$('#search').click(function(){
		var searchWord = $('#searchWord').text();
		var selectedList = model.getAllDishes(,searchWord);
	})
	
	$('#selecter').click(function(){
		var selectVal = $("#selecter option:selected").text();
		// alert("1");
		var selectedList = model.getAllDishes(selectVal,);
	})
}