//change load on first

var garlicBread;

var init = function(){	
	garlicBread = new garlicBread();
	
	garlicBread.loadCards(
		function(cards)
		{
			console.log("Cards Loaded : " + garlicBread.cards.length);

			var source = $("#card-list-template").html();
			var template = Handlebars.compile(source);

			var context = {cards:garlicBread.cards};
			var html = template(context);
			$("#card-list").html(html);

		}
	);
}
