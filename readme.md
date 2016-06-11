#React Workshop 

##What is React?

* V in MVC
	* Just tells ya how to render things
* Virtual DOM 
	* Increased Performance
	* Declarative
* Build Components
	* Code reuse, separation of concerns, testing
	* So your designer can mess with compomnents without breaking the whole app

	### More about the virtual DOM:
	React listens for changes in the component state

##When to use React?

* A lot of data that changes over time?
* Want a more flex tech stack (you can use react with angular or meteor)
	* React recognizes that there is an old state and a new state
	* If you have a list of 1000 items and #500 needs to change, it'll just change that line instead of redo the whole thing?
	* React is dumb because you don't have to be aware off the other layers 
* You can render react from the server
	* As soon as someone pings the server (aka goes to your site), app is ready to go. Doesn't need index.html
* Another thing about react, React Native - works across iPhone and android

	###Cons of React
	* Less documentation
	* Smaller than angular
	

##Basics of React - Components

* In React Components, mix JS with HTML
	* This is awesome for designers because they can code within the JS. 
	*  React is one big component with components
	* It's kind of the opposite of angular - which is JS within HTML
* Easy to predict UI output
* Every react component needs a render function (because it's the V?)
* JS/JSX
	* JSX needs a compiler for the browser to see it
	* Some people use BABEL - talk about that later
* Data in React Components come from PROPS and STATE
	* BOTH:
		* Plain JS Objects
		* Changes trigger re-render
	* Main difference: how they're used to communicate with each other
		* PROPS:
			* Passing down components
			* received from above
			* immutable as far as component's concerned
		* STATE:
			* represents a point in time
			* starts with default value
			* components manage their own state, doesn't interfere with state of any of it's child components besides setting initial state. state is "private"
			* Manages things in the layer it referred to
		* Example
	 
		```
		<twitter>
			<tweetform/>
			<tweetfeed [data=tweetfeed]/>
		</twitter>
		```
		* we want to call the API for all the things in backend
		* we have to move the data from the parent component to the child component
			* so we set a PROP: `[data=tweetfeed]`
		* state is what you use if you want to manage data within a component
			* so if you don't use a state, it says safe
			* props are immutable in any other component but the parent

##Live Coding Notes
* vars must start with capital letter in React
* render function can only return one HTML element at a time
* if you want to render two, you have to wrap it in a parent div
* handlebars mean JS, not JSX
* prevent default = don't refresh the page
* another weird thing about react, you can't say class. you say className. 

	```
	<li className="list-item">
		{elem}
	</li>
	```

###The example app is [here](https://github.com/zckly/reacttutorial)


##ToDo List App
We'll get to see how data is passed around, & states and props in action with Click Handlers

```
<app>
	<todoForm/>
	<todoList/>
</app>
```

##Flux Application
Flux is more scalable. If you send all the data to the parent, it's going to be so slow. But if you do it component by component, that's when flux is cool. 

In this one, they all have a state, instead of just the parent element

```
<app> state
	<todoForm/> state
	<todoList/> state
</app>
```

* On FB, your notifications should change on your computer when you read a message on your phone.

	* Initial state
		* New message = 1
	* Read messages from Phone
		* New message = 0	
	* Read messages from computer
		* New message = 0

##React Native
Looks just like React, but doesn't run in your browser, runs in your iPhone
	
* Previously in mobile world, using JS wasn't best architecturally
* But with this, it compiles this into objective C, so it's like Native code
* Instagram is React Native
* They had a mobile client first, and then wanted to create a web client, so they changed their code. 


###Resources on [Zach's readme](https://github.com/zckly/reacttutorial)


