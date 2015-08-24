var React = require('react');
var TodoItem = require('./TodoItem.react');

var TodoTextInput = require('./TodoTextInput.react');
var TodoActions = require('../actions/TodoActions');

var MainSection = React.createClass({
	render: function() {

		var todos = [];
		var allTodos = this.props.allTodos;

		for (var key in allTodos) {
			todos.push(<TodoItem key={key} todo={allTodos[key]} />);
		}

		return (
			<section id="main">
			<TodoTextInput id="new-todo" placeholder="Enter new todo item" onSave={this._onSave}/>
			<ul id="todo-list">{todos}</ul>
			</section>
		);
	},

	_onSave: function(text) {
    	TodoActions.create(text);
  	}

});

module.exports = MainSection;