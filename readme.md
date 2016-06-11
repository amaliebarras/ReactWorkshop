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

##When to use React?

* A lot of data that changes over time?
* Want a more flex tech stack (you can use react with angular or)
	* React recognizes that there is an old state and a new state
	* If you have a list of 1000 items and #500 needs to change, it'll just change that line instead of redo the whole thing?
	* React is dumb because you don't have to be aware off the other layers 
* You can render react from the server
	* As soon as someone pings the server, app is ready to go. Doesn't need index.html
* Another thing about react, React Native - works across iPhone and android

##Basics of React - Components

* In React Components, mix JS with HTML
	* This is awesome for designers because they can code within the JS. 
* Easy to predict UI output
* Every react component needs a render function (because it's the V?)
* JS/JSX
	* JSX needs a compiler for the browser to see it
* Data in React Components come from PROPS and STATE
	* BOTH:
		* Plain JS Objects
		* Changes trigger re-render
	* PROPS:
		* Passing down components
	* STATE:
		* Manages things in the layer it referred to

		```
		<app>
			<header/>
			<newsfeed/>
		</app>
		```