
var customers;

var init = function(){	
	customers = new customers();
	
	customers.loadCards(
		function(cards)
		{
			console.log("Cards Loaded : " + customers.cards.length);

			var source = $("#card-list-template").html();
			var template = customers.compile(source);

			var context = {cards:customers.cards};
			var html = template(context);
			$("#card-list").html(html);

		}
	);
}
