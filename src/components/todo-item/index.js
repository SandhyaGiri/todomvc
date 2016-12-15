'use strict';

module.exports = require('marko-widgets').defineComponent({
	template : require('./template.marko'),

	getInitialState : function(input){
		return input;
	},

	getTemplateData : function(state, input){
		return state;
	},

	handleTodoItemClick : function(event, el){
		if(this.state.completed){
			this.setState('completed', false);
			this.emit('activate', this.state.index);
		} else {
			this.setState('completed', true);
			this.emit('complete', this.state.index);
		}
	}
});