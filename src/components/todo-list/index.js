'use strict';

module.exports = require('marko-widgets').defineComponent({
	template : require('./template.marko'),

	getInitialState : function(input){
		input.todoItems = input.todoItems || [];
		input.completed = input.todoItems.filter(function(todo){
			return todo.completed;
		}).length;
		return input;
	},

	getTemplateData : function(state, input){
		return state;
	},

	handleKeyPress : function(event, el){
		//If the key pressed is not an enter-key or the input is empty, then return
		if((event.keyCode !== 13) || (!$(el).val())){
			return;
		}
		this.state.todoItems.push({
			title : $(el).val(),
			completed : false
		});
		this.setStateDirty('todoItems', this.state.todoItems);
	},

	activateTodo : function(index){
		this.state.todoItems[index].completed = false;
		this.recalculateCompleted();
	},

	completeTodo : function(index){
		this.state.todoItems[index].completed = true;
		this.recalculateCompleted();
	},

	recalculateCompleted : function(){
		var completed = this.state.todoItems.filter(function(todo) {
            return todo.completed;
        }).length;
        this.setState('completed', completed);
	}
});