TrelloClone.Routers.Router = Backbone.Router.extend({

	initialize: function(options){
		this.$main = options.main
		this.collection = new TrelloClone.Collections.Boards();
	},

	routes: {
		"": "boardsIndex",
		"boards/:id/": "boardShow"
	},

	boardsIndex: function() {
		this.collection.fetch();

		var boardView = new TrelloClone.Views.BoardsIndex({ collection: this.collection });

		this._swapViews(boardView);
	},

	_swapViews: function(newView){
		if(this.currentView){
			this.currentView.remove();
		}
		this.$main.html(newView.render().$el);
		this.currentView = newView;
	}
});
