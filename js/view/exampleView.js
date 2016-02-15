//ExampleView Object constructor
var ExampleView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.totalPrice = container.find("#totalPrice");

	this.numberOfGuests.html(model.getNumberOfGuests());

	this.totalPrice.html(model.getTotalMenuPrice()+" SEK ");	// this one needs to execute after add dish

	$('#minusGuest').click(function(){
		model.setNumberOfGuests(-1);
		$('#numberOfGuests').html(model.getNumberOfGuests())
	})
	
	$('#plusGuest').click(function(){
		model.setNumberOfGuests(1);
		$('#numberOfGuests').html(model.getNumberOfGuests())
	})

	$('#confirm').click(function(){
		window.location.href = "index.html";			// this address needs to change into next page
	})

	$("#mealb").click(function() {
  	var lastRow = $('#totalTable tbody > tr:last').after('<a href="lasagna.html"><tr><td>' + "bakedbrie" + '</td><td>' + "price" + '</td></tr></a>')
  	window.location.href = "lasagna.html";
  	// model.addDishToMenu(3);
  	// $("#totalPrice").html(model.getTotalMenuPrice()+" SEK ");
  	})

  	$("#meali").click(function() {
  	var lastRow = $('#totalTable tbody > tr:last').after('<a href="lasagna.html"><tr><td>' + "icecream" + '</td><td>' + "price" + '</td></tr></a>')
  	window.location.href = "lasagna.html";
  	// model.addDishToMenu(200);
  	// $("#totalPrice").html(model.getTotalMenuPrice()+" SEK ");
  	})

  	$("#mealm").click(function() {
  	var lastRow = $('#totalTable tbody > tr:last').after('<a href="lasagna.html"><tr><td>' + "meatballs" + '</td><td>' + "price" + '</td></tr></a>')	
  	window.location.href = "lasagna.html";
  	// model.addDishToMenu(100);
  	// $("#totalPrice").html(model.getTotalMenuPrice()+" SEK ");
  	})

  	// $("#delb").click(function() {
  	// var lastRow = $('#totalTable tbody > tr:last').after('<tr><td>' + "bakedbrie" + '</td><td>' + "price" + '</td></tr>')
  	// model.addDishToMenu(3);
  	// this.totalPrice.html(model.getTotalMenuPrice()+" SEK ");
  	// })

  	// $("#deli").click(function() {
  	// var lastRow = $('#totalTable tbody > tr:last').after('<tr><td>' + "icecream" + '</td><td>' + "price" + '</td></tr>')
  	// model.addDishToMenu(200);
  	// this.totalPrice.html(model.getTotalMenuPrice()+" SEK ");
  	// })

  	// $("#delm").click(function() {
  	// var lastRow = $('#totalTable tbody > tr:last').after('<tr><td>' + "meatballs" + '</td><td>' + "price" + '</td></tr>')
  	// model.addDishToMenu(100);
  	// this.totalPrice.html(model.getTotalMenuPrice()+" SEK ");
  	// })

}