Todo.Views.Entry =Backbone.View.extend({
	template: JST['entries/entry'],
	tagName:'li',
	className:'entries',

	events:{
		'click .delete':'removeEntry',
		'dblclick .entryli': 'editEntry',
		'keyup .edit_entry': 'updateEntry',
		'click #toggle': 'doneSingleEntry'
	},
	initialize: function(){
		this.model.on("change",this.render,this);
		this.model.on('change', this.updateCounter, this);
	},
	render:function(){         
		$(this.el).html(this.template({entry: this.model}));
		this.updateCounter();
		return this;
	},
	removeEntry:function(){
		this.model.destroy()
	},
	editEntry:function(){
		if($.find('.edit_entry').length == 1){
			window.prev_view.render()
		}
		window.prev_view = this		
		$(this.el).html('<input type="text" class="form-control edit_entry" value="' + this.model.get('name') + '">');
	},
	updateEntry:function(event){
		if(event.keyCode == 13){
			this.model.save({name: event.currentTarget.value})
		}
	},
	doneSingleEntry:function(){
		value = this.$("#toggle")[0].checked;		
		this.model.save({done:value});
	},
	updateCounter: function(event){
		$('.todo-count').html(this.collection.where({done: 'false'}).length + ' items left');
	}
});