window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	var $main = $('#main')
  	//make router
  	new TrelloClone.Routers.Router({ main: $main });
  	Backbone.history.start();
  	//start history
  }
};

