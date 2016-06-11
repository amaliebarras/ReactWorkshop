var TodoForm = React.createClass ({
	getInitialState: function() {
		return: {todoInput: ''}
	},
	changeInput: function(event) {
		this.setState({todoInput: event.target.value})
	},
  handleSubmit: function(event) {
    event.preventDefault();
    console.log ('event', event.target)
    var newTodo = event.target.value()
      console.log('newTodo', newTodo)
    //push newTodo into the Todos
    var oldTodoList = this.props.todos
    var updatedTodoList =
    oldTodoList.push(newTodo)
    this.props.addTodo(oldTodoList)
    //call addTodo to update parent state
  },
	render: function() {
		return (
			<form>
				<input onchange={}type="text" placeholder="enter Todo"/>
				<button onclick={this.handleSubmit}>Enter</button>
			</form>
		)
	}
})

var TodoList = React.createClass ({
	render: function() {
		return (
			<div>
              ToDoList
            </div>
		)
	}
})

var App = React.createClass ({
    getInitialState: function() {
      return {todos: []}
    },
    addTodo: function(updatedTodos) {
      this.setState({todos: updatedTodos})
    },
	render: function() {
		return (
			<div> 
				<TodoForm todos={this.state.todos}{addTodo=this.addTodo} />
                <TodoList/>
			</div>
		)
	}
})


ReactDOM.render (
	<App />,
	document.getElementById('app')
)